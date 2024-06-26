
export default function SliderBody(props) {
    const begRange = props.current // первый отображаемый = текущему
    const endRange = begRange + Number(props.amount)// последний отображаемый = текущему+кол-во выводимых 
    const gallery = props.data.map((item, index) =>
        <img key={index} src={item} className={(index >= begRange && index < endRange) ? "show" : "hide"} /> // если не в диапазоне [первый отобр; посл отбр), то не вцыводим добавив класс css hide
    );
    return (
        <div className="gallery">
            {gallery}
        </div>
    )
}