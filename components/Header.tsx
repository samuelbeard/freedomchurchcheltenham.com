import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import {
    RiHomeHeartLine,
    RiFacebookBoxFill,
    RiYoutubeFill,
    RiInstagramLine,
} from "react-icons/ri"

interface Link {
    href: string
    text: string
}

const Links: Link[] = [
    {
        href: "/about",
        text: "About",
    },
    {
        href: "/visit",
        text: "Visit",
    },
    {
        href: "/messages",
        text: "Messages",
    },
    {
        href: "/kids",
        text: "Kids",
    },
    {
        href: "/give",
        text: "Give",
    },
    // {
    //     href: "/calendar",
    //     text: "Calendar",
    // },
]

interface Props {
    background?: null | "red"
}

const Header: FC<Props> = ({ background }) => {
    return (
        <div
            className={`h-24 w-screen lg:flex justify-center items-center ${
                background === "red" ? `bg-brand-red` : ""
            }`}
        >
            <Link href="/">
                <a className="h-12 w-12 mx-6 flex">
                    <Image
                        src="/img/logo/logo.webp"
                        width={50}
                        height={50}
                        alt="Freedom Church"
                        className=""
                    />
                    {/* <RiHomeHeartLine
                        className={`h-7 w-7 text-white ${
                            background === "red"
                                ? "hover:text-brand-dark-gray"
                                : "hover:text-brand-red"
                        } transition-all`}
                    /> */}
                </a>
            </Link>
            {Links.map(link => (
                <Link href={link.href} key={link.href}>
                    <a
                        className={`font-bold text-white mx-6 ${
                            background === "red"
                                ? "hover:text-brand-dark-gray"
                                : "hover:text-brand-red"
                        } transition-all`}
                    >
                        {link.text}
                    </a>
                </Link>
            ))}
            <div className="flex mx-6">
                <Link href="/youtube">
                    <a className="mx-2">
                        <RiYoutubeFill
                            className={`h-7 w-7 text-white ${
                                background === "red"
                                    ? "hover:text-brand-dark-gray"
                                    : "hover:text-brand-red"
                            } transition-all cursor-pointer`}
                        />
                    </a>
                </Link>
                <Link href="/facebook">
                    <a className="mx-2">
                        <RiFacebookBoxFill
                            className={`h-7 w-7 text-white ${
                                background === "red"
                                    ? "hover:text-brand-dark-gray"
                                    : "hover:text-brand-red"
                            } transition-all cursor-pointer`}
                        />
                    </a>
                </Link>
                <Link href="/instagram">
                    <a className="mx-2">
                        <RiInstagramLine
                            className={`h-7 w-7 text-white ${
                                background === "red"
                                    ? "hover:text-brand-dark-gray"
                                    : "hover:text-brand-red"
                            } transition-all cursor-pointer`}
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Header
