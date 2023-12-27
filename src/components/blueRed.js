import React, {useState} from "react";

const Square = () => {

    const [colorOne, setColorOne] = useState("red")
    const [colorTwo, setColorTwo] = useState("blue")
    const [borderOne, setBorderOne] = useState('2px solid red')
    const [borderTwo, setBorderTwo] = useState('2px solid blue')

    const handleClickOne = () => {
        setColorOne(colorTwo);
        setColorTwo(colorOne);
        setBorderTwo(borderOne);
        setBorderOne(borderTwo);
    }
    const handleClickTwo = () => {
        setColorOne(colorTwo);
        setColorTwo(colorOne);
        setBorderTwo(borderOne);
        setBorderOne(borderTwo);
    }



    return (
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            marginTop: "100px"

        }}>
            <div style={{
                height: "200px",
                width: "200px",
                background: colorOne,
                border: borderOne
            }}
            onClick={handleClickOne}
            ></div>
            <div style={{
                height: "200px",
                width: "200px",
                background: colorTwo,
                border: borderTwo
            }}
            onClick={handleClickTwo}
            ></div>
        </div>
    )
}

export default Square