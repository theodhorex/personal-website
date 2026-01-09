import Hyperspeed from "@/components/background/Hyperspeed"

export default function Homepagecontainer() {

    const items = [
        "Clean UI & thoughtful UX",
        "Modern web technologies",
        "Open for collaboration & opportunities"
    ]

    return (
        <div>
            <h1 className="font-bold text-5xl">
                <span className="font-thin">Hello!</span> I'm Theodhore
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
                <button className="underline font-semibold px-7 py-2 flex items-center gap-2">Download Cv <img className="w-4 h-3" src="https://static.vecteezy.com/system/resources/previews/019/879/209/non_2x/download-button-on-transparent-background-free-png.png" alt="" /></button>
            </div>


            <Hyperspeed
                effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'turbulentDistortion',
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0xFFFFFF,
                        brokenLines: 0xFFFFFF,
                        leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                        sticks: 0x03B3C3,
                    }
                }}
            />
        </div>
    )
}