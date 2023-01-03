const { useState, useEffect } = require("react")

const Timer = () =>{
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(()=>{
            setCount((count) => count+1);
        }, 1000);
    },[]);
    return <h1> I've rendered {count} time</h1>
}

export default Timer;