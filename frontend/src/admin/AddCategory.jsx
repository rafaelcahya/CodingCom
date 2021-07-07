import React, {useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function AddCategory() {
    const [category, setCategory] = useState("")
    const [categoryInfo, setCategoryInfo] = useState("")
    const [createAt, setCreateAt] = useState("")


    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const submit = () => {
        Axios.post("http://localhost:3001/category/addCategory", { createAt: createAt, category: category, categoryInfo:categoryInfo}).then((response) => {
            console.log(response)
        })
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="batchForm overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full" >
                    <div className="pb-8">
                        <p className="text-lg font-semibold">Add new tutorial</p>
                        <p className="text-sm font-semibold">Be careful in filling out the tutorial. Examples of tutorials such as Roadmap, Frontend, Backend, etc. This will appear in the user page tutorial dropdown.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Tutorial name</p>
                            <input
                                type="text"
                                placeholder="Input tutorial name"
                                onChange={(event) => {
                                    setCategory(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Tutorial info</p>
                            <textarea name="" id="" rows="5" placeholder="Input tutorial info" onChange={(event) => {
                                    setCategoryInfo(event.target.value)
                                }} ></textarea>
                        </div>
                    </div>
                    <button onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 my-10 rounded-lg cursor-pointer">Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddCategory
