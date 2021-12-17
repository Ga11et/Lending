import { FC } from "react";
import { Servise } from "../../components/Servise";
import css from './servises.module.css'
import serviceImg1 from '../../assets/serv-1.png'
import serviceImg2 from '../../assets/serv-2.png'
import serviceImg3 from '../../assets/serv-3.png'
import serviceImg4 from '../../assets/serv-4.png'
import computerImg from '../../assets/pc.png'
import padImg from '../../assets/pad.png'
import boyImg from '../../assets/boy.jpg'
import { MyButton } from "../../components/Button";

export const Servises: FC<{}> = (props) => {
    return <>
        <section className={css.main} >
            <div className={css.container} >
                <h2>Our services</h2>
                <div className={css.servises}>
                    <Servise
                        heading='Responsive design'
                        image={serviceImg1}
                        innerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque molestie purus a felis condimentum molestie.' />
                    <Servise
                        heading='Endless Security'
                        image={serviceImg2}
                        innerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque molestie purus a felis condimentum molestie. Etiam a ullamcorper odio.' />
                    <Servise
                        heading='Incredible features'
                        image={serviceImg3}
                        innerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque molestie purus a felis condimentum molestie.' />
                    <Servise
                        heading='Fresh ideas'
                        image={serviceImg4}
                        innerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque molestie purus a felis condimentum molestie. Etiam a ullamcorper odio.' />
                </div>
                <MyButton text='Check servises' type='normal' />
                <Computer />
                <Pad />
            </div>
        </section>
        <Boy />
    </>
}

const Computer: FC<{}> = (props) => {
    return <div className={css.computer}>
    <div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus a felis condimentum molestie. Etiam a ullamcorper odio. Phasellus ipsum lorem, finibus semper sollicitudin ac, varius ut velit. Maecenas hendrerit ac ligula eu ultrices. </p>
        <MyButton text="Show more" type="normal" />
    </div>
    <div>
        <img src={computerImg} alt="Personal computer" />
    </div>
</div>
}

const Pad: FC<{}> = (props) => {
    return <div className={css.pad}>
    <div>
        <img src={padImg} alt="Pad" />
    </div>
    <div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus a felis condimentum molestie. Etiam a ullamcorper odio. Phasellus ipsum lorem, finibus semper sollicitudin ac, varius ut velit. Maecenas hendrerit ac ligula eu ultrices. </p>
        <MyButton text="Show more" type="white" />
    </div>
</div>
}

const Boy: FC<{}> = (props) => {
    return <div className={css.boy} >
        <div className={css.leftDiv}>
            <img src={boyImg} alt="boy" />
        </div>
        <div className={css.rightDiv}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus a felis condimentum molestie. Etiam a ullamcorper odio. Phasellus ipsum lorem, finibus semper sollicitudin ac, varius ut velit. Maecenas hendrerit ac ligula eu ultrices. </p>
            <MyButton text="Show more" type="normal" />
        </div>
    </div>
}