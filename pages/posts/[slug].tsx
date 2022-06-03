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
import { POST_QUERY, ALL_POSTS_QUERY } from "../../lib/query";
import { PostType } from "../../types";
import { NavType } from "../../components/header";

// Utils
import { parseCategories } from "../../utils/parseCategories";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({
    query: `{ allPosts { slug } }`,
    variables: null,
    preview: false,
  });

  console.log({ data });

  return {
    paths: data.allPosts.map((post: { slug: string }) => `/posts/${post.slug}`),
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
    query: ALL_POSTS_QUERY,
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
    data: { post },
  } = useQuerySubscription(subscription);

  const navItems = parseCategories(allPostData);
  return (
    <Layout navItems={navItems}>
      <Container>
        <div className="page-content">
          <PostHeader
            coverImage={post.coverImage}
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
