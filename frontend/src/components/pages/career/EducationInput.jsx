import React from "react"

const EducationInput = (props) => {
    return(
        props.education.map((x, i) => {
            return (
            <div className="box">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">College or university name</p>
                    <input name="college" type="text" placeholder="Input college or university name" className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">Major</p>
                    <input name="major" type="text" placeholder="Input major" className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">Start year</p>
                    <input name="StartYear" type="text" placeholder="Input start year" className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">End year</p>
                    <input name="EndYear" type="text" placeholder="Input end year" className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">Activity</p>
                    <input name="activity" type="text" placeholder="Input major" className="rounded-lg" />
                </div>
            </div>
            );
        })
    )
}

export default EducationInput