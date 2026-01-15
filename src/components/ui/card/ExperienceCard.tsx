type ExperienceCardProps = {
    index: number | string;
    title: string;
    description: string;
    duration: string;
};

export default function ExperienceCard({
    index,
    title,
    description,
    duration,
}: ExperienceCardProps) {
    return (
        <div
            className="
                group
                flex flex-col gap-4
                border border-black
                px-8 py-5 mb-6
                md:flex-row md:items-center md:justify-between
                transition-all duration-300 ease-out
                hover:bg-[#1c1c1c]
                hover:border-transparent
                cursor-pointer
            "
        >
            {/* LEFT */}
            <div className="flex items-center gap-9">
                <span
                    className="
                        font-semibold px-5 py-3 shrink-0
                        bg-black text-white
                        transition-colors duration-300
                    "
                >
                    {index}
                </span>

                <div className="textContent transition-colors duration-300">
                    <h1
                        className="
                            text-2xl font-bold
                            transition-colors duration-300
                            group-hover:text-white
                        "
                    >
                        {title}
                    </h1>
                    <span
                        className="
                            block text-sm text-neutral-700
                            transition-colors duration-300
                            group-hover:text-[#a6a6a6]
                            group-hover:font-semibold
                        "
                    >
                        {description}
                    </span>
                </div>
            </div>

            {/* RIGHT */}
            <div
                className="
                    flex items-center
                    md:mt-0 mt-2
                    transition-colors duration-300
                    group-hover:text-[#cfcaca]
                "
            >
                <div className="mx-8 hidden md:block">
                    <span
                        className="
                            block w-px h-15 bg-black
                            transition-colors duration-300
                            group-hover:bg-white
                        "
                    />
                </div>

                <span className="font-semibold whitespace-nowrap">
                    {duration}
                </span>
            </div>
        </div>
    );
}
