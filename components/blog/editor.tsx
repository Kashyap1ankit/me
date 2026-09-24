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
  type MDXEditorMethods,
} from "@mdxeditor/editor";
// @ts-expect-error The package provides the stylesheet at runtime without a TypeScript declaration.
import "@mdxeditor/editor/style.css";
import { tryout, uploadImage } from "@/app/actions/storage";
import random from "random";

export default function Editor({
  readOnly,
  markDownText,
}: {
  readOnly: boolean;
  markDownText: string;
}) {
  const [markDown, setMarkDown] = useState(markDownText);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const refOF = useRef<MDXEditorMethods | null>(null);

  function handleSubmit() {
    if (refOF.current) {
      const rand = random.int(0, 9);
      console.log(rand);
      tryout(refOF.current?.getMarkdown(), rand);
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMarkDown(markDownText);
    if (refOF.current) {
      refOF.current.setMarkdown(markDownText);
    }
  }, [markDownText]);

  const isDark = !mounted || resolvedTheme === "dark";
  const editorClassName = isDark ? "dark-theme dark-editor" : "light-editor";

  async function imageUploader(File: File) {
    const url = uploadImage(File);

    return url;
  }
  return (
    <div
      className="blog-editor-wrapper  xl:w-[1000px] xl:-mx-12  "
      data-theme={isDark ? "dark" : "light"}
    >
      {!readOnly && (
        <button
          className="bg-lightBlue px-4 py-2 my-3 rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
      <MDXEditor
        ref={refOF}
        readOnly={readOnly}
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
            readOnlyDiff: false,
          }),
          frontmatterPlugin(),
          imagePlugin({ imageUploadHandler: imageUploader }),
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),

          toolbarPlugin({
            toolbarContents: () =>
              readOnly ? (
                <></>
              ) : (
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
