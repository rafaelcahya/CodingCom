import React from 'react'
import Sidebar from './admin-major/Sidebar'
import "../admin/style/admin.css"

export default function Dashboard() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
            <Sidebar/>
                <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl" >
                    <p className="text-lg font-semibold pb-8">Class Request</p>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Mentor</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Class</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">URL</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Request</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr>  
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr> 
                                        <tr className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">William Kosasie Andrew</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Williamkosasie@gmail.com</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Frontend</td>
                                            <td className="px-6 py-3 whitespace-nowrap">April 20, 2020</td>
                                            <td className="px-6 py-3 whitespace-nowrap">13:00</td>
                                            <td className="px-6 py-3 whitespace-nowrap">https://meet.google.com/qqy-kiuc-ubr</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <span className="px-4 py-3 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</span>
                                            </td>
                                        </tr>   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}
