import { FC } from "react";
import css from './footer.module.css'


export const Footer: FC<{}> = (props) => {
    return <footer className={css.main}>
        <div className={css.container}>
            <div className={css.links}>
                <a>Homepage</a>
                <a>Services</a>
                <a>About Us</a>
                <a>Contact</a>
            </div>
            <div className={css.copyRight}>
                <p>Copyright ⓒ 2015. All rights reserved by MountTec</p>
            </div>
        </div>
    </footer>
}