import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../major/Footer'
import Axios from 'axios'

export default function Career() {
    const [value,setValue] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/jobs/ListJobs").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("demo").innerHTML = x;
    }, 10)

    const items = value

    // const items = [
    //     {
    //         CompanyName: "Samsung",
    //         JobTitle: "Software Engineering",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Fulltime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     },
    //     {
    //         CompanyName: "Shopee",
    //         JobTitle: "Back End Web Engineer",
    //         Overview: "We are responsible for the design and implementation of the web application server. We create services to hundreds",
    //         JobType:"Parttime"
    //     }
    // ]

    const allCategories = ['All', 'Fulltime', 'Parttime', 'Internship'];

    const [menuItem, setMenuItem] = useState(items);
    const [buttons] = useState(allCategories);

  //Filter Function
    const filter = (button) =>{

    if(button === 'All'){
        setMenuItem(items);
        return
    }

    const filteredData = items.filter(item => item.jobType ===  button);
    setMenuItem(filteredData)
}
    return (
        <>
            <div className="bg-white lg:flex justify-between items-center px-16 xl:px-32 py-5">
                <Link to="/">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back</p>
                    </div>
                </Link>
                <p>Find job</p>
                <p id="demo"></p>
            </div>

            <div className="px-16 xl:px-32">
                <p className="text-xl font-semibold py-10">Improve your skills by studying the needs of the company and find a job that suits you</p>
                <div className="flex gap-5 w-full">
                    <Button button={buttons} filter={filter} />
                    <div className="flex flex-col w-10/12">
                        <p className="text-xl font-semibold">Showing 20 jobs</p>
                        <div className="flex py-4">
                            <Menu menuItem={menuItem}/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

function Button({button, filter}) {
    return (
        <div className="bg-white sticky self-start top-5 flex flex-col gap-3 rounded-lg p-4 w-2/12">
            <p className="text-sm font-semibold">Type of employment :</p>
            <div className="flex flex-col gap-2">
                {
                    button.map((cat, i)=>{
                        return <button onClick={()=> filter(cat)} className="jobCategorybtn text-left text-sm font-medium bg-blue-50 px-2 py-2 rounded-lg">{cat}</button>
                    })
                }
            </div>
        </div>
    )
}

function Menu({menuItem}) {
    return (
        <div className="flex flex-wrap items-center gap-5">
            {
                menuItem.map((item) =>{
                    return <Link to={item.url}>
                        <div className="bg-white p-4 rounded-lg transform hover:scale-105 duration-200 hover:shadow-md" style={{width: "310px"}}>
                            <div className="flex justify-between">
                                {/* Buat masukin logo company disini, tag p nya apus aja klo dah jadi */}
                                <p className="w-10 h-10 bg-red-500"></p>
                                <p className="text-xs font-medium text-gray-400">{item.jobCreateAt}</p>
                            </div>
                            <div className="flex flex-col gap-2 py-2">
                                <p className="text-sm">{item.companyName}</p>
                                <p className="font-semibold">{item.jobTitle}</p>
                                <p className="text-gray-500 text-sm">{item.overview}</p>
                                <p className="text-xs bg-blue-100 color-blue-1 font-semibold w-max py-1 px-2 mt-2 rounded-lg">{item.jobType}</p>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}