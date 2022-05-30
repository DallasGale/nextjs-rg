import React from "react";
import Picture from "../picture";
import { PostTileType } from "./types";

const PostBody: React.VFC<PostTileType> = ({
  coverImage,
  blurUpThumb,
  // focalPoint,
  slug,
  category,
  title,
  excerpt,
  author,
  tileType,
}) => {
  return (
    <>
      {tileType === "feature" && (
        <Picture
          modifierClass="post-tile--picture"
          height="900"
          coverImage={coverImage}
          blurUpThumb={blurUpThumb}
          // focalPoint={focalPoint}
          slug={`/posts/${slug}`}
        />
      )}
      {tileType === "default" && (
        <Picture
          modifierClass="post-tile--picture"
          height="400"
          coverImage={coverImage}
          blurUpThumb={blurUpThumb}
          // focalPoint={focalPoint}
          slug={`/posts/${slug}`}
        />
      )}
      {tileType === "strip" && (
        <Picture
          modifierClass="post-tile--picture"
          height="300"
          coverImage={coverImage}
          blurUpThumb={blurUpThumb}
          // focalPoint={focalPoint}
          slug={`/posts/${slug}`}
        />
      )}
      {tileType === "mini" && (
        <Picture
          modifierClass="post-tile--picture"
          height="100"
          coverImage={coverImage}
          blurUpThumb={blurUpThumb}
          // focalPoint={focalPoint}
          slug={`/posts/${slug}`}
        />
      )}
      <div className="post-tile--copy">
        <small className="post-tile--category">{category}</small>
        <h2 className={`post-tile--title ${tileType}`}>
          <a href={`/posts/${slug}`}>{title} </a>
        </h2>
        {tileType !== "mini" && (
          <p className="post-tile--excerpt">
            <a href={`/posts/${slug}`}>{excerpt}</a>
          </p>
        )}
        <p className="post-tile--author">{author}</p>
      </div>
    </>
  );
};

export default PostBody;
