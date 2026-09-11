"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  BlockTypeSelect,
  ChangeAdmonitionType,
  ChangeCodeMirrorLanguage,
  CodeToggle,
  linkDialogPlugin,
  CreateLink,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  ConditionalContents,
  InsertCodeBlock,
  linkPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  InsertImage,
  imagePlugin,
  InsertTable,
  tablePlugin,
  AdmonitionDirectiveDescriptor,
  directivesPlugin,
  searchPlugin,
  InsertFrontmatter,
  frontmatterPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function BlogCreate() {
  const markDown = ``;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  const editorClassName = isDark
    ? "dark-theme dark-editor"
    : "light-editor";

  async function imageUploader(File: File) {
    console.log(File);
    return "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
  }

  return (
    <MDXEditor
      markdown={markDown}
      className={editorClassName}
      plugins={[
        thematicBreakPlugin(),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        linkPlugin(),
        searchPlugin(),
        tablePlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            tsx: "TypeScript (React)",
          },
        }),
        linkDialogPlugin(),
        diffSourcePlugin({
          viewMode: "rich-text",
          readOnlyDiff: true,
        }),
        frontmatterPlugin(),
        imagePlugin({ imageUploadHandler: imageUploader }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),

        toolbarPlugin({
          toolbarClassName: "my-classname",
          toolbarContents: () => (
            <>
              <DiffSourceToggleWrapper>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CodeToggle />
                <CreateLink />

                <ConditionalContents
                  options={[
                    {
                      when: (editor) => editor?.editorType === "codeblock",
                      contents: () => <ChangeCodeMirrorLanguage />,
                    },
                    {
                      fallback: () => (
                        <>
                          <InsertImage />
                          <InsertCodeBlock />
                          <InsertTable />
                          <InsertFrontmatter />
                        </>
                      ),
                    },
                  ]}
                />
              </DiffSourceToggleWrapper>
            </>
          ),
        }),
      ]}
    />
  );
}
