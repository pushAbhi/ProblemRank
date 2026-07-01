import { CategoryCard } from "./CategoryCard";

export default function Categories() {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <CategoryCard icon="HelpCircle" label="All problems" count={199} tone="amber" active={false} />
            <CategoryCard icon="HelpCircle" label="All problems" count={199} tone="amber" active={false} />
            <CategoryCard icon="HelpCircle" label="All problems" count={199} tone="amber" active={false} />
            <CategoryCard icon="HelpCircle" label="All problems" count={199} tone="amber" active={false} />
            <CategoryCard icon="HelpCircle" label="All problems" count={199} tone="amber" active={false} />
        </div>
    )
}