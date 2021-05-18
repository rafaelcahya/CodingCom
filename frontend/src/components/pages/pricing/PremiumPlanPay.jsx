import React from 'react'

import NavbarLogin from "../../major/NavbarLogin"
import NavbarMobile from "../../major/NavbarMobile"
import PaymentVerif from "./payment/PaymentVerif"

export default function PremiumPlanPay() {
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <PaymentVerif
                plan="Premium Plan"
                time="Forever"
                benefit2="Get 7 access quota for class consultation"
                available2="Available"
                benefit3="Get 5 access quota for class session"
                available3="Available"
                benefit4="Certificate"
                available4="Available"
                price="IDR 286,000"
                discount="- IDR 0"
                total="IDR 286,000"
            />
        </>
    )
}
