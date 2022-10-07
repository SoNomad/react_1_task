import { useState } from "react"

export const MainContent = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="container">
            <div className="counter">{count}</div>
            <div className="buttons">
                <button className="plusBtn" onClick={()=> setCount(count + 1)}>Увеличить</button>
                <button className="minusBtn" onClick={() => setCount(count - 1)}>Уменьшить</button>
                <button className="resetBtn" onClick = {() => setCount(count - count)}  >Сбросить</button>
            </div>
        </div>
    )
}
