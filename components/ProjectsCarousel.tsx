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
import Link from "next/link"

type Project = {
    name: string
    technologies: string[]
    url: string
    image: string
}
export function ProjectsCarousel({ projects = [] }: { projects: Project[] }) {
    return (
        <Carousel className="w-full max-w-screen-xl">
            <CarouselContent>
                {projects.map((project) => (
                    <CarouselItem key={project.image} className="sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Link href={project.url}>
                                <div className="text-slate-50 relative flex items-center justify-center">
                                    <div className="bg-slate-950/80 text-center w-full h-full rounded-lg absolute flex items-center justify-center flex-col gap-2">
                                        <h3 className="[text-shadow:0_0_14px_black] scroll-m-20 text-2xl font-semibold tracking-tight">{project.name}</h3>
                                        <p className="[text-shadow:0_0_14px_black] text-muted-foreground text-sm">{project.technologies.join(', ')}</p>
                                    </div>
                                    <Image className="rounded-lg aspect-[16/9]" src={project.image} alt="" width={500} height={0} />
                                </div>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="invisible lg:visible" />
            <CarouselNext className="invisible lg:visible" />
        </Carousel>
    )
}
