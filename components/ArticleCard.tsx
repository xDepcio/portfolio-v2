import Image from "next/image";
import Link from "next/link";

export default function ArticleCard() {
    return (
        <Link href={'/'}>
            <Image className="aspect-[16/9] rounded-lg mb-3" src="/example.jpg" alt="" width={500} height={0} />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Some article title</h3>
            <p className="line-clamp-2 text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas libero, veniam qui consequatur minima magnam repellendus sunt dicta exercitationem, facilis cupiditate id nam omnis repudiandae optio. Non, perferendis consectetur.</p>
            <div className="flex items-center justify-between mt-4">
                <p className="text-muted-foreground text-sm">December 22, 2023</p>
                <p className="text-yellow-700 text-sm bg-yellow-200 px-4 py-1 rounded-full">Not mine :(</p>
            </div>
        </Link>
    )
}
