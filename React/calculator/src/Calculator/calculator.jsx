import React ,{useState, usestate } from 'react';
import './calc.css'


export const Calculator = ()=> {

const [ result, setResult]=useState('');

const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
}

const clearDisplay=()=> {
    setResult('');
}

const calculate=()=> {
    setResult(eval(result).toString())
}

return (



<div className='wrapper'>
<div className='line'>
</div>
    <div className='calc' >
    <input className='Inputt' type="text" placeholder='0' id='answer' value={result} />

    <input type="button" value='9' className='button' onClick={clickHandler}/>
    <input type="button" value='8' className='button' onClick={clickHandler}/>
    <input type="button" value='7' className='button' onClick={clickHandler}/>
    <input type="button" value='+' className='button2' onClick={clickHandler}/>
    <input type="button" value='6' className='button' onClick={clickHandler}/>
    <input type="button" value='5' className='button' onClick={clickHandler}/>
    <input type="button" value='4' className='button' onClick={clickHandler}/>
    <input type="button" value='-' className='button2' onClick={clickHandler}/>
    <input type="button" value='3' className='button' onClick={clickHandler}/>
    <input type="button" value='2' className='button' onClick={clickHandler}/>
    <input type="button" value='1' className='button' onClick={clickHandler}/>
    <input type="button" value='x' className='button2' onClick={clickHandler}/>
    <input type="button" value='0' className='button' onClick={clickHandler}/>
    <input type="button" value='.' className='button2' onClick={clickHandler}/>
    <input type="button" value='/' className='button2' onClick={clickHandler}/>
    <input type="button" value='%' className='button2' onClick={clickHandler}/>
    <input type="button" value='Clear' onClick={clearDisplay} className='button button1'/>
    <input type="button" value='=' onClick={calculate} className='button button1'/>
    </div>   
</div>



)

}  