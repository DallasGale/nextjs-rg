import React from "react";
import { Image, ResponsiveImageType } from "react-datocms";
interface Props {
  height: string;
  blurUpThumb: string;
  coverImage: {
    responsiveImage: ResponsiveImageType;
  };
  slug: string;
  // focalPoint: {
  //   x: string;
  //   y: string;
  // };
  modifierClass?: string;
}
const Picture: React.VFC<Props> = ({
  // height,
  blurUpThumb,
  coverImage,
  slug,
  // focalPoint,
  modifierClass,
}) => {
  console.log({ coverImage });
  return (
    <div className={`picture ${modifierClass ? modifierClass : ""}`}>
      <a href={slug}>
        <Image data={coverImage.responsiveImage} fadeInDuration={1000} />
      </a>
    </div>
  );
};

export default Picture;
