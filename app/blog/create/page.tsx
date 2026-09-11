"use client";

import { MDXEditor, headingsPlugin } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function BlogCreate() {
  return <MDXEditor markdown={"# Hello World"} plugins={[headingsPlugin()]} />;
}
