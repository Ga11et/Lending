import { FC } from "react";

type props = {
    image: string
    heading: string
    innerText: string
}

const cssDiv = {
    padding: '80px 0 0 0',
    margin: '0px',
    width: '23%'
}
const cssImg = {
    paddingBottom: '50px',
    margin: '0px',
    height: '70px'
}
const cssH3 = {
    paddingBottom: '30px',
    color: '#242424',
    fontSize: '24px',
    fontWeight: 'normal',
    margin: '0px'
}
const cssP = {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#878787',
    margin: '0px'
}

export const Servise: FC<props> = ({image, heading, innerText}) => {
    return <>
        <div style={cssDiv} >
            <img src={image} style={cssImg} alt='noPic' />
            <h3 style={cssH3} >{heading}</h3>
            <p style={cssP} >{innerText}</p>
        </div>
    </>
}