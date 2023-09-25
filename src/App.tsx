import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./state/store.ts";
import {decrement, decrementByAmount, increment, incrementByAmount} from "./state/counterSlice.ts";

export const App = () => {
  const dispatch = useDispatch()
  const count = useSelector<RootState, number>(state => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <div className="button-group">
        <div>
          <button onClick={() => dispatch(increment())}>+ 1</button>
          <button onClick={() => dispatch(decrement())}>- 1</button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>
          <button onClick={() => dispatch(decrementByAmount(20))}>- 20</button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmount(100))}>+ 100</button>
          <button onClick={() => dispatch(decrementByAmount(150))}>- 150</button>
        </div>
      </div>
    </div>
  )
}
