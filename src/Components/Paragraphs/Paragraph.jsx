

export default function Paragraph(props) {
    const text = props.text
    const title = props.title

    return (
        <>
            <h2>{title}</h2>
            <p>{text}</p>
        </>
    )
}
