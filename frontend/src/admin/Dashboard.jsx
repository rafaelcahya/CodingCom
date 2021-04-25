import React from 'react'
import Sidebar from './admin-major/Sidebar'

export default function Dashboard() {
    return (
        <>
            <div className="flex">
                <Sidebar/>
                <div className="ml-80">
                    <p>Class Request</p>
                    <table className="table-fixed text-center">
                        <thead>
                            <tr>
                                <th>Mentor</th>
                                <th>Email</th>
                                <th>Class</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>URL</th>
                                <th>Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>William Kosasie</td>
                                <td>Williamkosasie@gmail.com</td>
                                <td>Frontend</td>
                                <td>April 20, 2020</td>
                                <td>13:00</td>
                                <td>URLURLURLURLURLURLURLURL</td>
                                <td>Request</td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
