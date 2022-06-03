import _ from "lodash";
// Types
import type { PostType } from "../types";
import type { NavType } from "../components/header";

type Props = {
  allPosts: PostType[];
};
export const parseCategories = (data: Props) => {
  const categories = data?.allPosts.map((post: PostType) => post.category);
  const nav: NavType[] = _.uniqBy(categories, (e: NavType) => e.slug);
  return nav;
};
