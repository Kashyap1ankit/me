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
import "@mdxeditor/editor/style.css";
import { tryout, uploadImage } from "@/app/actions/storage";
import random from "random";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Editor({
  readOnly,
  markDownText,
}: {
  readOnly: boolean;
  markDownText: string;
}) {
  const [markDown, setMarkDown] = useState(markDownText);
  const [title, setTitle] = useState("A RANDOM BLOG");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const refOF = useRef<MDXEditorMethods | null>(null);

  function handleSubmit() {
    if (refOF.current) {
      const rand = random.int(0, 9);
      console.log(rand);
      const blogObject = {
        title: title,
        description: refOF.current?.getMarkdown(),
        createdAt: Date.now(),
      };
      tryout(JSON.stringify(blogObject), rand);
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
      className={`${!readOnly ? "blog-editor-wrapper  xl:w-[1000px] xl:-mx-12  " : ""}`}
      data-theme={isDark ? "dark" : "light"}
    >
      {!readOnly && (
        <div className="flex justify-between items-center  gap-x-6">
          <Field>
            <FieldLabel htmlFor="input-field-username text-black">
              Username
            </FieldLabel>
            <Input
              id="input-field-username"
              type="text"
              placeholder="Give it a Title"
              className="text-black fon-bold text-xl ring-0 outline-0 focus-0"
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </Field>

          <button
            className="bg-lightBlue px-4 py-2 my-3 rounded-lg cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
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
