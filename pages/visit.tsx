import { NextPage } from "next"
import Layout from "../components/Layout"

const Visit: NextPage = () => {
    return (
        <Layout title="Visit">
            <div className="section py-8">
                <div className="container">
                    <h1 className="h1">Visit</h1>
                    <p className="para">
                        We would love for you to come join us for a service at:{" "}
                        <span className="font-bold ">11am on Sundays</span> at
                        Danceworks, Cheltenham.
                    </p>
                    <p className="para">
                        We are a welcoming church with worship, creativity,
                        relevant teaching and a focus on community. The event
                        itself is usually done by around 12pm.
                    </p>
                    <p className="para">
                        We have provision for children and nursing mothers
                        during our service too.
                    </p>
                    <p className="para">
                        If you have any questions then please get in touch with
                        us at cheltenham@freedomchurch.cc
                    </p>
                </div>
            </div>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4923.379817736884!2d-2.0784703225860617!3d51.903122825411856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f32b943a245ff21!2sDanceworks!5e0!3m2!1sen!2suk!4v1652795920370!5m2!1sen!2suk"
                    // width="600"
                    height="400"
                    style={{ border: 0, width: "100vw" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </Layout>
    )
}

export default Visit
