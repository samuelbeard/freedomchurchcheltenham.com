import { FC } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="page">
            <Header background="red" />
            <div className="max-w-6xl mx-auto w-6xl">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
