import Image from "next/image"
import { FC } from "react"

const Footer: FC = () => {
    return (
        <footer className="bg-brand-dark-gray text-white py-10">
            <div className="max-w-5xl w-5xl mx-auto grid grid-cols-3 gap-12">
                <div className="col-span-1 text-center">
                    <Image
                        src="/img/logo/logo-footer.png"
                        alt="Freedom Church"
                        width={120}
                        height={175}
                    />
                    <p className="text-xs mt-3 opacity-75">
                        Registered charity in
                        <br />
                        England and Wales (1161926)
                    </p>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
            </div>
        </footer>
    )
}

export default Footer
