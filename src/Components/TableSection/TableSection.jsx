
import Table from '../Table/Table.jsx';
import './TableSection.css'
import { information } from '../../data.js';

export default function TableSection() {

    return (
        <>
            <Table data={information} amountRows="10" isPagina={true} />
        </>
    )
}