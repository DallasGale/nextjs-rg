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

export const HOMEPAGE_QUERY = `
query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    id
    category {
      name
    }
    slug
    title
    excerpt
    date
    coverImage {
      responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 750, auto: format }) {
        ${RESPONSIVE_IMAGE_FRAGMENT}
      }
    }
    author {
      name
    }
  }
}`;

export const POST_QUERY = `
query PostBySlug($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    category {
      name
    }
    excerpt
    title
    content {
      value 
    }
    date
    slug
    coverImage {
      responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 750, auto: format }) {
        ${RESPONSIVE_IMAGE_FRAGMENT}
      }
    }
    author {
      name
    }
  }
}
`;
