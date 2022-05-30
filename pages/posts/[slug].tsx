import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

// import MoreStories from "../../components/more-stories"
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-seperator";
import { request } from "../../lib/datocms";

// Types
import type { GetStaticProps, GetStaticPaths } from "next";

// Graphql
import { POST_QUERY } from "../../lib/query";

type PostType = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts.map((post: PostType) => `/posts/${post.slug}`),
    fallback: false,
  };
};

// const CATEGORIES_QUERY = `query AllCategoties {
//   allCategories {
//     name
//     slug
//     id
//   }
// }`;

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  // const category_data = await request({
  //   query: CATEGORIES_QUERY,
  //   variables: {},
  //   preview: false,
  // });
  const graphqlRequest = {
    query: POST_QUERY,
    preview,
    variables: {
      slug: params?.slug,
    },
  };

  return {
    props: {
      // category_data,
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
};

type PostPageType = {
  subscription: any;
  category_data: any;
};

const PostPage: React.FC<PostPageType> = ({ subscription, category_data }) => {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  // console.log({ category_data });

  return (
    <>
      <div className="page-content">
        <PostHeader
          coverImage={post.coverImage.url}
          blurUpThumb={post.coverImage.blurUpThumb}
          // focalPoint={post.coverImage.focalPoint}
          title={post.title}
          category={post.category.name}
          excerpt={post.excerpt}
          author={post.author.name}
          date={post.date}
        />
        <article className="post-layout">
          {console.log(post.content)}
          {post.content.value.document.children.map((a) =>
            a.children.map((b) => {
              return (
                <p key={b.id} className="post-paragraph">
                  {b.value}
                </p>
              );
            })
          )}
        </article>
      </div>
      <SectionSeparator />
    </>
  );
};

export default PostPage;
