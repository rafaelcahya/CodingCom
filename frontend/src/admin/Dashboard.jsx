import React from 'react'
import Sidebar from './admin-major/Sidebar'
import "../admin/style/admin.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Class from '../admin/Class'

export default function Dashboard() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <Router>
                    <Switch>
                        <Route path="/admin/class-requisition" exact component={Class} />
                    </Switch>
                </Router>
            </div>
        </>
    )
}
