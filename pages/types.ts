import type { NextPage } from "next/types";
import { ResponsiveImageType } from "react-datocms";

export type HomeType = NextPage & {
  homeData: any;
};

export type PostType = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  excerpt: string;
  coverImage: {
    responsiveImage: ResponsiveImageType;
    blurUpThumb: string;
  };
  author: {
    name: string;
  };
  slug: string;
};
