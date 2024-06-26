import { useState } from 'react'
import LogGame from './LogGame';
import ResultGame from './ResultGame';

export default function LogicGame() {
    const [game, setGame] = useState(
        {
            value: 2000000,
            arrValues: [],
            isEnd: false
        });

    const handleSubmit = (event) => {
        event.preventDefault();
        setGame(
            {
                value: game.value,
                arrValues: [...game.arrValues, userValue],
                isEnd: game.value == userValue
            });

    };

    const newGame = () => {
        setUserValue('')
        setGame(
            {
                value: 2000000,
                arrValues: [],
                isEnd: false
            });
    }


    const [userValue, setUserValue] = useState("");
    const onChange = (event) => {
        setUserValue(event.target.value);
    };

    return (
        <div>
            <h3>Угадай количесво озер в канаде:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Число:
                    <input type="number" value={userValue}
                        onChange={onChange} />
                </label>
                <input type="submit" value="ОК" />
                <LogGame listLog={game} />
                {game.isEnd &&
                    <>
                        <ResultGame step={game.arrValues.length} />
                        <input type="button" value="Новая игра?" onClick={newGame} />
                    </>
                }

            </form>
        </div>
    );
}