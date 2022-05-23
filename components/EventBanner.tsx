import { useState, Fragment, useMemo } from "react"
import { NextComponentType } from "next"
import dynamic from "next/dynamic"
import { RiAtLine, RiCalendarLine, RiMapPin2Line } from "react-icons/ri"
import { Dialog, Transition } from "@headlessui/react"
import { MapContainer, TileLayer, useMap } from "react-leaflet"

const EventBanner: NextComponentType = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
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
                    <h2
                        className="underline flex cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        More Details
                    </h2>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setIsOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Where to find us
                                    </Dialog.Title>
                                    <div className="mt-2 flex justify-between">
                                        <div>
                                            <p className="text-gray-500">
                                                Danceworks
                                                <br />
                                                35 St George&apos;s St,
                                                <br />
                                                Cheltenham
                                                <br />
                                                GL50&nbsp;4AF
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <h2 className="h2 mb-0">11AM</h2>
                                            <h3 className="h3 mt-0">
                                                Every Sunday
                                            </h3>
                                        </div>
                                    </div>

                                    {/* <Map /> */}

                                    <div className="mt-8 w-full">
                                        <button
                                            type="button"
                                            className="block ml-auto rounded border border-transparent bg-stone-100 px-4 py-2 text-sm text-stone-900 hover:bg-stone-300"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default EventBanner
