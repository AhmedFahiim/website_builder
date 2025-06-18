export const preMadeSections: Array<{
  blockName: string;
  sections: Array<TSection>;
}> = [
  {
    blockName: "Header",
    sections: [
      {
        type: "header",
        name: "Header One",
        componentKey: "header_one",
        previewImage: "/images/header/header_1.png",
        contentData: {
          logo: {
            name: "logo",
            type: "file",
            content:
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
          },
          cta: { name: "cta", type: "text", content: "Become a Host" },
        },
      },
      {
        type: "header",
        name: "Header Two",
        componentKey: "header_two",
        previewImage: "/images/header/header_2.png",
        contentData: {
          logo: {
            name: "logo",
            type: "file",
            content:
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
          },
          cta: { name: "cta", type: "text", content: "Contact Sales" },
          nav: {
            name: "nav",
            type: "array",
            content: [
              {
                href: "#",
                name: "products",
              },
              {
                href: "#",
                name: "solutions",
              },
              {
                href: "#",
                name: "resources",
              },
            ],
          },
        },
      },
    ],
  },
  {
    blockName: "Hero",
    sections: [
      {
        type: "hero",
        name: "Hero One",
        componentKey: "hero_one",
        previewImage: "/images/hero/hero_1.png",
        contentData: {
          title: {
            name: "title",
            type: "text",
            content: "Optimize your website for Search engine",
          },
          description: {
            name: "description",
            type: "text",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
          },
          cta: { name: "cta", type: "text", content: "Get Started" },
        },
      },
      {
        type: "hero",
        name: "Hero Two",
        componentKey: "hero_two",
        previewImage: "/images/hero/hero_2.png",
        contentData: {
          title: {
            name: "title",
            type: "text",
            content: "Optimize your website for",
          },
          titleSpecialText: {
            name: "titleSpecialText",
            type: "text",
            content: "Search engine",
          },
          description: {
            name: "description",
            type: "text",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
          },
          cta: { name: "cta", type: "text", content: "Subscribe" },
          image: {
            name: "image",
            type: "file",
            content: "https://i.postimg.cc/kgd4WhyS/container.png",
          },
        },
      },
    ],
  },
  {
    blockName: "Footer",
    sections: [
      {
        type: "footer",
        name: "Footer One",
        componentKey: "footer_one",
        previewImage: "/images/footer/footer_1.png",
        contentData: {
          logo: {
            name: "logo",
            type: "file",
            content: "https://www.floatui.com/logo.svg",
          },
          title: {
            name: "title",
            type: "text",
            content: "Optimize your website for Search engine",
          },
          description: {
            name: "description",
            type: "text",
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
          },
          cta: { name: "cta", type: "text", content: "Get Access" },
          nav: {
            name: "nav",
            type: "array",
            content: [
              {
                href: "#",
                name: "Terms",
              },
              {
                href: "#",
                name: "License",
              },
              {
                href: "#",
                name: "Privacy",
              },
              {
                href: "#",
                name: "About us",
              },
            ],
          },
        },
      },
      {
        type: "footer",
        name: "Footer Two",
        componentKey: "footer_two",
        previewImage: "/images/footer/footer_2.png",
        contentData: {
          nav: {
            name: "nav",
            type: "array",
            content: [
              {
                href: "#",
                name: "Terms",
              },
              {
                href: "#",
                name: "License",
              },
              {
                href: "#",
                name: "Privacy",
              },
              {
                href: "#",
                name: "About us",
              },
            ],
          },
          socialLinks: { name: "socialLinks", type: "array", content: [] },
        },
      },
    ],
  },
];
