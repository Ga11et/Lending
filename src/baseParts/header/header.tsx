import { FC } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import { MyButton } from '../../components/Button'
import css from './Header.module.css'


export const Header: FC<{}> = (props) => {
    return <>
        <header className={css.header}>
            <UpperHeader />
            <UnderHeader />
        </header>
    </>
}

const UpperHeader: FC<{}> = (props) => {
    return <>
        <div className={css.mainUp}>
            <div className={css.content}>
                <div className={css.logo}>
                    <a href="index.html"><img src={logo} /></a>
                </div>
                <ol className={css.menu}>
                    <li><a>Homepage</a></li>
                    <li><a>Services</a></li>
                    <li><a>About us</a></li>
                    <li><a>Contact us</a></li>
                    <li><a><img src={search} /></a></li>
                </ol>
            </div>
        </div>
    </>
}

const UnderHeader: FC<{}> = (props) => {
    return <div className={css.mainD} >
        <h1><span>Austera</span> is simple PSD template</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <MyButton text={'Learn more'} type='large' />
    </div>
}