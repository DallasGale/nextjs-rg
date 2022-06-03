import _ from "lodash";

// Components
import PostTile from "../components/post-tile";
import TextStrip from "../components/text-strip";

// GraphQl
import { request } from "../lib/datocms";
import { ALL_POSTS_QUERY } from "../lib/query";

// Types
import type { HomeType, PostType } from "../types";
import Layout from "../components/layout";
import Container from "../components/container";

// Utils
import { parseCategories } from "../utils/parseCategories";

export async function getStaticProps() {
  const homeData = await request({
    query: ALL_POSTS_QUERY,
    variables: null,
    preview: false,
  });
  return {
    props: { homeData },
  };
}

const Home: React.FC<HomeType> = ({ homeData }) => {
  const featurePost = homeData.allPosts[4];
  const stripPostTop = homeData.allPosts[5];
  const stripPostBottom = homeData.allPosts[6];

  const navItems = parseCategories(homeData);
  return (
    <Layout navItems={navItems}>
      <Container>
        <div className="page-content home">
          <TextStrip
            image={{ src: "/eustace-400.png", alt: "Support Buzzz" }}
            justifyContent="center"
            text="Support <i>Buzz the boy's</i> award winning journalism. <a href='/'>Subscribe today »"
          />

          <div className="grid above-fold">
            <div className="grid-col--thumbnail-posts">
              {homeData.allPosts
                .slice(0, 3)
                .map(
                  ({
                    id,
                    title,
                    category,
                    excerpt,
                    coverImage,
                    date,
                    author,
                    slug,
                  }: PostType) => {
                    return (
                      <PostTile
                        id={id}
                        date={date}
                        tileType="default"
                        slug={slug}
                        key={id}
                        title={title}
                        category={category.name}
                        excerpt={excerpt}
                        coverImage={coverImage}
                        author={author.name}
                      />
                    );
                  }
                )}
            </div>

            <div className="grid-col--featured-posts">
              <PostTile
                id={featurePost.id}
                date={featurePost.date}
                slug={featurePost.slug}
                tileType="feature"
                title={featurePost.title}
                category={featurePost.category.name}
                excerpt={featurePost.excerpt}
                coverImage={featurePost.coverImage}
                author={featurePost.author.name}
              />
              <PostTile
                id={stripPostTop.id}
                slug={stripPostTop.slug}
                date={stripPostTop.date}
                tileType="strip"
                title={stripPostTop.title}
                category={stripPostTop.category.name}
                excerpt={stripPostTop.excerpt}
                coverImage={stripPostTop.coverImage}
                author={stripPostTop.author.name}
              />
              <PostTile
                id={stripPostBottom.id}
                slug={stripPostBottom.slug}
                date={stripPostBottom.date}
                tileType="strip"
                title={stripPostBottom.title}
                category={stripPostBottom.category.name}
                excerpt={stripPostBottom.excerpt}
                coverImage={stripPostBottom.coverImage}
                author={stripPostBottom.author.name}
              />
            </div>

            <div className="grid-col--news-culture">
              <h2 className="title">News & Culture</h2>
              {homeData.allPosts
                .slice(7, 16)
                .map(
                  ({
                    id,
                    title,
                    category,
                    excerpt,
                    coverImage,
                    date,
                    author,
                    slug,
                  }: PostType) => {
                    return (
                      <PostTile
                        id={id}
                        slug={slug}
                        date={date}
                        tileType="mini"
                        key={id}
                        title={title}
                        category={category.name}
                        excerpt={excerpt}
                        coverImage={coverImage}
                        author={author.name}
                      />
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
