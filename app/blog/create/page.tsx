"use client";

import { useState, useEffect, useRef } from "react";
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
import { generaetOtp } from "@/app/actions/qr";

export default function BlogCreate() {
  const markDown = ``;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const refOF = useRef(null);

  function handleSubmit() {
    console.log(refOF.current && refOF.current?.getMarkdown());
  }

  useEffect(() => {
    setMounted(true);
    // generaetOtp();
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  const editorClassName = isDark ? "dark-theme dark-editor" : "light-editor";

  async function imageUploader(File: File) {
    console.log(File);
    return "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
  }

  return (
    <div
      className="blog-editor-wrapper  xl:w-[1000px] xl:-mx-12  "
      data-theme={isDark ? "dark" : "light"}
    >
      <button onClick={handleSubmit}>Submit</button>
      <MDXEditor
        ref={refOF}
        key={resolvedTheme}
        markdown={markDown}
        className={editorClassName}
        plugins={[
          thematicBreakPlugin(),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
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
    </div>
  );
}
