import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import _ from "lodash";

import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import Container from "../../components/container";

// Types
import type { GetStaticProps, GetStaticPaths } from "next";

// Graphql
import { request } from "../../lib/datocms";
import { POST_QUERY, HOMEPAGE_QUERY } from "../../lib/query";

type PostType = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({
    query: `{ allPosts { slug } }`,
    variables: null,
    preview: false,
  });

  console.log({ data });

  return {
    paths: data.allPosts.map((post: PostType) => `/posts/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const postRequest = {
    query: POST_QUERY,
    preview,
    variables: {
      slug: params?.slug,
    },
  };
  const allPostData = await request({
    query: HOMEPAGE_QUERY,
    variables: null,
    preview: false,
  });
  return {
    props: {
      allPostData,
      subscription: preview
        ? {
            ...postRequest,
            initialData: await request(postRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(postRequest),
          },
    },
  };
};

type PostPageType = {
  subscription: any;
  allPostData: any;
};

const PostPage: React.FC<PostPageType> = ({ subscription, allPostData }) => {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  const categories = allPostData.allPosts.map(
    (post: any) => post.category.name
  );
  return (
    <Layout navItems={_.uniq(categories)}>
      <Container>
        <div className="page-content">
          <PostHeader
            coverImage={post.coverImage}
            blurUpThumb={post.coverImage.blurUpThumb}
            title={post.title}
            category={post.category.name}
            excerpt={post.excerpt}
            author={post.author.name}
            date={post.date}
          />
          <article className="post-layout">
            {console.log(post.content)}
            {post.content.value.document.children.map((a: any) =>
              a.children.map((b: any) => {
                return (
                  <p key={b.id} className="post-paragraph">
                    {b.value}
                  </p>
                );
              })
            )}
          </article>
        </div>
      </Container>
    </Layout>
  );
};

export default PostPage;
