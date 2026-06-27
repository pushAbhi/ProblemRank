import { CategoriesList } from "./CategoriesList";
import { Suspense } from "react";
import CategoriesListSkeleton from "./CategoriesListSkeleton";

export default function Categories() {
    return (
      <section>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Choose a problem area</h1>
        <p className="mt-1 text-sm text-muted-foreground">Explore problems across different business functions</p>

        <Suspense fallback={<CategoriesListSkeleton />}>
          <CategoriesList />
        </Suspense>
      </section>
    )
}