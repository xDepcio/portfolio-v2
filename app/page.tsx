import CodingCat from "@/components/CodingCat";
import Footer from "@/components/Footer";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Button } from "@/components/ui/button";
import { ProximaSoft } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Code2, EyeIcon, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { PiDownloadSimpleBold } from "react-icons/pi";


export default function CvPage() {
    return (
        <div className="">
            <div className="p-6 lg:p-0 lg:w-[1152px] m-auto relative">
                <div className="top-[880px] [background-size:250%] h-[1400px] absolute w-full md:h-[1070px] lg:h-[700px] sm:h-[1500px] sm:top-[700px] left-0 sm:[background-size:200%] md:[background-size:100%] -z-10 md:top-[770px] lg:top-[600px] opacity-30" style={{ backgroundImage: `url(/hero-geo.svg)` }}>
                    <div className="innger-bg-geo "></div>
                </div>
                <section className="flex-col lg:flex-row flex justify-center items-center mb-12 gap-8 mt-12">
                    <div className="hidden lg:flex justify-center items-center relative">
                        <div className="absolute -top-[84px] left-[10px]">
                            <CodingCat />
                        </div>
                        <Image alt="profile-img" className="opacity-0" src="/bongo-cat.png" width={1300} height={980} />
                    </div>
                    <div>
                        <p className="text-lg text-muted-foreground font-medium">{`Hi! I'm`}</p>
                        <h1 className={cn(ProximaSoft.className, "text-6xl lg:text-7xl lg:whitespace-nowrap font-bold bg-gradient-to-br from-sky-500 to-sky-800  text-transparent bg-clip-text")}>Aleksander Drwal</h1>
                        <div className="flex items-start mt-6 gap-10 justify-between">
                            <div className="text-slate-100 flex items-center justify-center gap-3">
                                <Image src={"/university.svg"} width={45} height={45} alt={'web-svg'} />
                                <div className="flex flex-col gap-1">
                                    <p className="">Computer Science student</p>
                                    <p className="text-muted-foreground text-sm">Warsaw Univeristy of Technology</p>
                                </div>
                            </div>
                            <div className="text-slate-100 flex items-center justify-center gap-3">
                                <Image src={"/code-svg.svg"} width={45} height={45} alt={'web-svg'} />
                                <div className="flex flex-col gap-1 text-nowrap">
                                    <p className="">Software Developer</p>
                                    <p className="text-muted-foreground text-sm">Full stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lg:grid flex flex-col-reverse lg:grid-cols-2 lg:gap-24 gap-16">
                    <div className="text-slate-50">
                        <p className="text-amber-500 mb-6 text-xs text-center font-bold">Work experience</p>
                        <div className="border border-slate-900 rounded-lg p-4 flex flex-col gap-10">
                            <div className="grid grid-cols-[20%_80%]">
                                <div className="relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-slate-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute w-1 h-20 rounded-full bg-slate-300 left-1/2 top-full -translate-x-1/2 -translate-y-1/2"></div>
                                </div>
                                <div>
                                    <p className="mb-2">Frontend Developer</p>
                                    <p className="text-sm font-medium text-muted-foreground">Havrium</p>
                                    <p className="text-xs text-muted-foreground font-medium">2024 - 2024</p>
                                    <p className="mt-2">Designing UI/UX. Implementing UIs in React.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[20%_80%]">
                                <div className="relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-slate-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute w-1 h-20 rounded-full bg-slate-300 left-1/2 bottom-full -translate-x-1/2 translate-y-1/2"></div>
                                </div>
                                <div>
                                    <p className="mb-2">Software Developer</p>
                                    <p className="text-sm font-medium text-muted-foreground">IT Solutions RDNK</p>
                                    <p className="text-xs text-muted-foreground font-medium">2023 - 2024</p>
                                    <p className="mt-2">Creating automation tools for e-commerce.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-slate-50 flex flex-col justify-between">
                        <div>
                            <div className="text-muted-foreground flex items-center justify-start gap-2">
                                <p className="text-xs">About me</p>
                                <HiChevronDown />
                            </div>
                            <h2 className="mt-4 text-3xl font-medium mb-4">Short bio about me</h2>
                            <p className="">Passionate Computer Science student with a strong interest in software development, devops and UI/UX design. Coding is fun! I spend many hours creating new open-source side projects and learning never-ending new technologies. Most of my projects are self-hosted on personal server running Ubuntu Server 24. In my free time I climb and do rugs 😎.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 mt-4 lg:mt-0 sm:flex sm:items-center sm:justify-start gap-4">
                            <Button>
                                <Link className="flex items-center justify-center gap-2" href={'https://github.com/xDepcio'}>
                                    <p>View Github</p>
                                    <Github />
                                </Link>
                            </Button>
                            <Button>
                                <a href="mailto:olek.drwal@gmail.com" className="flex items-center justify-center gap-2">
                                    <p>Contact me</p>
                                    <FiMail className='text-2xl' />
                                </a>
                            </Button>
                            <Button className="ml-0 sm:ml-auto bg-transparent border-2 border-slate-900 text-muted-foreground">
                                <Link href={'https://drive.google.com/uc?id=1OaXLZyvpu6QoGSOXykGWvv1HgZnuKSor&export=download'} className="flex items-center justify-center gap-2">
                                    <p>Download CV</p>
                                    <PiDownloadSimpleBold />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="text-slate-100 mt-24">
                    <h3 className="text-center font-medium text-muted-foreground">My skills</h3>
                    <div className="flex px-0 gap-[3.4rem] sm:gap-20 sm:px-20 py-10 flex-wrap justify-center items-center">
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">React</p>
                            <Image src={'/react.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">TypeScript</p>
                            <Image src={'/typescript.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">NodeJS</p>
                            <Image src={'/node.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Express</p>
                            <Image src={'/expressjs.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Sequelize</p>
                            <Image src={'/sequelize.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Next.js</p>
                            <Image src={'/nextjs.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">SQL</p>
                            <Image src={'/sql.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Tailwind</p>
                            <Image src={'/tailwind.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Python</p>
                            <Image src={'/python.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">C++</p>
                            <Image src={'/c++.svg'} alt="skill image" width={50} height={50} />
                        </div>
                    </div>
                </section>
                <section className="text-slate-100 mt-24">
                    <div className="flex items-center justify-start gap-2 text-muted-foreground font-medium">
                        <h3 className="">Recent projects</h3>
                        <HiChevronDown />
                    </div>
                    <div className="mt-8 flex flex-col gap-16">
                        <div className="lg:flex-row items-center lg:items-start flex-col flex gap-10">
                            <Image alt="project-1-image" src={"/strapup-main-page-cut.webp"} width={500} height={500}
                                className="shadow-md rounded-lg"
                            />
                            <div className="">
                                <div>
                                    <h4 className="text-xl font-medium mt-4">Strapup - a template CLI</h4>
                                    <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, NodeJS, TailwindCSS, CLI</p>
                                    <p className="mt-6">A project consisting of Strapup npm package - a CLI tool and a website for its doucmentation. It allows to quickly bootstrap any project by running custom scripts and pasting custom templates all from within interactive CLI.</p>
                                </div>
                                <div className="flex gap-4 items-center justify-start mt-10">
                                    <Button >
                                        <Link href={'https://github.com/xDepcio/strapup'} className="flex items-center justify-center gap-2">
                                            <p>See code</p>
                                            <Code2 />
                                        </Link>
                                    </Button>
                                    <Button >
                                        <Link href={'https://strapup.vercel.app/'} className="flex items-center justify-center gap-2">
                                            <p>View deployment</p>
                                            <EyeIcon />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                            <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                            <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                        </div>
                        <div className="items-center lg:items-start flex-col flex gap-10 lg:flex-row-reverse">
                            <Image alt="project-1-image" src={"/boss-monster.webp"} width={500} height={500}
                                className="shadow-md rounded-lg border-y-[20px] border-red-950/40"
                            />
                            <div className="">
                                <div>
                                    <h4 className="text-xl font-medium mt-4">Boss Monsters Tabletop</h4>
                                    <p className="text-sm text-muted-foreground">React, TypeScript, NodeJS, TailwindCSS, Socket.IO, Express</p>
                                    <p className="mt-6">{`Recreation of Boss Monsters - a tabletop RPG, as a multiplayer game on the web. It's one of my older projects, which underwent few cycles of sudden gain and lost of interest in it. (thus TypeScript and Tailwind added half way through). I decided to include It here, as It shows my progress in terms of programming in general and the ability to use the knowledge acquired from other projects.`}</p>
                                </div>
                                <div className="flex gap-4 items-center justify-start mt-10">
                                    <Button >
                                        <Link href={'https://github.com/xDepcio/boss-monster-ts'} className="flex items-center justify-center gap-2">
                                            <p>See code</p>
                                            <Code2 />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-16 mb-16">
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                        <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                        <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center justify-start gap-2 text-muted-foreground font-medium mb-4">
                        <h3 className="">Other projects</h3>
                        <HiChevronDown />
                    </div>
                    <div className="flex items-center justify-center">
                        <ProjectsCarousel projects={[
                            {
                                name: "Minecraft server website",
                                technologies: ["React", "Redux", "JavaScript", "Express", "Sequelize", "StripeAPI"],
                                url: "https://mc-website-full.vercel.app/",
                                image: "/mc-server-tiles-16-9-v2.png"
                            },
                            {
                                name: "Eccomerce website",
                                technologies: ["React", "Redux", "JavaScript", "Express", "Sequelize", "StripeAPI"],
                                url: "https://github.com/xDepcio/eccomerce_store",
                                image: "/ecc-tiles-16-9-v2.png"
                            },
                            {
                                name: "Old portfolio",
                                technologies: ["Next.js", "Tailwind", "Typescript"],
                                url: "/",
                                image: "/portfolio-tiles-16-9.png"
                            },
                            {
                                name: "Desktop Flashcards",
                                technologies: ["Python", "Qt"],
                                url: "https://github.com/xDepcio/projekt-studia-flashcards",
                                image: "/flashcards-tiles-16-9.png"
                            },
                            {
                                name: "Mobile app",
                                technologies: ["React Native", "Express", "Sequelize"],
                                url: "https://github.com/xDepcio/native-app-nfc",
                                image: "/pzps-tiles-16-9.png"
                            },
                            {
                                name: "Desktop chess",
                                technologies: ["C++", "Qt"],
                                url: "https://github.com/xDepcio/chess-cpp",
                                image: "/chess-tiles-16-9.png"
                            },
                            {
                                name: "x86, RISC-V assembly",
                                technologies: [],
                                url: "https://github.com/xDepcio/x86-assembly",
                                image: "/arko-tiles-16-9.png"
                            },
                            {
                                name: "And many more :)",
                                technologies: ["Next.js", "Express", "Prisma", "Python", "Flask", "Golang", "Fiber", "Sequelize", "React", "Redux", "Postgres", "TypeScript", "JavaScript", "TailwindCSS", "NodeJS", "Python", "C++", "Qt", "React Native", "Socket.IO", "C"],
                                url: "https://github.com/xDepcio",
                                image: "/strapup-main-page-cut.webp"
                            }
                        ]} />
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}
