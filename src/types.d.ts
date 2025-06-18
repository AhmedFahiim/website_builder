type TSectionType =
  | "header"
  | "footer"
  | "hero"
  | "about"
  | "services"
  | "blogs"
  | "contact"
  | "faq"
  | "gallery"
  | "pricing"
  | "team"
  | "testimonials";

type TContentDataItem = {
  name: string;
  type: "text" | "file" | "array";
  content: string | TLinks | Array<{ icon: React.ReactNode; href: string }>;
};

interface TSection {
  name: string;
  type: TSectionType;
  componentKey: string;
  previewImage: string;
  order?: number;
  contentData: {
    title?: TContentDataItem;
    titleSpecialText?: TContentDataItem;
    logo?: TContentDataItem;
    nav?: TContentDataItem;
    socialLinks?: TContentDataItem;
    description?: TContentDataItem;
    extraDescription?: TContentDataItem;
    image?: TContentDataItem;
    cta?: TContentDataItem;
  };
}

interface TProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  cover: string;
  lastUpdate: Date;
  createdAt: Date;
  sections?: Array<TSection>;
}

type TLinks = Array<{ name: string; icon?: string; href: string }>;
