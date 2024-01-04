import {type} from "@testing-library/user-event/dist/type";
import {useDispatch, useSelector} from "react-redux";

export const Million = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);
    const WasteMillion = () => {
        dispatch({type: "WasteMillion", payload: -1000000})
    }
    const EarnMillion = () => {
        dispatch({type: "EarnMillion", payload: 1000000})
    }
    return (
        <div>
            <button onClick={WasteMillion}>Waste Millon</button>
            <button onClick={EarnMillion}>Earn Millon</button>
        </div>
    )
}