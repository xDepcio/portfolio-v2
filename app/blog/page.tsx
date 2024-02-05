import ArticleCard from "@/components/ArticleCard";
import CodingCat from "@/components/CodingCat";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Aleksander Drwal | Blog',
    description: `My blog where something interesing may appear one day...`,
}

export default function BlogPage() {
    return (
        <>
            <div className="text-slate-50 p-4 md:p-0 max-w-[900px] mx-auto mt-16 rounded-2xl border-slate-900 min-h-[80vh] mb-32">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Blog</h1>
                <p className="text-muted-foreground mt-4">{`I'll write something interesting here one day.`}</p>
                {/* <p className="text-muted-foreground">Meanwhile check out some other wothwhile articles.</p> */}
                <div className="h-[1px] bg-slate-900 my-8"></div>
                <div className="flex items-center justify-center mt-28 flex-col">
                    <h2 className="text-muted-foreground scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Under construction...</h2>
                    <Image className="saturate-50 opacity-50" alt="" src={'/logistics.svg'} width={700} height={700}></Image>
                </div>
                {/* <div className="grid grid-cols-2 gap-10">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div> */}
            </div>
            <Footer />
        </>
    )
}
