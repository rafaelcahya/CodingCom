import React, { useEffect, useState } from 'react'
import Footer from '../../major/Footer';
import NavbarLogin from '../../major/NavbarLogin';
import NavbarMobile from '../../major/NavbarMobile';
import axios from 'axios';

function ConsultationClass() {
    var hours = new Date().getHours()
    var dayOfWeek = new Date().getDay();
    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/user/userkuotaById/" + localStorage.getItem("name")).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <div className="mx-8 md:mx-16 lg:mx-32 xl:mx-56 my-20 lg:mb-32">
                <div className="class-header mt-20">
                    <p className="color-blue-1 font-semibold text-3xl mb-5">Class Consultation</p>
                    <p>Here you can learn directly with a mentor via zoom. Just ask your question without hesitation according to the topic you choose. Mentors will be ready to help your learning process anytime and anywhere.</p>
                </div>
                <div className="flex flex-col my-10">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Consultation Class
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Day
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Time
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Button
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        Day Consultation Class A
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Monday - Friday</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">09:00 - 17:00</div>
                                            </td>
                                            {hours <= 9 || hours >= 17 || dayOfWeek === 6 || dayOfWeek === 0? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800">
                                                        Close
                                                        </span>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800">
                                                        Available
                                                        </span>
                                                    </td>
                                                )
                                            }
                                            {hours <= 9 || hours >= 17 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-100 px-6 py-2 rounded-lg pointer-events-none cursor-default">Join</a>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-1 px-6 py-2 rounded-lg">Join</a>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        Day Consultation Class B
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Monday - Friday</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">09:00 - 17:00</div>
                                            </td>
                                            {hours <= 9 || hours >= 17 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800">
                                                        Close
                                                        </span>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800">
                                                        Available
                                                        </span>
                                                    </td>
                                                )
                                            }
                                            {hours <= 9 || hours >= 17 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-100 px-6 py-2 rounded-lg pointer-events-none cursor-default">Join</a>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-1 px-6 py-2 rounded-lg">Join</a>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        Day Consultation Class C
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Monday - Friday</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">09:00 - 17:00</div>
                                            </td>
                                            {hours <= 9 || hours >= 17 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800">
                                                        Close
                                                        </span>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800">
                                                        Available
                                                        </span>
                                                    </td>
                                                )
                                            }
                                            {hours <= 9 || hours >= 17 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-100 px-6 py-2 rounded-lg pointer-events-none cursor-default">Join</a>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-1 px-6 py-2 rounded-lg">Join</a>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-10">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Consultation Class
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                day
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Time
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Button
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-semibold text-gray-900">
                                                    Night Consultation Class A
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Monday - Friday</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">18:00 - 23:00</div>
                                            </td>
                                            {hours <= 18 || hours >= 23 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800">
                                                        Close
                                                        </span>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800">
                                                        Available
                                                        </span>
                                                    </td>
                                                )
                                            }
                                            {hours <= 18 || hours >= 23 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                    <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-100 px-6 py-2 rounded-lg pointer-events-none cursor-default">Join</a>
                                                </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-1 px-6 py-2 rounded-lg">Join</a>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-semibold text-gray-900">
                                                    Night Consultation Class B
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Monday - Friday</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">18:00 - 23:00</div>
                                            </td>
                                            {hours <= 18 || hours >= 23 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800">
                                                        Close
                                                        </span>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800">
                                                        Available
                                                        </span>
                                                    </td>
                                                )
                                            }
                                            {hours <= 18 || hours >= 23 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                    <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-100 px-6 py-2 rounded-lg pointer-events-none cursor-default">Join</a>
                                                </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-1 px-6 py-2 rounded-lg">Join</a>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        Night Consultation Class C
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Monday - Friday</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">18:00 - 23:00</div>
                                            </td>
                                            {hours <= 18 || hours >= 23 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800">
                                                        Close
                                                        </span>
                                                    </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap" id="status">
                                                        <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800">
                                                        Available
                                                        </span>
                                                    </td>
                                                )
                                            }
                                            {hours <= 18 || hours >= 23 || dayOfWeek === 6 || dayOfWeek === 0 ? ( 
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                    <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-100 px-6 py-2 rounded-lg pointer-events-none cursor-default">Join</a>
                                                </td>
                                                ) : (
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                        <a href="https://meet.google.com/bcm-gkid-hhx" className="bg-blue-1 px-6 py-2 rounded-lg">Join</a>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 rounded-xl" >
                <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100} />
                <div className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">Join us in our community.</p>
                    <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                </div>
                <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{ backgroundColor: "#2c2f33" }}>Join us</a>
            </section>
            <Footer />
        </>
    )
}

export default ConsultationClass
