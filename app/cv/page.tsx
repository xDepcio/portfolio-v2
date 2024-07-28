import { Button } from "@/components/ui/button";
import { ProximaSoft } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowDown, Code, Code2, EyeIcon, Github, MailCheck } from "lucide-react";
import Image from "next/image";
import { BsCaretDown, BsCodeSlash } from "react-icons/bs";
import { FaCaretDown, FaUniversity, FaReact } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export default function CvPage() {
    return (
        <div className="">
            <div className="max-w-[1152px] m-auto relative">
                <div className="absolute w-full h-[700px] -z-10 top-[450px] opacity-30" style={{ backgroundImage: `url(/hero-geo.svg)` }}>
                    <div className="innger-bg-geo "></div>
                </div>
                <section className="flex justify-center items-center mb-16 gap-8 mt-8">
                    <div>
                        <p className="text-lg text-muted-foreground font-medium">{`Hi! I'm`}</p>
                        <h1 className={cn(ProximaSoft.className, "text-7xl whitespace-nowrap font-bold bg-gradient-to-br from-sky-500 to-sky-800  text-transparent bg-clip-text")}>Aleksander Drwal</h1>
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
                <section className="grid grid-cols-2 gap-12 px-10">
                    <div className="text-slate-50 bg-slate-950">
                        <p className="text-amber-500 mb-6 text-xs text-center font-bold">Work experience</p>
                        <div className="border border-slate-900 rounded-lg p-4 flex flex-col gap-10">
                            <div className="grid grid-cols-[20%_80%]">
                                <div className="relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-slate-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute w-1 h-24 rounded-full bg-slate-300 left-1/2 top-full -translate-x-1/2 -translate-y-1/2"></div>
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
                                    <div className="absolute w-1 h-24 rounded-full bg-slate-300 left-1/2 bottom-full -translate-x-1/2 translate-y-1/2"></div>
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
                            <p className="">Passionate Computer Science student with a strong interest in software development, devops and UI/UX design. Coding is fun! I spend many hours creating new open-source side projects and learning never-ending new technologies. Most of my projects are self-hosted on personal server running Ubuntu Server 24. In my free time I climb and do rugs 🧶.
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
                                    <p>olek.drwal@gmail.com</p>
                                    <FiMail className='text-2xl' />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="text-slate-100 mt-16">
                    <h3 className="text-center font-medium text-muted-foreground">Skills and technology</h3>
                    <div className="flex gap-11 px-6 py-10 flex-wrap justify-center items-center">
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">TypeScript</p>
                            <Image src={'/typescript.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Python</p>
                            <Image src={'/python.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">C++</p>
                            <Image src={'/c++.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">NodeJS</p>
                            <Image src={'/node.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">React</p>
                            <Image src={'/react.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Express</p>
                            <Image src={'/expressjs.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Sequelize</p>
                            <Image src={'/sequelize.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Next.js</p>
                            <Image src={'/nextjs.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">SQL</p>
                            <Image src={'/sql.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Tailwind</p>
                            <Image src={'/tailwind.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Docker</p>
                            <Image src={'/docker.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Linux</p>
                            <Image src={'/ubuntu.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Postgres</p>
                            <Image src={'/postgres.svg'} alt="skill image" width={40} height={40} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-24 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-medium text-muted-foreground text-xs">Nginx</p>
                            <Image src={'/nginx.svg'} alt="skill image" width={40} height={40} />
                        </div>
                    </div>
                </section>
                <section className="text-slate-100 mt-12 px-10">
                    <div className="flex items-center justify-start gap-2 text-muted-foreground font-medium">
                        <h3 className="">Recent projects</h3>
                        <HiChevronDown />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-8">
                        <div className="flex gap-10">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h4 className="text-xl font-medium mt-4">Strapup - a template CLI</h4>
                                    <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, NodeJS, TailwindCSS, CLI</p>
                                    <p className="mt-6">A project consisting of Strapup npm package - a CLI tool and a website for its doucmentation. It allows to quickly bootstrap any project by running custom scripts and pasting custom templates all from within interactive CLI.</p>
                                </div>
                                <div className="flex gap-4 items-center justify-start mt-8">
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
                        <div className="flex gap-10 flex-row-reverse">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h4 className="text-xl font-medium mt-4">Terminal Copilot</h4>
                                    <p className="text-sm text-muted-foreground">TypeScript, NodeJS, Bash</p>
                                    <p className="mt-6">{`Terminal autocompiltion using Github Copilot. Avalible for free to everyone with Github Copilot subscription. With this tool, you will never again have to google meaning of every tar flag. Automatic installer avalible on repo.`}</p>
                                </div>
                                <div className="flex gap-4 items-center justify-start mt-8">
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
                <section className="text-slate-100 mt-12 mb-64">
                    <p className="text-muted-foreground text-sm text-center">CV designed and created in React by me :). View code <Link href={'https://github.com/xDepcio/cv-react-to-pdf'} className="underline inline">here</Link>.</p>
                </section>
            </div>
        </div>
    )
}
