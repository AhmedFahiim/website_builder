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

interface TSection {
  name: string;
  type: TSectionType;
  componentKey: string;
  previewImage: string;
  order?: number;
  contentData: {
    title?: string;
    logo?: string;
    description?: string;
    extraDescription?: string;
    background?: string;
    cta?: string;
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
