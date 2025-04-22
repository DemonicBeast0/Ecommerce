import { useState, useEffect} from "react";
// const [count, useCount] = useState('');
// useEffect(() => {
// // logical concept of the code
// },[count])


function Counter (){
    const [count, setCount] = useState(0);
    // const [Number, setNumber] = useState(0);

    useEffect(()=>{
        console.log(`count update :${count}`)
        return () => {
            console.log(`count is here: useEffect: ${count}`)
        }
    },[count])


    return(

        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCount(count + 10)} >Increase</button>
            <button onClick={()=>setCount(count - 10)} >Decrease</button>
            
            {/* 
            <h2>Test:{number}</h2>
            <button onClick={()=>setNumber(count+1)} >Increase</button>
            <button onClick={()=>setNumber(count-1)} >Decrease</button> */}

        </div>
    )
}
export default Counter;