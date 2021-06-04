import React from 'react'
import Sidebar from './admin-major/Sidebar'

export default function BootcampSchedule() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bootcamp-schedule-form ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                <section>
                    <div className="job-box flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <p className="text-xl font-semibold">Add a schedule</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Title</p>
                            <input type="text" placeholder="Input title"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Description</p>
                            <input type="text" placeholder="Input description"/>
                        </div>
                        <div className="flex justify-between items-center gap-10 w-full">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="text-sm font-semibold">Date</p>
                                <input type="date"/>
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="text-sm font-semibold">Date</p>
                                <input type="time" min="00:00" max="24:00" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Location</p>
                            <input type="text" placeholder="Input location"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="gender text-sm font-semibold">Status</p>
                            <select name="" id="" >
                                <option value="">Choose status</option>
                                <option value="Offline">Offline</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <p className="color-red-1 text-center font-medium">errorMessage</p>
                        <p className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit schedule</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
