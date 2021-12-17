import { FC } from "react"

type props = {
    text: string,
    type: 'large' | 'normal' | 'white' | 'blue'
}

const cssALarge = {
    display: 'inline-block',
    height: '34px',
    backgroundColor: '#39b9ef',
    borderRadius: '25px',
    padding: '10px 40px 0px',
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
}
const cssANormal = {
    display: 'inline-block',
    height: '30px',
    backgroundColor: '#39b9ef',
    borderRadius: '25px',
    padding: '10px 40px 0px',
    fontSize: '14px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
} 
const cssAWhite = {
    display: 'inline-block',
    height: '30px',
    backgroundColor: '#fff',
    borderRadius: '25px',
    padding: '10px 40px 0px',
    fontSize: '14px',
    color: '#2ebaee',
    textDecoration: 'none',
    fontWeight: 'bold',
}

const cssABlue = {
    display: 'inline-block',
    height: '35px',
    backgroundColor: '#5684ef',
    borderRadius: '25px',
    padding: '15px 40px 0px',
    fontSize: '14px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    
}

export const MyButton: FC<props> = ({ text, type }) => {

    return <>
        {type === 'large' && <a style={cssALarge} href="" >{text}</a>}
        {type === 'normal' && <a style={cssANormal} href="" >{text}</a>}
        {type === 'white' && <a style={cssAWhite} href="" >{text}</a>}
        {type === 'blue' && <a style={cssABlue} href="" >{text}</a>}
    </>
}