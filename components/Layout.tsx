import { FC } from "react"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
    children: React.ReactNode
    title: string
}

const Layout: FC<Props> = ({ children, title }) => {
    return (
        <div className="page">
            <Head>
                <title>{title} | Freedom Church Cheltenham</title>
            </Head>
            <Header background="red" />
            <div className="max-w-6xl mx-auto w-6xl">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
