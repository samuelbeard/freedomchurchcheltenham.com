import { FC } from "react"

interface DayProps {
    day: number
}

const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

const DayHeader: FC<DayProps> = ({ day }) => {
    return (
        <div
            className={
                "bg-stone-500 rounded-sm h-8 lg:h-12 w-20 lg:w-32 text-xs lg:text-base flex justify-center items-center text-white"
            }
        >
            {dayNames[day]}
        </div>
    )
}

export default DayHeader
