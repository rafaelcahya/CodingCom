import React from 'react'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import PaymentVerif from '../pricing/payment/PaymentVerif'

function ConsultationPay() {
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <PaymentVerif
                plan="Class Consultation Quota"
                time="5 Quotas"
                benefit1="Get 5 access quotas for class consultation"
                available1="available"
                price="IDR 75,000"
                discount="- IDR 0"
                total="IDR 75,000"
            />
        </>
    )
}

export default ConsultationPay
