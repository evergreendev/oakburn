"use client"
import {sendMembershipMail} from "@/app/services/aws-ses"
import {useFormState} from 'react-dom'

const initialState = {
    message: "",
    error: ""
}

const minDate = () => {
    const date = new Date().toLocaleDateString("en-US", {month:"2-digit",year:"numeric",day:"2-digit"}).split("/");

    return date[2]+"-"+date[0]+"-"+date[1];
}

const generateTimeOptions = (startTime:number[], endTime:number[]) => {
    const options = [];
    let currentTime = startTime;
    let isAfterNoon = false;
    const amPm = () => {
        return isAfterNoon ? " PM" : " AM";
    }
    const zeroString = (number:number) => {
        if (number ===0) return "00";
        return number;
    }
    options.push(currentTime[0]+":"+zeroString(currentTime[1])+amPm());
    while (currentTime[0]!== endTime[0] || currentTime[1] !== endTime[1]) {
        currentTime[1] = currentTime[1] + 15;

        if (currentTime[1] >= 60){
            currentTime[1] = 0;
            currentTime[0] += 1;
        }
        if(currentTime[0] >= 12){
            isAfterNoon = true;
        }
        if (currentTime[0] > 12){
            currentTime[0] = 1;
        }

        options.push(currentTime[0]+":"+zeroString(currentTime[1])+amPm());
    }

    return options
}

const CateringForm = () => {

    const [state, formAction] = useFormState(sendMembershipMail, initialState);

    return <>
        {state?.message
            ? <p className="text-2xl">{state.message}</p>
            : <form action={formAction}>
                <p className="mb-4">
                    Please fill out the form below, and we&apos;ll do our best to accommodate your desired date and any
                    requests you may have to make your party/celebration memorable.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex-col flex grow lg:w-5/12">
                        <label htmlFor="firstName">First Name <span className="text-red-600">*</span></label>
                        <input className="border-b-2 p-2 rounded border-slate-300 shadow-sm" type="text" id="firstName"
                               name="firstName"
                               required/>
                    </div>
                    <div className="flex-col flex grow lg:w-5/12">
                        <label htmlFor="lastName">Last Name <span className="text-red-600">*</span></label>
                        <input className="border-b-2 p-2 rounded border-slate-300 shadow-sm" type="text" id="lastName"
                               name="lastName"
                               required/>
                    </div>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="phone">Phone <span className="text-red-600">*</span></label>
                    <input className="border-b-2 p-2 rounded border-slate-300 shadow-sm" type="text" id="phone"
                           name="phone"
                           required/>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input className="border-b-2 p-2 rounded border-slate-300 shadow-sm" type="text" id="email"
                           name="email"
                           required/>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="number_of_people">Number of People <span className="text-red-600">*</span></label>
                    <input className="border-b-2 p-2 rounded border-slate-300 shadow-sm" type="number"
                           id="number_of_people" name="number_of_people"
                           required/>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="date">Select Date <span className="text-red-600">*</span></label>
                    <input className="border-b-2 p-2 rounded border-slate-300 shadow-sm" type="date"
                           id="date" name="date" min={minDate()}
                           required/>
                </div>
                <div className="flex-col flex mb-4">
                    <label htmlFor="time">Select time <span className="text-red-600">*</span></label>
                    <select id="time" name="time" className="border-b-2 p-2 rounded border-slate-300 shadow-sm">
                        {
                            generateTimeOptions([11,0],[8,0]).map(option => {
                                return <option key={option} value={option}>{option}</option>;
                            })
                        }
                    </select>

                </div>
                <p className="text-red-600">
                    {state?.error}
                </p>
                <button className="bg-primary-500 py-1 px-6 rounded-full text-white font-bold">Submit</button>
            </form>}
    </>
}

export default CateringForm;