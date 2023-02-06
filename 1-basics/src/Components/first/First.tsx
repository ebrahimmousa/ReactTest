import { useState } from "react";

interface IFirstProps {
    myValue: number
}

export const First = (props: IFirstProps) => {
    const [x, setX] = useState(props.myValue);

    const changeX = () => {
        setX(x + 1);
    }
    console.log(x);

    return <h2 onClick={changeX}>My First Component : {x} </h2>;
};