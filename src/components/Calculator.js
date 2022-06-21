import React from "react";
import { useState } from "react";

const Calculator = ( ) =>{
const [data,setData] = useState('');

    const sendData = (val) =>{
        if (val == '='){
            performOperation()
        }else{
            var newData = data.concat(val)
            setData(newData);
        }
        
    }

    const performOperation = () =>{
        let a = data;
        var operation;
         if(a.includes('+')){
            a = a.split('+')
            operation = parseInt(a[0]) + parseInt(a[1]);
            operation = operation.toString();
            setData(operation);
         }else if(a.includes('*')){
            a = a.split('*');
                operation = parseInt(a[0]) * parseInt(a[1]);
                operation = operation.toString();
                setData(operation);
         }else if(a.includes('/')){
            a = a.split('/');
                operation = parseInt(a[0]) / parseInt(a[1]);
                operation = operation.toString();
                setData(operation);
         }else if(a.includes('-')){
            a = a.split('-');
                operation = parseInt(a[0]) - parseInt(a[1]);
                operation = operation.toString();
                setData(operation);
         }
    }

    const NumberDiv = (props) => {
        return(
            <div style={innerDiv}>
                    <h5 onClick={()=> sendData(props.num)}  style={{'fontSize':25}}>{props.num}</h5>
            </div>
        )
    }

    return(
        <>
        <div style={mainDiv } >
            <div style={divStyle}>
                <h2>Calculator</h2>
                <textarea style={inputStyle} value={data} />
                <div style={rowDiv}>
                    <NumberDiv num={"1"} />
                    <NumberDiv num={"2"} />
                    <NumberDiv num={"3"} />
                    <NumberDiv num={"*"} />
                </div>
                <div style={rowDiv}>
                    <NumberDiv num={"4"} />
                    <NumberDiv num={"5"} />
                    <NumberDiv num={"6"} />
                    <NumberDiv num={"/"} />
                </div>
                <div style={rowDiv}>
                    <NumberDiv num={"7"} />
                    <NumberDiv num={"8"} />
                    <NumberDiv num={"9"} />
                    <NumberDiv num={"-"} />
                </div>
                <div style={rowDiv}>
                    <NumberDiv num={"0"} />
                    <NumberDiv num={"00"} />
                    <NumberDiv num={"="} />
                    <NumberDiv num={"+"} />
                </div>
            </div>
        </div>
        </>
    )
}

const innerDiv = {
    'width':'12vh',
    'height':"5vh",
    'margin':10,
    'display':'flex',
    'justifyContent':"center",
    'alignItems':"center",
    "backgroundColor":"red"
}
const rowDiv = {
    'display':'flex',
    'flexDirection':'row'
}

const inputStyle={
    'width':'59vh',
    'height':"4vh",
    'fontSize':'20'
}
const divStyle = {
    'width':'60vh',
    'height':"55vh",
    'backgroundColor':"yellow"
}
const mainDiv = {
    'height':'100vh',
    'display':'flex',
    'backgroundColor':'skyBlue',
    'justifyContent':"center",
    'alignItems':"center"
}
export default Calculator