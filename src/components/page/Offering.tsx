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
            <h1 className="mt-7 mb-15 font-bold text-5xl uppercase">
                What I'm <br />Offering
            </h1>

            <div className="flex gap-24 mx-15">
                <div className="flex justify-center items-center">
                    <div>
                        <center>
                            <span className="text-xs tracking-widest text-black writing-vertical">
                                EXPLORE
                            </span>
                        </center>
                        <center className="my-3">
                            <span className="block w-px h-30 bg-black"></span>
                        </center>
                        <div className="bg-black text-white rounded-full p-4 w-fit down-arrow">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M11.7547 20.9888C11.8923 21.1495 12.0966 21.2514 12.3247 21.2514L12.3264 21.2514C12.5188 21.2518 12.7113 21.1786 12.8581 21.0319L18.8583 15.0359C19.1513 14.7431 19.1514 14.2682 18.8586 13.9752C18.5659 13.6822 18.091 13.6821 17.798 13.9749L13.0747 18.6948L13.0747 4.5C13.0747 4.08579 12.7389 3.75 12.3247 3.75C11.9105 3.75 11.5747 4.08579 11.5747 4.5L11.5747 18.6883L6.85829 13.9749C6.5653 13.6821 6.09043 13.6822 5.79763 13.9752C5.50483 14.2682 5.50498 14.7431 5.79796 15.0359L11.7547 20.9888Z" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-6">
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

            <div className="grid grid-cols-3">
                <div className="">

                </div>
                <div className="col-span-2">


                </div>
            </div>
        </div>
    );
}