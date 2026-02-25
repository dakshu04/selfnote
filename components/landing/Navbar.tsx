import Image from "next/image";
import Link from "next/link";

const links = [
    {
        name: "Pricing",
        link: "/pricing",
    },
    {
        name: "Community",
        link: "/community",
    },
    {
        name: "Blog",
        link: "/blog",
    },
    {
        name: "Careers",
        link: "/careers",
    }
]

export default function Navbar() {
    return (
        <div className="">
            <div className="flex flex justify-around items-center">
                <Link
                href={"/"}>
                    <Image
                    className="cursor-pointer"
                    src="/logo.png"
                    alt={"logo"}
                    width={150}
                    height={150}>
                    </Image>
                </Link>
                <div className="flex gap-4">
                    {links.map((link) => (
                        <Link className="hover:underline"
                        key={link.name}
                        href={link.link}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <button className="border border-gray-300 rounded-lg  inset-shadow-sm p-2 px-6 cursor-pointer">
                    Get started free
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}