import React, {useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function AddCategory() {
    const [category, setCategory] = useState("")
    const [createAt, setCreateAt] = useState("")


    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const submit = () => {
        Axios.post("http://localhost:3001/category/addCategory", { createAt: createAt, category: category}).then((response) => {
            console.log(response)
        })
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="batchForm overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full" >
                    <p className="text-lg font-semibold pb-8">Add a new Category</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Category name</p>
                            <input
                                type="text"
                                placeholder="Input Category"
                                onChange={(event) => {
                                    setCategory(event.target.value)
                                }} />
                        </div>
                    </div>
                    <button onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 my-10 rounded-lg cursor-pointer">Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddCategory
