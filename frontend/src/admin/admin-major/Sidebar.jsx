import React from 'react'
import { Navigation } from "react-minimal-side-navigation";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useHistory, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const history = useHistory();
    const location = useLocation();
    return (
        <>
            <div className="sidebar fixed w-64 m-5 py-8 flex flex-col gap-2 bg-white rounded-lg border border-gray-300" style={{height: "750px"}}>
                <p className="text-xs font-semibold uppercase tracking-wider px-4">Dashboard</p>
                <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: "User Management",
                        itemId: "/admin/user-list",
                        subNav: [
                            {
                                title: "User registration",
                                itemId: "/admin/user-list"
                            },
                            {
                                title: "User actived",
                                itemId: "/admin/user-list-active"
                            },
                        ],
                    },
                    {
                        title: "Bootcamp Management",
                        itemId: "/admin/add-batch",
                        subNav: [
                            {
                                title: "Batch form",
                                itemId: "/admin/add-batch"
                            },
                            {
                                title: "Batch list",
                                itemId: "/admin/list-batch"
                            },
                            {
                                title: "Schedule",
                                itemId: "/admin/bootcamp-schedule"
                            },
                            {
                                title:"Schedule List",
                                itemId:"/admin/list-schedule"
                            }
                        ],
                    },
                    {
                        title: "Tutorial Management",
                        itemId: '/admin/list-course',
                        subNav: [
                            {
                                title: 'Tutorial List',
                                itemId: '/admin/list-course',
                            },
                            {
                                title: 'Sub tutorial list',
                                itemId: '/admin/list-topik',
                            },
                            {
                                title: 'Add tutorial',
                                itemId: '/admin/add-category',
                            },
                        ],
                    },
                    
                    {
                        title: 'Class Session',
                        itemId: '/admin/class-requisition',
                    },
                    {
                        title: "Payment Management",
                        itemId: "/admin/payment-requisition",
                        subNav: [
                            {
                                title: "Payment Requisition",
                                itemId: "/admin/payment-requisition"
                            },
                            {
                                title: 'Payment Approved',
                                itemId: '/admin/payment-approved',
                            },
                            {
                                title: 'Payment Rejected',
                                itemId: '/admin/payment-rejected',
                            },
                        ],
                    },
                    {
                        title: "Project Management",
                        itemId: "/admin/add-project",
                        subNav: [
                            {
                                title: "Add project",
                                itemId: "/admin/add-project"
                            },
                            {
                                title: 'Project Submission',
                                itemId: '/admin/project-list',
                            },
                            {
                                title: 'Project Detail',
                                itemId: '/admin/list-project',
                            },
                        ],
                    },
                    {
                        title: 'Career Management',
                        itemId: '/admin/input-jobs',
                        subNav: [
                            {
                                title: 'Add Jobs',
                                itemId:'/admin/input-jobs',
                            },
                            {
                                title:'Jobs List',
                                itemId:'/admin/list-jobs',
                            }
                        ]
                    },
                    {
                        title: 'Frequently Asked Question',
                        itemId: '/admin/add-faq',
                        subNav: [
                            {
                                title: 'Add FAQ',
                                itemId:'/admin/add-faq',
                            },
                            {
                                title:'FAQ List',
                                itemId:'/admin/list-faq',
                            }
                        ]
                    },
                ]}
                />
            </div>
        </>
    )
}
