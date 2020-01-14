import React, { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return <h1>{count}</h1>
}