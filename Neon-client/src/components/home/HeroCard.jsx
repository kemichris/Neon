export function HeroCard({text1, text2, text3, icon}) {
    return (
        <div className="hero-card">
            <div className="hero-card-text">
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
            {icon}
        </div>
    )
}