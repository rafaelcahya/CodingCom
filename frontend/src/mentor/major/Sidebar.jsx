/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Navigation } from "react-minimal-side-navigation";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useHistory, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const history = useHistory();
    const location = useLocation();
    const [name,setName] = useState("")
    let x
    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
    }, 500)
    return (
        <>
            <div className="sidebar fixed w-64 m-5 py-8 flex flex-col gap-2 bg-white rounded-lg border border-gray-300" style={{height: "750px"}}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4">Dashboard</p>
                <Navigation
                onSelect={({ itemId }) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: "Tutorial Management",
                        subNav: [
                            {
                                title: "Add sub tutorial content",
                                itemId: "/mentor/add-topik"
                            },
                            {
                                title: "List sub tutorial content",
                                itemId:"/mentor/list-topik"
                            },
                            {
                                title: "Add Sub Tutorial",
                                itemId: "/mentor/add-course"
                            },
                            {
                                title: "Sub Tutorial List",
                                itemId: "/mentor/list-course"
                            }
                        ],
                    },
                    {
                        title: 'Class session',
                        itemId: '/mentor/class-request',
                        subNav:[
                            {
                                title:'Class session request',
                                itemId: '/mentor/class-request',
                            },
                            {   title:'Class session list',
                                itemId:'/mentor/list-class',
                            }
                        ]
                    },
                    {
                        title: 'Receipt',
                        itemId: '/mentor/list-receipt',
                    },
                ]}
                />
            </div>
        </>
    )
}
