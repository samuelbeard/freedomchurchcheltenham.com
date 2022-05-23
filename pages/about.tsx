import { NextPage } from "next"
import DNASection from "../components/DNASection"
import Layout from "../components/Layout"

const About: NextPage = () => {
    return (
        <Layout title="About">
            <DNASection />
        </Layout>
    )
}

export default About
