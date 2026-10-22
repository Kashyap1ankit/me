export default function BlurComponent() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-20 backdrop-blur-md bg-gradient-to-t dark:from-black/80 dark:via-black/25 dark:to-transparent from-white/80 via-white/25 to-transparent"
      aria-hidden="true"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 100%)",
      }}
    />
  );
}
