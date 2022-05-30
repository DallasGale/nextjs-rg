import { ResponsiveImageType } from "react-datocms";

export interface PostTileType {
  id: string;
  author: string;
  slug: string;
  coverImage: {
    responsiveImage: ResponsiveImageType;
  };
  blurUpThumb: string;
  category: string;
  title: string;
  excerpt: string;
  tileType: "feature" | "mini" | "strip" | "default";
}
