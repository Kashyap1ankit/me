export default function BlogPostSkeleton() {
  return (
    <div className="flex flex-col gap-y-6 animate-pulse" aria-hidden="true">
      {/* Title & Short description placeholder */}
      <div className="flex flex-col gap-y-4 mx-2">
        {/* Title placeholder */}
        <div className="h-9 md:h-12 w-4/5 sm:w-2/3 rounded-lg bg-gray-200 dark:bg-gray-800 mt-2" />

        {/* Short description placeholder */}
        <div className="flex flex-col gap-y-2 mt-1">
          <div className="h-4 md:h-5 w-11/12 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 md:h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>

      {/* Metadata row placeholder (Date & Share button) */}
      <div className="flex flex-row justify-between items-center px-2">
        <div className="flex flex-row items-center gap-x-2">
          <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="h-8 w-20 rounded-lg bg-gray-200 dark:bg-gray-800" />
      </div>

      {/* Divider */}
      <div className="w-full border border-zinc-200 dark:border-zinc-800" />

      {/* Content body placeholder */}
      <div className="flex flex-col gap-y-5 px-2">
        {/* Paragraph 1 */}
        <div className="flex flex-col gap-y-2.5">
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-11/12 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* Subheading */}
        <div className="h-6 md:h-7 w-1/3 rounded bg-gray-200 dark:bg-gray-800 mt-2" />

        {/* Paragraph 2 */}
        <div className="flex flex-col gap-y-2.5">
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* Code / Callout block */}
        <div className="h-36 w-full rounded-xl bg-gray-200/80 dark:bg-gray-800/80 my-1" />

        {/* Paragraph 3 */}
        <div className="flex flex-col gap-y-2.5">
          <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
