import Link from "next/link";
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
      <Image
        pictureClassName="picture__img"
        data={coverImage.responsiveImage}
        fadeInDuration={1000}
        // layout="responsive"
      />
    </div>
  );
};

export default Picture;
