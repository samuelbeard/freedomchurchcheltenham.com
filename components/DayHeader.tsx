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
                "bg-stone-500 rounded-sm h-12 w-32 flex justify-center items-center text-white"
            }
        >
            {dayNames[day]}
        </div>
    )
}

export default DayHeader
