import { ResponsiveImageType } from "react-datocms";

export interface PostTileType {
  id: string;
  date: string;
  author: string;
  slug: string;
  coverImage: {
    responsiveImage: ResponsiveImageType;
  };
  category: string;
  title: string;
  excerpt: string;
  tileType: "feature" | "mini" | "strip" | "default";
}
