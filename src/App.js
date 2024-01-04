import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";
import {Million} from "./Millon";

export default function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);

    function getCash(cash) {
      dispatch({type: "GET_CASH", payload: cash})
    }

    const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})
    }

    return (
        <div className={'App-header'}>
          <div style={{display: "flex"}}>
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
            <Million/>
          </div>
        </div>
    );
}