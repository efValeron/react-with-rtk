import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./state/store.ts";
import {addAC, minusAC} from "./moneyReducer.ts";

export const App = () => {
  const dispatch = useDispatch()
  const money = useSelector<RootState, number>(state => state.money)

  return (
    <div>
      <h1>{money}</h1>
      <div className="button-group">
        <button onClick={()=> dispatch(addAC(100))}>+</button>
        <button onClick={()=> dispatch(minusAC(100))}>-</button>
      </div>
    </div>
  )
}
