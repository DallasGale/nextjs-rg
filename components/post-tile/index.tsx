import React from "react";
import PostBody from "./body";
import { PostTileType } from "./types";

const PostTile: React.FC<PostTileType> = ({
  id,
  slug,
  coverImage,
  // focalPoint,
  blurUpThumb,
  category,
  title,
  excerpt,
  author,
  tileType,
}) => {
  if (tileType === "feature") {
    return (
      <div className="post-tile post-tile--feature">
        <PostBody
          id={id}
          slug={slug}
          coverImage={coverImage}
          // focalPoint={focalPoint}
          blurUpThumb={blurUpThumb}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="feature"
        />
      </div>
    );
  } else if (tileType === "mini") {
    return (
      <div className="post-tile post-tile--mini">
        <PostBody
          id={id}
          slug={slug}
          coverImage={coverImage}
          // focalPoint={focalPoint}
          blurUpThumb={blurUpThumb}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="mini"
        />
      </div>
    );
  } else if (tileType === "strip") {
    return (
      <div className="post-tile post-tile--strip">
        <PostBody
          id={id}
          slug={slug}
          coverImage={coverImage}
          // focalPoint={focalPoint}
          blurUpThumb={blurUpThumb}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="strip"
        />
      </div>
    );
  } else {
    return (
      <div className="post-tile post-tile--regular">
        <PostBody
          id={id}
          slug={slug}
          coverImage={coverImage}
          // focalPoint={focalPoint}
          blurUpThumb={blurUpThumb}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="default"
        />
      </div>
    );
  }
};

export default PostTile;
