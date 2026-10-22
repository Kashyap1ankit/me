interface BlogCardSkeletonProps {
  titleWidth?: string;
  descWidth1?: string;
  descWidth2?: string;
}

export default function BlogCardSkeleton({
  titleWidth = "w-3/5 md:w-1/2",
  descWidth1 = "w-11/12",
  descWidth2 = "w-2/3",
}: BlogCardSkeletonProps) {
  return (
    <div className="flex flex-col gap-y-2 animate-pulse" aria-hidden="true">
      <div className="flex flex-col gap-y-2 md:flex-row md:items-center justify-between">
        {/* Title placeholder */}
        <div
          className={`h-7 md:h-8 ${titleWidth} rounded bg-gray-200 dark:bg-gray-800`}
        />

        {/* Tag placeholders */}
        <div className="flex flex-row items-center justify-start gap-x-2">
          <div className="h-6 w-16 rounded-sm bg-gray-200 dark:bg-gray-800" />
          <div className="h-6 w-12 rounded-sm bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>

      {/* Description placeholder */}
      <div className="flex flex-col gap-y-2 my-1">
        <div
          className={`h-4 ${descWidth1} rounded bg-gray-200 dark:bg-gray-800`}
        />
        <div
          className={`h-4 ${descWidth2} rounded bg-gray-200 dark:bg-gray-800`}
        />
      </div>

      {/* Footer (date & link icon) placeholder */}
      <div className="flex flex-row items-center justify-between pt-1">
        <div className="flex flex-row items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="h-4 w-4 rounded bg-gray-200 dark:bg-gray-800" />
      </div>
    </div>
  );
}
