import React, { Component, useState } from 'react'

export class Comment extends Component {
    render() {
        window.onload = setTimeout( function () {
            var x = localStorage.getItem("name");
            document.getElementById("name").innerHTML = x;
        }, 500)

        // const [comment, setComment] = useState("")
        // const comment = () => {
            
        //     Axios.post("http://localhost:3001/comment/comment", { password: comment }).then((response) => {
        //         if (response.data.loggedIn) {
        //             localStorage.setItem("loggedIn", true)
        //             localStorage.setItem("name", response.data.name)
        //             history.push("/")
        //         } else {
        //             setErrorMessage(response.data.message)
        //         }
        //     })
        // }
        return (
            <>  
                <div className="mt-32">
                    <p className="font-semibold text-2xl my-10 text">Discussion Section</p>
                    <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                    <span className="textarea resize-none cursor-text" role="textbox" contentEditable></span>
                    <div className="flex justify-end items-center gap-10 my-5">
                        <p className="bg-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer">Cancel</p>
                        <p className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Discussion</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Comment

