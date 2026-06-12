import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement, Reset } from "./3_Slicer1";


export default function Counting(){
     
    const count = useSelector((state)=> state.slice1.count);  // why state.slice1.count (this explain in dummy file)
    const dispatch = useDispatch();

    // console.log(Increment());
    // console.log(Decrement());

    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}