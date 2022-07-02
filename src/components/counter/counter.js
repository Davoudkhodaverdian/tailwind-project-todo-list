
import IncrementCounter from "./incrementCounter"
import DecrementCounter from "./decrementCounter"
import { useSelector } from 'react-redux'

function Counter() {

    

    const counter = useSelector(state=>state.counter.counter)

    return (
        <div className="text-center mx-2">
            <div>This is Counter page</div>
            <div>The number is {counter}</div>
            <IncrementCounter />
            <DecrementCounter />
        </div>
    )
}

export default Counter