import SliderBody from "./SliderBody";
import { useState } from 'react';
import Paragraphs from '../Paragraphs/Paragraphs'
import { texts } from "../../data";
import './Slider.css'


export default function Slider(props) {
    const amount = props.amount; // получаем из пропсов количество выводимых картинок и массив с url картинок
    const data = props.data;

    const [сurrent, setCurent] = useState("0"); // создаем состояние(хук) для индекса текущей картинки
    console.log(сurrent)
    const changeActive = (event) => {// функция для изменения состояния
        if (event.target.innerHTML == 'вперед')
            setCurent(Number(сurrent) + 1);
        else
            setCurent(Number(сurrent) - 1);
    };

    const btn = []// создает массив кнопок(вперед, назад) и по нажатию будет вызываться событие по изменение состояния
    if (сurrent != 0) btn.push(<span onClick={changeActive} key={2}>назад</span>)//выводим кнопку назад, если мы не на первой картинке
    if (сurrent + amount < data.length) btn.push(<span onClick={changeActive} key={1}>вперед</span>)//выводим кнопку вперед, если мы не дошли до конца

    return (
        <>
            <div className="gallery">
                <SliderBody data={data} current={сurrent} amount={amount} //компонент тела слайдера с пропсами из массива картинок, индекса текущей картинки и количества отоброжаемых картинок
                />
            </div>
            {btn}
            <Paragraphs data={texts}>

            </Paragraphs>
        </>
    )
}