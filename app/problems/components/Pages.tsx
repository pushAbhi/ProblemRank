const BUTTON_NEXT_PREV = "px-5 py-2 bg-secondary text-foreground border border-black/30 shadow rounded-sm hover:cursor-pointer"
const BUTTON_PAGE = "px-3 py-1 bg-secondary border border-black/20 hover:cursor-pointer"

export default function Pages() {
    return (
        <div className="flex justify-center items-center gap-5">

            <button className={BUTTON_NEXT_PREV}
            >{"<"} Previous</button>
            
            <button className={BUTTON_PAGE}>1</button>
            <button className={BUTTON_PAGE}>2</button>
            <button className={BUTTON_PAGE}>3</button>
            <span>...</span>
            <button className={BUTTON_PAGE}>31</button>

            <button className={BUTTON_NEXT_PREV}
            >Next {">"}</button>
        </div>
    )
}