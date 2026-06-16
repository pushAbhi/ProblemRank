export default function HeroBanner() {
  return (
    <div className="bg-hero-gradient">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-white sm:text-left">
          <span className="mr-2">🚀</span>
          Discover, validate, and rank real-world business problems before building solutions.
        </p>
        <button className="shrink-0 rounded-full border border-white/80 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-foreground">
          Explore Problems
        </button>
      </div>
    </div>
  );
}