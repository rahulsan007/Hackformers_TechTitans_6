import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MnEDqSH2wHbXuLvAuatQVSVezpUSRSJ7KwAvgIwkvqxXaZql3mmEDZetPzl8R4hJ2rlKMiIOHs7sdxhxZ7xJCeB00OQa1DQyJ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}