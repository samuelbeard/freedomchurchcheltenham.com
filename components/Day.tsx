import { format } from "date-fns"
import { FC } from "react"

interface Props {
    day: Date
    events?: IEvent[]
}

const Day: FC<Props> = ({ day, events }) => {
    const now = new Date().setHours(0, 0, 0, 0)
    const formattedDay = format(day, "dd/MM/yyyy")

    const todaysEvents = () => {
        if (events) {
            return events.map(event => {
                const formatted = format(new Date(event.date), "dd/MM/yyyy")
                if (formatted === formattedDay) {
                    return (
                        <div
                            key={event.id}
                            className="px-2 py-1 my-1 uppercase overflow-hidden whitespace-nowrap bg-blue-500 text-white rounded-sm text-xs"
                        >
                            {event.title}
                        </div>
                    )
                }
            })
        }
    }

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
        <div
            className={`aspect-square h-20 overflow-scroll lg:h-32 p-2 rounded-sm ${style()}`}
        >
            <div>{format(day, "d")}</div>
            {/* <div>{todaysEvents()}</div> */}
        </div>
    )
}

export default Day
