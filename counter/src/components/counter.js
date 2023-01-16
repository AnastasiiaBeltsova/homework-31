import { useSelector, useDispatch } from "react-redux"
import { counterSelector, increment, decrement } from "../engine/counter-reducer/slice"


export function Counter() {
    const value = useSelector(counterSelector.value)
    return (
        <span id="value">{value}</span>
    )
}

export function ButtonIncrement() {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(increment())

    return (
        <button onClick={handleClick} id="increment">+</button>
    )
}

export function ButtonDecrement() {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(decrement())
    return (
        <button onClick={handleClick} id="decrement">-</button>
    )
}