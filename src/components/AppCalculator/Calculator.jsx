import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {sum, sub} from '../../store/Calculator/Calculator.actions'

function Calculator(){

    const result = useSelector(state => state.calculator)
    const dispatch = useDispatch()

    const [inputA, setInputA] = useState(0)
    const [inputB, setInputB] = useState(0)

    return(
        <>
            <input 
                type="text" 
                placeholder='a'
                value={inputA}
                onChange={(e)=> setInputA(+e.target.value)}
                />
            <input 
                type="text" 
                placeholder='b'
                value={inputB}
                onChange={(e)=> setInputB(+e.target.value)}
                />

            <button
                onClick={()=> dispatch(sum(inputA,inputB))}
            >Somar</button>
            <button
                onClick={()=> dispatch(sub(inputA,inputB))}
            >Subtrair</button>

            <div>
              {result}
            </div>
        </>
    )
}

export default Calculator