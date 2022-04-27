import { NextComponentType } from "next"

const EventBanner: NextComponentType = () => {
    return (
        <div className="h-20 bg-brand-red flex justify-center items-center">
            <h2>Next Event: Sunday Event 20th March 2021</h2>
        </div>
    )
}

export default EventBanner
