import _ from "lodash";

import Layout from "../../components/layout";
import Container from "../../components/container";
import PostTile from "../../components/post-tile";

// Types
import type { GetStaticProps, GetStaticPaths } from "next";

// Graphql
import { request } from "../../lib/datocms";
import { ALL_CATEGORIES_QUERY, ALL_POSTS_QUERY } from "../../lib/query";
import { PostType } from "../../types";

// Utils
import { parseCategories } from "../../utils/parseCategories";

type CategoryType = {
  slug: string;
  category: {
    name: string;
    slug: string;
  };
};

type PostPageType = {
  data: any;
  allPosts: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({
    query: ALL_CATEGORIES_QUERY,
    variables: null,
    preview: false,
  });

  return {
    paths: data.allPosts.map(
      (post: CategoryType) => `/category/${post.category.slug}`
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await request({
    query: ALL_POSTS_QUERY,
    variables: null,
    preview: false,
  });
  return {
    props: { allPosts },
  };
};

const CategoryPage: React.FC<PostPageType> = ({ allPosts }) => {
  const slug = location.pathname;
  const catSlug = slug.split("/");
  const posts = allPosts.allPosts.filter(
    (post: any) => post.category.slug === catSlug[2]
  );

  const navItems = parseCategories(allPosts);
  return (
    <Layout navItems={navItems}>
      <Container>
        <div className="page-content category">
          <div className="category-layout">
            <ul className="category-list">
              {posts.map((post: PostType) => {
                return (
                  <li key={post.id}>
                    <PostTile
                      date={post.date}
                      tileType="default"
                      slug={`${post.slug}`}
                      id={post.id}
                      coverImage={post.coverImage}
                      title={post.title}
                      category=""
                      excerpt={post.excerpt}
                      author={post.author.name}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CategoryPage;
