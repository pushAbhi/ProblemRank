import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer"
import Problems from "@/components/Problems";
import AuthCard from "@/components/AuthCard";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-secondary relative">
      <Navbar />
      <HeroBanner />
      {/* <AuthCard /> */}

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Categories */}
        <Categories />

        {/* Top Problems */}
        <Problems />

        <Footer />
      </main>
    </div>
  );
}