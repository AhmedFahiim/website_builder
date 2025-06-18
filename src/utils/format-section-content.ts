export const transformContentData = (contentData: TSection["contentData"]) => {
  const transformed: Record<
    string,
    | string
    | Array<{ name: string; href: string }>
    | Array<{ icon: React.ReactNode; href: string }>
  > = {};

  Object.entries(contentData).forEach(([key, value]) => {
    if (value && typeof value === "object" && "content" in value) {
      transformed[key] = value.content;
    } else {
      transformed[key] = value;
    }
  });

  return transformed;
};
