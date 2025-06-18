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
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
          cta: "Become a Host",
        },
      },
      {
        type: "header",
        name: "Header Two",
        componentKey: "header_two",
        previewImage: "/images/header/header_2.png",
        contentData: {
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
          cta: "Contact Sales",
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
          title: "Optimize your website for Search engine",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
          cta: "Get Started",
        },
      },
      {
        type: "hero",
        name: "Hero Two",
        componentKey: "hero_two",
        previewImage: "/images/hero/hero_2.png",
        contentData: {
          title: "Optimize your website for Search engine",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
          extraDescription:
            "Subscribe to our newsletter and we'll save your time",
          cta: "Subscribe",
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
          logo: "https://www.floatui.com/logo.svg",
          title: "Optimize your website for Search engine",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
          cta: "Get Access",
        },
      },
      {
        type: "footer",
        name: "Footer Two",
        componentKey: "footer_two",
        previewImage: "/images/footer/footer_2.png",
        contentData: {
          logo: "https://www.floatui.com/logo.svg",
          description:
            "Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.",
          cta: "Get Access",
        },
      },
    ],
  },
];
