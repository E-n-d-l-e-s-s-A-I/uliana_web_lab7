import TableHead from "./TableHead"
import TableBody from "./TableBody"
import { useState } from 'react'
import './Table.css'

export default function Table(props) {
    if (props.isPagina) {
        const [activePage, setActivePage] = useState("1");

        const changeActive = (event) => {
            setActivePage(event.target.innerHTML);
        };


        //количество страниц разбиения таблицы
        const n = Math.ceil(props.data.length / props.amountRows);

        // массив с номерами страниц
        const arr = Array.from({ length: n }, (v, i) => i + 1);

        //формируем совокупность span с номерами страниц
        const pages = arr.map((item, index) =>
            <span onClick={changeActive} className={item == activePage ? 'active' : 'notActive'} style={{ margin: '10px' }}> {item}</span>
        );


        return (
            <>
                <table>
                    <TableHead head={Object.keys(props.data[0])} />
                    <TableBody body={props.data} amountRows={props.amountRows}
                        numPage={activePage} />
                </table>
                <div>
                    {pages}
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <table>
                    <TableHead head={Object.keys(props.data[0])} />
                    <TableBody body={props.data} amountRows={props.data.length}
                        numPage={1} />
                </table>
            </>
        )
    }
}