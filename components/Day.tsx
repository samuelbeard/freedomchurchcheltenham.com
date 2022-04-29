import { format } from "date-fns"
import { FC } from "react"

interface Props {
    day: Date
}

const Day: FC<Props> = ({ day }) => {
    const now = new Date().setHours(0, 0, 0, 0)

    const style = () => {
        if (format(day, "ddMMyyyy") === format(new Date(), "ddMMyyyy")) {
            return "bg-stone-400 font-bold"
        }

        if (day.getTime() < now) {
            return "bg-stone-100 text-stone-300"
        }

        return "bg-stone-300 font-bold"
    }

    return (
        <div className={`w-32 h-32 p-2 rounded-sm ${style()}`}>
            <div>{format(day, "d")}</div>
        </div>
    )
}

export default Day
