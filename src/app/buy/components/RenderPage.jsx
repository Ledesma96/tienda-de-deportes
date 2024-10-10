'use client'
import { useState } from "react";
import { ActionButtons, DeliveryMethod, PersonalForm, SubmissionForm } from ".";

const RenderPage = () => {
    const [formDataPersonal, setFormDataPersonal] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        dni: '',
    })
    const [fromDataSubmission, setFromDataSubmission] = useState({
        address: '',
        postalCode: '',
        locality: '',
        city: '',
        deliveryInstructions: '',
    })
    const [delivery, setDelivery] = useState('delivery');

    return (
        <main className="container-buy">
            <DeliveryMethod
            setDelivery={setDelivery}
            delivery={delivery}
            />
            <PersonalForm
                formDataPersonal={formDataPersonal}
                setFormDataPersonal={setFormDataPersonal}
            />
            {delivery === 'delivery' &&
                <SubmissionForm
                    fromDataSubmission={fromDataSubmission}
                    setFromDataSubmission={setFromDataSubmission}
                />
            }
            <ActionButtons />
        </main>
    )
}

export default RenderPage