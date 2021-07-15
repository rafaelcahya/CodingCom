import React, {useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function EditCategory(props) {
    const urlid = props.match.params.id
    const [category, setCategory] = useState("")
    const [categoryInfo, setCategoryInfo] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [value, setValue] = useState([])


    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/category/categoryById/"+urlid).then((response) => {
            setValue(response.data)
        })
        console.log("ajsdhaldsha")
    }, [urlid]);

    const submit = () => {
        Axios.post("http://localhost:3001/category/EditCategory", {id:urlid, updateAt: updateAt, category: category, categoryInfo:categoryInfo}).then((response) => {
            console.log(response)
        })
    };
    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                {value.map((val)=>{
                    return <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full" >
                    <div className="pb-8">
                        <p className="text-lg font-semibold">Edit tutorial / category</p>
                    </div>
                    <div className="batchForm flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Tutorial name</p>
                            <input
                                type="text"
                                placeholder="Input tutorial name"
                                defaultValue={val.category}
                                onChange={(event) => {
                                    setCategory(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Tutorial info</p>
                            <textarea name="" defaultValue={val.categoryInfo} id="" rows="5" placeholder="Input tutorial info" onChange={(event) => {
                                    setCategoryInfo(event.target.value)
                                }} ></textarea>
                        </div>
                    </div>
                    <button onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 my-10 rounded-lg cursor-pointer">Submit</button>
                </div>
                })}
            </div>
        </>
    )
}

export default EditCategory
