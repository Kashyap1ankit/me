"use client";

import Link from "next/link";
import { manrope, space } from "@/public/font";
import {
  FileQuestion,
  BookOpen,
  SearchX,
  ArrowLeft,
  Home,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export interface NoBlogPostProps {
  /**
   * The context/mode:
   * - "not-found": Requested blog slug does not exist (404)
   * - "empty": No blogs exist on the platform yet
   * - "no-tag-match": Filter selected, but no blogs match the tag
   */
  type?: "not-found" | "empty" | "no-tag-match";
  slug?: string;
  tag?: string;
  title?: string;
  description?: string;
  onResetFilter?: () => void;
  className?: string;
}

export default function NoBlogPost({
  type = "not-found",
  slug,
  tag,
  title,
  description,
  onResetFilter,
  className = "",
}: NoBlogPostProps) {
  // Determine copy and visuals based on type
  let defaultTitle = "";
  let defaultDescription = "";
  let badgeLabel = "";
  let badgeColor = "";
  let IconComponent = FileQuestion;

  if (type === "not-found") {
    defaultTitle = "Blog Post Not Found";
    defaultDescription = slug
      ? `We couldn't find an article matching "${slug}". It might have been moved, renamed, or hasn't been published yet.`
      : "The blog post you are looking for does not exist or has been removed from storage.";
    badgeLabel = "404";
    badgeColor =
      "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
    IconComponent = FileQuestion;
  } else if (type === "no-tag-match") {
    defaultTitle = tag ? `No posts under "${tag}"` : "No Posts Found";
    defaultDescription = tag
      ? `There are currently no published articles tagged with "${tag}". Try selecting another category or clear the filter.`
      : "No blog posts matched your active filter.";
    badgeLabel = tag ? `#${tag}` : "Filtered";
    badgeColor =
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    IconComponent = SearchX;
  } else {
    // "empty"
    defaultTitle = "No Blog Posts Yet";
    defaultDescription =
      "I haven't published any articles yet. Technical deep dives, personal opinions, and project recaps will appear here soon!";
    badgeLabel = "Coming Soon";
    badgeColor =
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    IconComponent = BookOpen;
  }

  const heading = title || defaultTitle;
  const subtext = description || defaultDescription;

  return (
    <div
      className={`relative w-full overflow-hidden bg-linear-to-b from-zinc-50/90 via-white to-zinc-50/50 dark:from-zinc-900/40 dark:via-zinc-950/60 dark:to-black/40 px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-14 text-center transition-all duration-300 shadow-xs dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] ${className}`}
    >
      {/* Responsive ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 sm:-top-24 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-linear-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-600/15 dark:via-purple-600/15 dark:to-indigo-600/15 rounded-full blur-2xl sm:blur-3xl opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 sm:-bottom-24 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-linear-to-br from-emerald-500/10 via-sky-500/5 to-transparent dark:from-emerald-500/10 dark:via-sky-500/5 rounded-full blur-xl sm:blur-2xl opacity-70"
      />

      {/* Subtle decorative dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:opacity-30"
      />

      <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto">
        {/* Responsive Stylized Icon Box */}
        <div className="relative mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center">
          {/* Decorative rotated background card */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rotate-6 opacity-70 transition-transform duration-300 hover:rotate-12" />

          {/* Inner frosted icon container */}
          <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-zinc-200/90 dark:border-zinc-700/60 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-sm dark:shadow-inner">
            <IconComponent className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 stroke-[1.75] text-zinc-700 dark:text-zinc-200" />

            {/* Corner badge */}
            <span
              className={`absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 flex items-center justify-center rounded-full border px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs ${badgeColor}`}
            >
              {badgeLabel}
            </span>
          </div>
        </div>

        {/* Heading */}
        <h3
          className={`${space.className} text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 px-2`}
        >
          {heading}
        </h3>

        {/* Description */}
        <p
          className={`${manrope.className} mx-auto mt-2 sm:mt-3 max-w-xs sm:max-w-md md:max-w-lg text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed px-2`}
        >
          {subtext}
        </p>

        {/* Responsive Slug identifier pill if type === not-found and slug exists */}
        {slug && type === "not-found" && (
          <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono text-zinc-600 dark:text-zinc-400 max-w-full overflow-hidden">
            <span className="text-zinc-400 dark:text-zinc-500 select-none shrink-0">
              slug:
            </span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-[180px] sm:max-w-xs md:max-w-sm">
              {slug}
            </span>
          </div>
        )}

        {/* Action Buttons: Stacks on mobile, inline on sm+ */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 px-2">
          {type === "no-tag-match" && onResetFilter ? (
            <button
              onClick={onResetFilter}
              type="button"
              className={`${manrope.className} cursor-pointer inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-md active:scale-98 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
            >
              <RotateCcw className="h-4 w-4 shrink-0" />
              <span>Clear Filter & Show All</span>
            </button>
          ) : type === "not-found" ? (
            <Link
              href="/blog"
              className={`${manrope.className} inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-md active:scale-98 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              <span>Back to All Blogs</span>
            </Link>
          ) : (
            <Link
              href="/"
              className={`${manrope.className} inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-md active:scale-98 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
            >
              <Home className="h-4 w-4 shrink-0" />
              <span>Back to Home</span>
            </Link>
          )}

          {/* Secondary link */}
          {type === "not-found" ? (
            <Link
              href="/"
              className={`${manrope.className} inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-200/90 bg-white/70 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-700 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 active:scale-98 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white`}
            >
              <Home className="h-4 w-4 shrink-0" />
              <span>Homepage</span>
            </Link>
          ) : type === "no-tag-match" ? (
            <Link
              href="/blog"
              onClick={onResetFilter}
              className={`${manrope.className} inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-200/90 bg-white/70 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-700 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 active:scale-98 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white`}
            >
              <BookOpen className="h-4 w-4 shrink-0" />
              <span>All Articles</span>
            </Link>
          ) : (
            <Link
              href="/projects"
              className={`${manrope.className} inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-200/90 bg-white/70 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-700 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 active:scale-98 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white`}
            >
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>View Projects</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
