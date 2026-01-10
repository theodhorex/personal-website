import { CardSpotlight } from "../ui/card/card-spotlight"



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

type CardData = {
    title: string
    steps: string[]
    description: string
}

const cards: CardData[] = [
    {
        title: "Authentication steps",
        steps: [
            "Enter your email address",
            "Create a strong password",
            "Set up two-factor authentication",
            "Verify your identity",
        ],
        description:
            "Ensuring your account is properly secured helps protect your personal information and data.",
    },
    {
        title: "Onboarding process",
        steps: [
            "Create an account",
            "Complete your profile",
            "Choose your preferences",
            "Start using the platform",
        ],
        description:
            "A smooth onboarding helps you get started quickly and efficiently.",
    },
]


export default function Offering() {
    return (
        <div>
            <h1 className="font-semibold">—— Need Services?</h1>
            <h1 className="font-bold text-5xl uppercase">
                What I'm <br />Offering
            </h1>
            <div className="grid grid-cols-3">
                <div></div>
                <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <CardSpotlight key={index} className="h-75 w-75">
                                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                                    {card.title}
                                </p>

                                <div className="text-neutral-200 mt-4 relative z-20">
                                    Follow these steps:
                                    <ul className="list-none mt-2">
                                        {card.steps.map((step, i) => (
                                            <Step key={i} title={step} />
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                    {card.description}
                                </p>
                            </CardSpotlight>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}