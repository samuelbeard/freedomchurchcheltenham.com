import { NextComponentType } from "next"
import { RiAtLine, RiCalendarLine, RiMapPin2Line } from "react-icons/ri"

const EventBanner: NextComponentType = () => {
    return (
        <div className="h-20 bg-brand-red flex justify-around items-center">
            <div className="flex justify-center items-center text-white">
                <RiCalendarLine className="h-8 w-8 mr-3" />
                <h2 className="uppercase font-bold flex">Every sunday</h2>
            </div>
            <div className="flex justify-center items-center text-white">
                <RiMapPin2Line className="h-8 w-8 mr-3" />
                <h2 className="uppercase font-bold flex">
                    Danceworks, Cheltenham
                </h2>
            </div>
            <div className="flex justify-center items-center text-white">
                <RiAtLine className="h-8 w-8 mr-3" />
                <h2 className="uppercase font-bold flex">11AM</h2>
            </div>
            <div className="flex justify-center items-center text-white">
                {/* <RiAtLine className="h-8 w-8 mr-3" /> */}
                <h2 className="underline flex">More Details</h2>
            </div>
        </div>
    )
}

export default EventBanner
