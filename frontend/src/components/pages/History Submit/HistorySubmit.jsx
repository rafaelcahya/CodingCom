/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import items from './Data';
import { Link } from 'react-router-dom';
import NavbarLogin from "../../major/NavbarLogin"
import NavbarMobile from "../../major/NavbarMobile"
import axios from 'axios';

export default function HistorySubmit() {
    const [value,setValue] = useState([])
    const [sum, setSum] = useState([])
    const [certi, setCerti] = useState([])
    const [chel, setChel] = useState([])
    const [show, setShow] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListUser/"+localStorage.getItem("name")).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListCount/"+localStorage.getItem("name")).then((response) => {
            setSum(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListCountCerti/"+localStorage.getItem("name")).then((response) => {
            setCerti(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListCountChel/"+localStorage.getItem("name")).then((response) => {
            setChel(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // const allCategories = ['All', ...new Set(value.map(item => item.type))];
    const allCategories = ['All', 'Certificate', 'Challenge'];

    const [menuItem, setMenuItem] = useState(value);
    const [buttons] = useState(allCategories);

  //Filter Function
    const filter = (button) =>{
        setShow(false);
        if(button === 'All'){
            setMenuItem(value);
            
            return
        }

        const filteredData = value.filter(item => item.type === button);
        setMenuItem(filteredData)
    }
    
    const [name, setName] = useState("")
    
    let image = require('../../../asset/upload/'+ localStorage.getItem("image"))
    window.onload = setTimeout(function () {
        let x = localStorage.getItem("name");
        setName(x)
    }, 10)
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex flex-col lg:flex-row gap-10 mt-16 lg:mt-0 px-10 xl:px-32 py-10 w-full">
                <div className="static lg:sticky self-start top-5 border rounded-lg p-5 w-full lg:w-1/4">
                    <div className="flex items-center gap-5 mb-5">
                        <img src={image.default} className="ring-1 rounded-full p-0.5" width="50" alt="Image Profile"/>   
                        <div>
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <div className="flex justify-between">
                            <p className="text-gray-400">Total Submit</p>
                            {
                                sum.map((val)=>{
                                    return <p>{val.sum}</p>
                                })
                            }
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-400">Challenge Submit</p>
                            {chel.map((val)=>{
                                return <p>{val.chel}</p>
                            })}
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-400">Certificate Submit</p>
                            {certi.map((val)=>{
                                return <p>{val.certi}</p>
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4">
                    <p className="text-xl font-semibold mb-5">Project Collection History</p>
                    <Button button={buttons} filter={filter} />
                    <Menu menuItem={menuItem}/>
                </div>
            </div>
            
        </>
    )
}

function Button({button, filter}) {
    return (
        <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">Filter :</p>
            <div className="flex gap-4">
                {
                    button.map((cat, i)=>{
                        return <button onClick={()=> filter(cat)}  id="jobCategorybtn" className="jobCategorybtn text-left text-sm font-medium bg-blue-50 px-2 py-2 rounded-lg">{cat}</button>
                    })
                }
            </div>
        </div>
    )
}

function Menu({menuItem}) {
    return (
        <>
            <div className="flex flex-col items-center gap-5 border mt-5 rounded-lg">
                {
                    menuItem.map((item) =>{
                        return <div className="flex justify-between items-center p-5 hover:shadow-md w-full" key={item.id}>
                            <div className="item-container">
                                <p>{item.type}</p>
                                <p>{item.projectTitle}</p>
                                <p>{item.projectsubCreateAt}</p>
                            </div>
                            <div className="item-container">
                                <p>{item.description}</p>
                            </div>
                            <div className="item-container">
                                <p>{item.score}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
