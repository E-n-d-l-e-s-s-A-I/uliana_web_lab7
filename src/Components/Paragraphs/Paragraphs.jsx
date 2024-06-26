
import Paragraph from './Paragraph'

export default function Paragraphs(props) {
    const paragraphs = props.data.map((item, index) =>
        <Paragraph text={item['text']} title={item['title']} />
    );
    return (
        <>
            {paragraphs}
        </>
    )
}
