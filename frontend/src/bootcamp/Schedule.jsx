import React from 'react'
import BootcampNavbar from './BootcampNavbar'

export default function Schedule() {
    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("name").innerHTML = x;
    }, 10)
    return (
        <>
            <BootcampNavbar/>
            <div className="px-16 xl:px-32 pt-32">
                <div>
                    <span className="flex gap-1 text-2xl font-semibold">Hello <p id="name"></p></span>
                    <p className="font-medium text-gray-400">Check your bootcamp schedule here</p>
                </div>
                <div className="flex flex-col gap-4 ">
                    <div className="bg-white p-4 rounded-lg w-1/2 flex gap-4">
                        <p className="bg-blue-500 w-1.5 h-auto rounded-lg"></p>
                        <div className=" flex flex-col gap-4 truncate min-w-0"  style={{flex: 1}}>
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold">Preparation Day</p>
                                <p className="" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quaerat officiis libero doloremque qui ratione ullam vero est? Natus itaque voluptatum, dolore nihil ratione fugit pariatur ad in odio enim.</p>
                            </div>
                            <div className="flex justify-between text-xs font-semibold text-gray-500 tracking-wider">
                                <p>04-april-2666</p>
                                <p>17:00:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg w-1/2 flex gap-4">
                        <p className="bg-blue-500 w-1.5 h-auto rounded-lg"></p>
                        <div className=" flex flex-col gap-4 truncate min-w-0"  style={{flex: 1}}>
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold">Preparation Day</p>
                                <p className="" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quaerat officiis libero doloremque qui ratione ullam vero est? Natus itaque voluptatum, dolore nihil ratione fugit pariatur ad in odio enim.</p>
                            </div>
                            <div className="flex justify-between text-xs font-semibold text-gray-500 tracking-wider">
                                <p>04-april-2666</p>
                                <p>17:00:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg w-1/2 flex gap-4">
                        <p className="bg-blue-500 w-1.5 h-auto rounded-lg"></p>
                        <div className=" flex flex-col gap-4 truncate min-w-0"  style={{flex: 1}}>
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold">Preparation Day</p>
                                <p className="" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quaerat officiis libero doloremque qui ratione ullam vero est? Natus itaque voluptatum, dolore nihil ratione fugit pariatur ad in odio enim.</p>
                            </div>
                            <div className="flex justify-between text-xs font-semibold text-gray-500 tracking-wider">
                                <p>04-april-2666</p>
                                <p>17:00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
