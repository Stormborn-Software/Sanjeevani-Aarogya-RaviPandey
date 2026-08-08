export const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const imageSizes = {
  hero: {
    width: 1920,
    height: 1080,
  },
  service: {
    width: 800,
    height: 600,
  },
  testimonial: {
    width: 400,
    height: 400,
  },
};

export const serviceImages = {
  vitiligo: {
    primary:
      "https://plus.unsplash.com/premium_photo-1711611162506-82e7a10722e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  psoriasis: {
    primary:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80",
  },
  kneePain: {
    primary:
      "https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  skinDisease: {
    primary:
      "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  piles: {
    primary:
      "https://plus.unsplash.com/premium_photo-1719618681951-3d59041d9815?q=80&w=798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  infertility: {
    primary:
      "https://images.unsplash.com/photo-1634856435269-13273d4cae64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  womenHealth: {
    primary:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
};

export const generalImages = {
  hero: {
    primary:
      "https://res.cloudinary.com/daw4ojh5s/image/upload/fl_preserve_transparency/v1761406632/1_npd3vk.jpg?_s=public-apps",
    fallback:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80",
  },
  clinic: {
    primary:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
};
