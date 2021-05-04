import React from 'react'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import PaymentVerif from '../pricing/payment/PaymentVerif'

function SessionPay() {
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <PaymentVerif
                plan="Class Session Quota"
                time="5 Quotas"
                benefit1="Get 5 access quotas for class session"
                available1="available"
                price="IDR 250,000"
                discount="- IDR 0"
                total="IDR 250,000"
            />
        </>
    )
}

export default SessionPay
