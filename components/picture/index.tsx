import Link from "next/link";
import React from "react";
import { Image, ResponsiveImageType } from "react-datocms";
interface Props {
  height: string;
  coverImage: {
    responsiveImage: ResponsiveImageType;
  };
  slug: string;
  modifierClass?: string;
}
const Picture: React.VFC<Props> = ({ coverImage, slug, modifierClass }) => {
  console.log({ coverImage });
  return (
    <div className={`picture ${modifierClass ? modifierClass : ""}`}>
      <Link href={`${slug}`}>
        <a>
          <Image
            pictureClassName="picture__img"
            data={coverImage.responsiveImage}
            fadeInDuration={1000}
          />
        </a>
      </Link>
    </div>
  );
};

export default Picture;
