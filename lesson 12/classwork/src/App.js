import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from './actions'

function App() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>Redux Counter</h1>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(incrementCounter())}>Increment</button>
            <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        </div>
    )
}

export default App
