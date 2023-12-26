import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function ProjectsCarousel() {
    return (
        <Carousel className="w-full max-w-screen-xl">
            <CarouselContent>
                {/* <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">1</span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem> */}
                <CarouselItem className="basis-1/3">
                    <div className="p-1">
                        <div className="text-slate-50 relative flex items-center justify-center">
                            <div className="bg-slate-950/80 text-center w-full h-full rounded-lg absolute flex items-center justify-center flex-col gap-2">
                                <h3 className="[text-shadow:0_0_14px_black] scroll-m-20 text-2xl font-semibold tracking-tight">Project name CLI</h3>
                                <p className="[text-shadow:0_0_14px_black] text-muted-foreground text-sm">Tailwind, React, Express, Typescript</p>
                            </div>
                            <Image className="rounded-lg" src="/strapup-main-page-cut.webp" alt="" width={500} height={0} />
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <div className="p-1">
                        <Image src="/strapup-main-page-cut.webp" alt="" width={500} height={0} />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <div className="p-1">
                        <Image src="/strapup-main-page-cut.webp" alt="" width={500} height={0} />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <div className="p-1">
                        <Image src="/strapup-main-page-cut.webp" alt="" width={500} height={0} />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <div className="p-1">
                        <Image src="/strapup-main-page-cut.webp" alt="" width={500} height={0} />
                    </div>
                </CarouselItem>
                {/* {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))} */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
