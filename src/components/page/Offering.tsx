import CardFlip from "../ui/card/flip-card"


const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-500 mt-1 shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};

// Icon components (sesuaikan dengan icon yang Anda gunakan)
const UXIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
    </svg>
);

const VisualIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
    </svg>
);

const StrategyIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
    </svg>
);

type CardData = {
    frontIcon: React.ReactNode
    frontTitle: string
    frontSubtitle: string
    title: string
    steps: string[]
    description: string
    color: string
}

const cards: CardData[] = [
    {
        frontIcon: <UXIcon />,
        frontTitle: "UI-UX",
        frontSubtitle: "CREATIVE DESIGN",
        title: "UI/UX Creative Design",
        steps: [
            "User research & analysis",
            "Wireframing & prototyping",
            "Visual design system",
            "Usability testing",
        ],
        description:
            "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
        color: "#3b82f6"
    },
    {
        frontIcon: <VisualIcon />,
        frontTitle: "VISUAL",
        frontSubtitle: "GRAPHIC DESIGN",
        title: "Visual Graphic Design",
        steps: [
            "Brand identity design",
            "Marketing materials",
            "Social media graphics",
            "Print & digital assets",
        ],
        description:
            "Stunning visual designs that communicate your brand message effectively and leave a lasting impression.",
        color: "#8b5cf6"
    },
    {
        frontIcon: <StrategyIcon />,
        frontTitle: "STRATEGY &",
        frontSubtitle: "DIGITAL MARKETING",
        title: "Strategy & Digital Marketing",
        steps: [
            "Market research",
            "SEO optimization",
            "Content strategy",
            "Performance analytics",
        ],
        description:
            "Data-driven strategies that help your business grow and reach the right audience at the right time.",
        color: "#ec4899"
    },
]


export default function Offering() {
    return (
        <div className="py-20 px-8">
            <h1 className="font-semibold">—— Need Services?</h1>
            <h1 className="mt-7 mb-15 font-bold text-5xl uppercase">
                What I'm <br />Offering
            </h1>

            <div className="flex gap-24 mx-13 mt-16">
                <div className="flex justify-center items-center">
                    <div>
                        <center>
                            <span className="text-xs tracking-widest writing-vertical">
                                EXPLORE
                            </span>
                        </center>
                        <center className="my-3">
                            <span className="block w-px h-30 bg-black"></span>
                        </center>
                        <div className="bg-black text-white rounded-full p-4 w-fit down-arrow cursor-pointer hover:scale-110 transition-transform">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M11.7547 20.9888C11.8923 21.1495 12.0966 21.2514 12.3247 21.2514L12.3264 21.2514C12.5188 21.2518 12.7113 21.1786 12.8581 21.0319L18.8583 15.0359C19.1513 14.7431 19.1514 14.2682 18.8586 13.9752C18.5659 13.6822 18.091 13.6821 17.798 13.9749L13.0747 18.6948L13.0747 4.5C13.0747 4.08579 12.7389 3.75 12.3247 3.75C11.9105 3.75 11.5747 4.08579 11.5747 4.5L11.5747 18.6883L6.85829 13.9749C6.5653 13.6821 6.09043 13.6822 5.79763 13.9752C5.50483 14.2682 5.50498 14.7431 5.79796 15.0359L11.7547 20.9888Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-6 flex-wrap">
                    {cards.map((card, index) => (
                        <CardFlip 
                            key={index}
                            // Front side props (minimalist style seperti gambar)
                            frontIcon={card.frontIcon}
                            frontTitle={card.frontTitle}
                            frontSubtitle={card.frontSubtitle}
                            
                            // Back side props
                            title={card.title}
                            description={card.description}
                            features={card.steps}
                            
                            // Styling
                            color={card.color}
                            buttonText="Learn More"
                            className="h-[400px] w-[320px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}