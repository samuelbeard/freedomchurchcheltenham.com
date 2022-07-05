import { FC } from "react"

const DNASection: FC = () => {
    return (
        <>
            <section className="section">
                <div className="container mx-auto">
                    <h1 className="h1">Our DNA</h1>
                </div>
            </section>
            <section className="section">
                <div className="container mx-auto py-12 grid grid-cols-4 gap-6">
                    <DNACard title="Wildfire" />
                    <DNACard title="gift" />
                    <DNACard title="fire" />
                    <DNACard title="gift" />
                    <DNACard title="fire" />
                    <DNACard title="gift" />
                    <DNACard title="fire" />
                    <DNACard title="gift" />
                    <DNACard title="fire" />
                    <DNACard title="gift" />
                    <DNACard title="fire" />
                    <DNACard title="gift" />
                </div>
            </section>
        </>
    )
}

export default DNASection

interface DNACardProps {
    title: string
}

const DNACard: FC<DNACardProps> = ({ title }) => {
    return (
        <div
            className={`col-span-1 mx-auto bg-black bg-[url('https://source.unsplash.com/176x256')] bg-cover w-56 h-72 rounded-lg p-4`}
        >
            <h3 className="h3 text-white mt-0">{title}</h3>
        </div>
    )
}
