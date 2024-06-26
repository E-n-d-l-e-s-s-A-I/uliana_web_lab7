import TableRow from "./TableRow/TableRow"
export default function TableHead(props) {
    return (
        <thead>
            <tr>
                <TableRow row={props.head} isHead="1" />
            </tr>
        </thead>
    )

}