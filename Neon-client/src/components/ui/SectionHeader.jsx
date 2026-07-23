export function SectionHeader({icon, title}) {
    return (
        <div className="section-header">
            {icon}
            <h3>{title}</h3>
        </div>
    )
}