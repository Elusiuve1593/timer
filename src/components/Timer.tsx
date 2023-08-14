import { useEffect, useState } from "react"
import module from "./Timer.module.css"

export const Timer = () => {
    const [timer, setTimer] = useState<number>(0)
    const [freeze, setFreeze] = useState<boolean>(false)

    const freezeFunc = () => setFreeze(!freeze)
    const clearFunc = () => {
        setFreeze(true)
        setTimer(0)
    }

    useEffect(() => {
        if (!freeze) {
            const tick = setInterval(() => {
                setTimer(timer + 1)
            }, 1000)

            return () => clearInterval(tick)
        }
    })

    const fullTimerFunc = (timer: number) => {
        const hrs = Math.floor(timer / 3600)
        const min = Math.floor((timer % 3600) / 60)
        const sec = timer % 60

        return `${hrs.toString().padStart(2, "0")}
        : ${min.toString().padStart(2, "0")}
        : ${sec.toString().padStart(2, "0")}`
    }
    return (
        <div className={module.timerBorder}>
            <div className={module.timer}>
                {fullTimerFunc(timer)}
            </div>

            <button
                onClick={freezeFunc}
                className={!freeze ? module.freeze : module.unfreeze}
            >
                {!freeze ? "Stop" : "Start"}
            </button>

            <button
                onClick={clearFunc}
                style={{
                    width: "100px",
                    fontSize: "20px",
                    color: "#2f1a11",
                    padding: "10px",
                    margin: "10px 10px 0 0",
                    backgroundColor: "#987554",
                    borderRadius: "10px",
                    border: "3px solid #2f1a11"
                }}
            >
                Clear
            </button>

        </div>
    )
}