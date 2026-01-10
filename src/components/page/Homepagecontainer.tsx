import Hyperspeed from "@/components/background/Hyperspeed"
import Waves from "@/components/background/Waves"
import { Button } from "@/components/ui/buttons/moving-border"

export default function Homepagecontainer() {

    const items = [
        "Clean UI & thoughtful UX",
        "Modern web technologies",
        "Open for collaboration & opportunities"
    ]

    return (
        <div className="flex gap-7">
            <div className="left">
                <h1 className="font-bold text-5xl">
                    <img className="w-20 h-fit" src="https://cdn.dribbble.com/userupload/22732842/file/original-9d65e9da6a39ca17442a9ef0c55fd442.gif" alt="" />
                    <span className="font-thin">Hello!</span> I'm Theodhore Riyanto
                </h1>
                <div className="flex items-center my-4">
                    <p className="me-6">—————————— Fullstack Web Developer.</p>
                    <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM19jWqp26imE_icuU_YJl3uVcPCh2dT5rQ&s" alt="" />
                </div>

                <p className="text-sm font-semibold mb-5">
                    I design and develop end-to-end web applications with a strong focus on clean design and performance. <br />
                    Currently exploring Web3 technologies and real-world blockchain use cases.
                </p>

                <ul className="mb-7">
                    {items.map((item) => (
                        <div className="flex gap-2">
                            <img className="w-5" src="https://icons.veryicon.com/png/o/miscellaneous/template-4/checklist-11.png" alt="" />
                            <li className="font-semibold" key={item}>{item} </li>
                        </div>
                    ))}
                </ul>

                <div className="cta flex gap-3">
                    <button className="bg-black text-white rounded-full px-7 py-2">Let's Talk</button>
                    <button className="border-b-2 h-fit border-black font-semibold px-7 py-2 flex items-center gap-2">Download Cv <img className="w-4 h-3" src="https://static.vecteezy.com/system/resources/previews/019/879/209/non_2x/download-button-on-transparent-background-free-png.png" alt="" /></button>
                </div>
            </div>

            <div className="right-poster block m-auto">
                <div className="w-[35em] h-[35em] relative overflow-hidden">
                    <Waves
                        className="w-full h-full"
                        lineColor="#000000"
                        backgroundColor="rgba(240, 240, 240, 0.2)"
                        waveSpeedX={0.15}
                        waveSpeedY={0.01}
                        waveAmpX={60}
                        waveAmpY={20}
                        friction={0.9}
                        tension={0.05}
                        maxCursorMove={120}
                        xGap={12}
                        yGap={36}
                    />
                </div>
            </div>
        </div>
    )
}