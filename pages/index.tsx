import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import EventBanner from "../components/EventBanner"
import Footer from "../components/Footer"

const Home: NextPage = () => {
    return (
        <div>
            <div className="w-full h-screen flex justify-between flex-col bg-[url('/hero.jpg')] bg-cover">
                <Head>
                    <title>Freedom Church Cheltenham</title>
                </Head>
                <Header />
                <div className="flex-grow flex items-center">
                    <section className="section">
                        <div className="w-5/6 lg:w-full max-w-6xl grid grid-cols-3 gap-6">
                            <div className="col-span-1 flex justify-center items-center">
                                <Image
                                    src="/img/logo/logo.webp"
                                    alt="Freedom Church"
                                    height={300}
                                    width={300}
                                    className="h-64 w-64 ml-32 rounded-full"
                                />
                            </div>
                            <div className="mx-auto col-span-2 flex flex-col justify-center">
                                <h2 className="h2 text-4xl m-0 text-white">
                                    Welcome to
                                </h2>
                                <h1 className="h1 text-5xl lg:text-7xl m-0 uppercase text-white">
                                    Freedom&nbsp;Church
                                    <br />
                                    <span className="text-brand-red">
                                        Cheltenham
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
                <EventBanner />
            </div>
            <div className="section">
                <div className="container py-12">
                    <p>content</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
