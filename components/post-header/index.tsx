import React from "react";
import { Image, ResponsiveImageType } from "react-datocms";

type PostHeaderType = {
  coverImage: {
    responsiveImage: ResponsiveImageType;
  };
  title: string;
  author: string;
  excerpt: string;
  date: string;
  category: string;
  blurUpThumb: string;
};
const PostHeader: React.FC<PostHeaderType> = ({
  coverImage,
  title,
  author,
  excerpt,
  date,
  category,
  blurUpThumb,
}) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  let isoDate = new Date(date).toISOString();
  let newDate = new Date(isoDate);
  let intlDate = new Intl.DateTimeFormat("en-US", options as any).format(
    newDate
  );

  return (
    <>
      <div className="grid two-col post-header">
        <div className="two-col-grid__col">
          <div className="post-header__content">
            <small className="post-header__category">{category}</small>
            <h1 className="post-header__title">{title}</h1>
            <p className="post-header__excerpt">{excerpt}</p>
            <h2 className="post-header__author">By {author}</h2>
            <small className="post-header__date">{intlDate}</small>
          </div>
        </div>

        <div className="two-col-grid__col">
          <Image
            className="post-header__picture"
            data={coverImage.responsiveImage}
          />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
