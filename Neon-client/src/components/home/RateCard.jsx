export function RateCard({rateIcon, rate, rateReturn, rateName, rateInfo, badgeIcon, badgeName}) {
    return (
        <div className="rate-card">
            <div className="rate-icon">
                {rateIcon}
            </div>
            <h4>{rate}</h4>
            <p>{rateReturn}</p>
            <p>{rateName}</p>
            <small>{rateInfo}</small>
            <p>{badgeIcon} {badgeName}</p>
        </div>
    )
}