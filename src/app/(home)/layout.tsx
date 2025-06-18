import Layout from "@/layout";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}
