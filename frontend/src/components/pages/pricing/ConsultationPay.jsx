import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import logobca from "../../../asset/photo/logo_bca.png"
import Axios from 'axios'

function ConsultationPay() {
    const modal = useRef()
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <section className="payment-container bg-blue-2 mt-32 lg:mt-20 mb-40 mx-5 xs:mx-10 sm:mx-24 md:mx-32 lg:mx-52 xl:mx-96 py-10 rounded-xl shadow-lg">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-semibold mb-10">Class Consultation Quota</p>
                    <div className="flex flex-col justify-start gap-10">
                        <table className="payment-table">
                            <tbody>
                                <tr>
                                    <td>Access quota</td>
                                    <td>5 Quotas</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="payment-table">
                            <thead>
                                <tr className="text-lg px-16 pt-8 font-semibold">
                                    <td>Main benefits</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Get 5 access quotas for class consultation</td>
                                    <td className="color-green-1">Available</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="payment-table">
                            <thead>
                                <tr className="text-lg px-16 pt-8 font-semibold">
                                    <td>Payment Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Price</td>
                                    <td>IDR 75,000</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="color-green-1">- IDR 0</td>
                                </tr>
                                <tr>
                                    <td>Total payment</td>
                                    <td>IDR 75,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col items-center gap-2 my-10">
                        <p className="text-lg pt-8 mb-2 font-semibold">Transfer Method</p>
                        <img src={logobca} alt="" width="150" />
                        <p>CodingPaymentCom</p>
                        <p className="font-semibold">82709xxxxx</p>
                    </div>
                    <p className="bg-blue-1 text-white text-sm text-center rounded-md px-8 py-3 cursor-pointer" onClick={() => modal.current.open()}>Payment confirmation via Email</p>
                    <p className="color-black-2 text-xs mt-10 mb-5 mx-20">*Please complete the transfer payment process first before confirming the payment.</p>
                </div>
            </section>

            <Modal ref={modal}>
                <p className="text-lg font-bold py-5">Payment Confirmation</p>
                <p className="text-sm font-medium">Make sure that you have previously made the transfer payment process to the available account. Have you done it?</p>
            </Modal>
        </>
    )
}

const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)
    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    })

    const Choose = (props) => {
        const [name, setName] = useState("")
        const [createAt, setCreateAt] = useState("")
    
        useEffect(() => {
            let x = localStorage.getItem("name");
            setName(x)
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            setCreateAt(dateTime)
        }, []);

        const submit = () => {
            Axios.post("http://localhost:3001/transaction/updateStatusClassConsultation", { name: name, createAt:createAt }).then((response) => {
                console.log(response)
            })
        }
        return (
            <>
                <div className="flex justify-between items-center gap-10 my-5">
                    <Link to="/help">
                        <p className="color-black-2 text-xs underline">Help</p>
                    </Link>
                    <div className="flex gap-5">
                        <p className="text-sm rounded-lg py-2 px-4 cursor-pointer" onClick={() => setOpen(false)}>Cancel</p>
                        <a href="mailto:codingpaymentcom@gmail.com?subject=Payment Confirmation&body=hello coding.com, I've done the payment transfer process for Rp. 286,000." className="bg-green-1 text-white text-sm rounded-lg py-2 px-4 cursor-pointer" onClick={submit}>Sure</a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit={{
                            opacity: 0
                        }}
                        className="payment-confirm-container">
                        <motion.div
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1
                            }}
                            exit={{
                                scale: 0
                            }}
                            className="payment-confirm-box px-10 py-5 rounded-3xl ">
                            <motion.div
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}>
                                {props.children}
                                <Choose />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
})


export default ConsultationPay
