import React from "react";
import Picture from "../picture";
import { PostTileType } from "./types";
import Link from "next/link";
import { formatDate } from "../../utils/formatDate";

const PostBody: React.VFC<PostTileType> = ({
  coverImage,
  date,
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
          slug={`/posts/${slug}`}
        />
      )}
      {tileType === "default" && (
        <Picture
          modifierClass="post-tile--picture"
          height="400"
          coverImage={coverImage}
          slug={`/posts/${slug}`}
        />
      )}
      {tileType === "strip" && (
        <Picture
          modifierClass="post-tile--picture"
          height="300"
          coverImage={coverImage}
          slug={`/posts/${slug}`}
        />
      )}
      {tileType === "mini" && (
        <Picture
          modifierClass="post-tile--picture"
          height="100"
          coverImage={coverImage}
          slug={`/posts/${slug}`}
        />
      )}
      <div className="post-tile--copy">
        <small className="post-tile--category">{category}</small>
        <h2 className={`post-tile--title ${tileType}`}>
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h2>
        {tileType !== "mini" && (
          <p className="post-tile--excerpt">
            <Link href={`/posts/${slug}`}>{excerpt}</Link>
          </p>
        )}
        <p className="post-tile--author">
          {author}

          <br />
          <span className="post-tile--date">{formatDate(date)}</span>
        </p>
      </div>
    </>
  );
};

export default PostBody;
