import HeroBanner from "@/components/HeroBanner";
import Categories from "@/components/Categories";
import Problems from "@/components/Problems";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-secondary relative">
      <HeroBanner />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Categories />
        <Problems />
      </main>
    </div>
  );
}