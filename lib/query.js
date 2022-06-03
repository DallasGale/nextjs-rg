const RESPONSIVE_IMAGE_FRAGMENT = `
  aspectRatio
  base64
  height
  sizes
  src
  srcSet
  width
  alt
  title
`;

export const ALL_POSTS_QUERY = `
query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    id
    date
    category {
      name
      slug
    }
    slug
    title
    excerpt
    date
    coverImage {
      responsiveImage(imgixParams: { fit: crop, crop: faces,  ar: "16:9", w: 750, fm: webp, q: 50 }) {
        ${RESPONSIVE_IMAGE_FRAGMENT}
      }
    }
    author {
      name
    }
  }
}`;

export const ALL_CATEGORIES_QUERY = `
query HomePage {
  allPosts {
    category {
      name
      slug
    }
  } 
}`;

export const POST_QUERY = `
query PostBySlug($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    date
    category {
      name
      slug
    }
    excerpt
    title
    content {
      value 
    }
    date
    slug
    coverImage {
      responsiveImage(imgixParams: { fit: crop, crop: faces, ar: "9:16", w: 1200, fm: webp, q: 50 }) {
        ${RESPONSIVE_IMAGE_FRAGMENT}
      }
    }
    author {
      name
    }
  }
}
`;
