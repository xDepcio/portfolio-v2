"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type CatActions = "sleeping" | "sitting" | "licking"

const catStateMap = {
    sleeping0: "/cat/tile048.png",
    sleeping1: "/cat/tile049.png",
    sleeping2: "/cat/tile050.png",
    sleeping3: "/cat/tile051.png",
    sitting0: "/cat/tile000.png",
    sitting1: "/cat/tile001.png",
    sitting2: "/cat/tile002.png",
    sitting3: "/cat/tile003.png",
    licking0: "/cat/tile016.png",
    licking1: "/cat/tile017.png",
    licking2: "/cat/tile018.png",
    licking3: "/cat/tile019.png",
    licking4: "/cat/tile024.png",
    licking5: "/cat/tile025.png",
    licking6: "/cat/tile026.png",
    licking7: "/cat/tile027.png",
}

export default function Cat() {
    const [catState, setCatState] = useState<keyof typeof catStateMap>("sleeping0")
    const catImgRef = useRef<HTMLImageElement>(null)
    const [catAction, setCatAction] = useState<CatActions>("sleeping")

    function getCatXY() {
        if (catImgRef.current) {
            const rect = catImgRef.current.getBoundingClientRect()
            return {
                x: rect.x,
                y: rect.y,
            }
        }
        return {
            x: null,
            y: null,
        }
    }

    function handleMouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        const { x, y } = getCatXY()
        if (x === null || y === null) return

        const userMouseX = e.clientX
        const userMouseY = e.clientY

        const distBool = userMouseX - x < 100 && userMouseY - y < 100
        if (!distBool) return

        if (catAction === "sleeping") {
            setCatAction("sitting")
            setCatState("sitting0")
        }
    }

    function handleCatClick() {
        setCatAction("licking")
        setCatState("licking0")
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCatState((catState) => {
                // Works? - works.
                switch (catState) {
                    case "sleeping0":
                        return "sleeping1"
                    case "sleeping1":
                        return "sleeping2"
                    case "sleeping2":
                        return "sleeping3"
                    case "sleeping3":
                        return "sleeping0"
                    case "sitting0":
                        return "sitting1"
                    case "sitting1":
                        return "sitting2"
                    case "sitting2":
                        return "sitting3"
                    case "sitting3":
                        return "sitting0"
                    case "licking0":
                        return "licking1"
                    case "licking1":
                        return "licking2"
                    case "licking2":
                        return "licking3"
                    case "licking3":
                        return "licking4"
                    case "licking4":
                        return "licking5"
                    case "licking5":
                        return "licking6"
                    case "licking6":
                        return "licking7"
                    case "licking7":
                        setCatAction("sitting")
                        return "sitting0"
                    default:
                        return catState
                }
            })
            if (catImgRef.current) catImgRef.current.src = catStateMap[catState]
        }, 350)

        return () => clearInterval(interval)
    })

    return (
        <>
            <img onMouseMove={handleMouseMove} onClick={handleCatClick} ref={catImgRef} id="cat-img" loading="lazy" className="absolute left-[110%] bottom-0 [image-rendering:pixelated]" src="/cat/tile048.png" alt="" width={96} height={96} />
        </>
    )
}
