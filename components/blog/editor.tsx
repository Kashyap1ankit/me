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
  frontmatterPlugin,
  type MDXEditorMethods,
  ListsToggle,
  Separator,
  InsertThematicBreak,
  InsertAdmonition,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { tryout, uploadImage } from "@/app/actions/storage";
import { toast } from "@/components/ui/toast";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { hanken } from "@/public/font";
import { blogTags } from "@/lib/constant";
import { X } from "lucide-react";
import { blogtagType } from "@/lib/types";

export default function Editor({
  readOnly,
  markDownText,
}: {
  readOnly: boolean;
  markDownText: string;
}) {
  const [markDown, setMarkDown] = useState(markDownText);
  const [selectedCategory, setSelectedCategory] = useState<blogtagType>(null);
  const [title, setTitle] = useState("A RANDOM BLOG");
  const [shortDes, setShortDes] = useState("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const refOF = useRef<MDXEditorMethods | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit() {
    try {
      setLoading(true);
      if (refOF.current) {
        const blogObject = {
          title: title,
          description: refOF.current?.getMarkdown(),
          tag: selectedCategory,
          createdAt: Date.now(),
          shortDes: shortDes,
        };
        tryout(JSON.stringify(blogObject));
        router.push("/blog");
      }
    } catch (error) {
      toast.add({
        type: "error",
        title: "Error occured",
      });
    } finally {
      setLoading(false);
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

  function removeCategory(value: string) {
    setSelectedCategory(
      (prev: blogtagType) =>
        prev && prev?.filter((item) => !item.value.includes(value)),
    );
  }

  return (
    <div
      className={`${!readOnly ? " flex flex-col gap-y-4 " : ""}`}
      data-theme={isDark ? "dark" : "light"}
    >
      {!readOnly && (
        <div className="flex justify-between items-center  gap-x-6 px-2">
          <Field className=" dark:bg-black dark:rounded-0">
            <Input
              required
              id="input-field-username"
              type="text"
              placeholder="Title"
              className="text-black dark:text-white focus-visible:border-ring focus-visible:ring-0 border-0 text-xl md:text-xl dark:bg-black dark:rounded-0 "
              autoFocus
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </Field>

          <Dialog>
            <DialogTrigger>
              <button className=" bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue  p-2 w-fit text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20 px-4 py-2 my-3 rounded-lg cursor-pointer">
                <p>Next</p>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Select Category for this blog</DialogTitle>

                <DialogDescription>
                  Select one or more categories for this blog.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-y-3 w-full min-w-0">
                <Select
                  items={blogTags}
                  multiple
                  value={selectedCategory?.map((item) => item.value) ?? []}
                  onValueChange={(values: string[]) => {
                    const selected = values.map((val) => {
                      const found = blogTags.find((tag) => tag.value === val);
                      return (
                        found || {
                          label:
                            val.slice(0, 1).toUpperCase() +
                            val.slice(1).toLowerCase(),
                          value: val,
                        }
                      );
                    });
                    setSelectedCategory(selected);
                  }}
                >
                  <SelectTrigger className="w-full min-w-0 overflow-hidden">
                    <SelectValue
                      placeholder="Category"
                      className="truncate block"
                    />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    <SelectGroup>
                      {blogTags.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {selectedCategory && selectedCategory.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2 mt-2 max-h-32 overflow-y-auto">
                    {selectedCategory.map(
                      (e: { label: string; value: string }) => {
                        return (
                          <div
                            key={e.value}
                            className="flex flex-row items-center gap-x-2 py-1 px-2 bg-gray-200 dark:bg-zinc-800 rounded-md shrink-0"
                          >
                            <p
                              className={`${hanken.className} text-[10px] text-gray-600 dark:text-gray-300`}
                            >
                              {e.label}
                            </p>

                            <X
                              className="w-3 h-3 cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                              onClick={() => {
                                removeCategory(e.value);
                              }}
                            />
                          </div>
                        );
                      },
                    )}
                  </div>
                ) : null}
              </div>

              <Field className=" dark:bg-black dark:rounded-0">
                <Input
                  required
                  id="input-field-short-description"
                  type="text"
                  placeholder="Short description of blog"
                  className="text-black dark:text-white focus-visible:border-ring focus-visible:ring-0 border-0 text-md md:text-md dark:bg-black dark:rounded-0 "
                  onChange={(e) => setShortDes(e.currentTarget.value)}
                />
              </Field>

              <button
                className=" bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue  p-2 w-fit text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20 px-4 py-2 my-3 rounded-lg cursor-pointer w-full"
                onClick={handleSubmit}
              >
                <p>Submit Blog</p>
              </button>
            </DialogContent>
          </Dialog>
        </div>
      )}
      <MDXEditor
        ref={refOF}
        readOnly={readOnly}
        key={resolvedTheme}
        markdown={markDown}
        className={editorClassName}
        contentEditableClassName="mdx-content"
        plugins={[
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          thematicBreakPlugin(),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
          linkPlugin(),
          thematicBreakPlugin(),

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
                    <Separator />
                    <BoldItalicUnderlineToggles />
                    <InsertThematicBreak />
                    <Separator />
                    <ListsToggle />
                    <BlockTypeSelect />
                    <CodeToggle />
                    <CreateLink />

                    <Separator />
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
                              <InsertAdmonition />
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
