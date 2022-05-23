import { NextPage } from "next"
import { FC, useEffect, useState } from "react"
import Layout from "../../components/Layout"
import Day from "../../components/Day"
import { generateDates, goMonthBack, goMonthForward } from "../../util/date"
import format from "date-fns/format"
import {
    RiArrowLeftCircleFill,
    RiArrowRightCircleFill,
    RiRefreshFill,
} from "react-icons/ri"
import DayHeader from "../../components/DayHeader"
// import { getEvents, getEvent } from "../../lib/api"

// export async function getStaticProps() {
//     // console.log("getStaticProps:")
//     let allEvents = await getEvents()
//     let event = await getEvent("3FqmVotHFOQUll9pzC6OHK")

//     let events = allEvents.items.map(
//         (e: {
//             fields: { title: string; date: string }
//             sys: { id: string }
//         }) => {
//             return {
//                 title: e.fields.title,
//                 date: e.fields.date,
//                 id: e.sys.id,
//             }
//         }
//     )

//     return {
//         props: {
//             events,
//         },
//     }
// }

interface Props {
    events: IEvent[]
}

const Calendar: NextPage<Props> = ({ events }) => {
    const [date, setDate] = useState(new Date())
    const [days, setDays] = useState(generateDates(date))

    useEffect(() => {
        setDays(generateDates(date))
    }, [date])

    const resetMonth = () => {
        setDate(new Date())
    }

    return (
        <Layout title="Calendar">
            <div className="py-12 w-11/12 lg:w-full mx-auto">
                <div className="pt-2 pb-6 flex">
                    <div className="">
                        <RiArrowLeftCircleFill
                            onClick={() => goMonthBack(date, setDate, setDays)}
                            className="text-stone-600 h-8 w-8 hover:text-brand-red transition-all cursor-pointer"
                        />
                    </div>
                    <div className="text-center flex-grow">
                        <h3 className="h3 m-0">
                            {format(date, "MMMM yyyy")}{" "}
                            <RiRefreshFill
                                onClick={() => resetMonth()}
                                className="text-stone-600 h-8 w-8 hover:text-brand-red transition-all cursor-pointer inline-block pb-1"
                            />
                        </h3>
                    </div>
                    <div>
                        <RiArrowRightCircleFill
                            onClick={() =>
                                goMonthForward(date, setDate, setDays)
                            }
                            className="text-stone-600 h-8 w-8 hover:text-brand-red transition-all cursor-pointer"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 mb-2">
                    <DayHeader day={0} />
                    <DayHeader day={1} />
                    <DayHeader day={2} />
                    <DayHeader day={3} />
                    <DayHeader day={4} />
                    <DayHeader day={5} />
                    <DayHeader day={6} />
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {days.map(day => (
                        <Day
                            key={day.toISOString()}
                            day={day}
                            // Hidden for now
                            // events={events}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Calendar
