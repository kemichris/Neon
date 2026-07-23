import { FaUser } from "react-icons/fa";

import { ReviewCard } from "./ReviewCard";

export function ReviewSection() {
    return (
        <div className="review-section">
            <h2>Hear From Our Customers</h2>
            <div className="review-cards">
                <ReviewCard imgIcon={<FaUser />} 
                review="I am impressed with the customer service and speed of payout."
                 userName="Lilly Jeferson"
                bankingType="Verified Customer"
                />
                <ReviewCard imgIcon={<FaUser />} 
                review="Excellent service and competitive rates. Highly recommended!"
                 userName="Smith Conroy"
                bankingType="Business Owner"
                />
                <ReviewCard imgIcon={<FaUser />} 
                review="The mobile app is fantastic and customer support is top-notch."
                 userName="Emily Johnson"
                bankingType="Personal Banking"
                />
            </div>
        </div>
    )
}


