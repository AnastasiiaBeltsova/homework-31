import { useSelector } from "react-redux"
import { todosSelectors } from "../engine/todo-reducer/selectors"

export function Footer() {
    const todosValue = useSelector(todosSelectors.todosValue)
   
    return (
       <p>
        Всего: <span>{todosValue}</span>
       </p>
    )
}