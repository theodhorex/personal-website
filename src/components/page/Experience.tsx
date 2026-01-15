// Components
import ExperienceCard from "../ui/card/ExperienceCard";

const experiences = [
    {
        id: 1,
        title: "Fullstack Web Developer",
        description: "Building web applications using React, Next.js, and Tailwind CSS.",
        duration: "Job Duration - 5 Years",
    },
    {
        id: 2,
        title: "Frontend Engineer",
        description: "Focused on UI/UX, performance optimization, and accessibility.",
        duration: "Job Duration - 3 Years",
    },
    {
        id: 3,
        title: "Freelance Web Developer",
        description: "Handling client projects, from landing pages to dashboards.",
        duration: "Job Duration - 2 Years",
    },
];


export default function Experience() {
    return (
        <div>
            <h1 className="text-5xl font-bold uppercase text-center">Experience</h1>
            <p className="text-center w-[35%] block mx-auto my-4 mb-9">Perferendis nam nobis doloremque ullam dolore architecto dignissimos eveniet dolorum voluptate? Maxime.</p>

            {/* Loop Experience here */}
            {experiences.map((exp, index) => (
                <ExperienceCard
                    key={exp.id}
                    index={index + 1}
                    title={exp.title}
                    description={exp.description}
                    duration={exp.duration}
                />
            ))}
        </div>
    );
}