import Button from '../Button/Button';
import './TabSection.css'

export default function TabSection({ active, onChange }) {
    return (
        <section style={{ marginBottom: '1rem' }} className='menu'>
            <Button isActive={active == 'gallery'} onClick={() => onChange('gallery')}>
                Галлерея
            </Button>
            <Button isActive={active == 'table'} onClick={() => onChange('table')}>Таблица</Button>
            <Button isActive={active == 'game'} onClick={() => onChange('game')}>Игра</Button>
        </ section>
    )
}