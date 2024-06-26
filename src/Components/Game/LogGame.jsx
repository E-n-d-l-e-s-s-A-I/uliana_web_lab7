export default function LogGame(props) {

    const number = Number(props.listLog.value);
    const listLog = props.listLog.arrValues.map((val, index) =>
        <p key={index}>{index + 1}.
            Число {val}
            {Number(val) > number ? " больше количества озер в Канаде." :
                Number(val) < number ? " меньше количества озер в Канаде.." :
                    ". Угадал!"}
        </p>
    );
    return (
        <div className="log">
            {listLog}
        </div>
    )
};