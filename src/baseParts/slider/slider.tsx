import { FC } from "react"
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { EffectFade, Navigation, Pagination } from 'swiper'
import '../../../node_modules/swiper/modules/pagination/pagination.scss'
import '../../../node_modules/swiper/modules/navigation/navigation.scss'
import '../../../node_modules/swiper/modules/effect-fade/effect-fade.scss'
import './slider.css'
import 'swiper/swiper.scss'
import css from './slider.module.css'
import { MyButton } from "../../components/Button"
import BGImage1 from '../../assets/mac.png'
import BGImage2 from '../../assets/pad.png'
import BGImage3 from '../../assets/pc.png'

const data = [
    {id: 1, h2: 'MacBook', h3: 'Lorem ipsum dolor sit amet', image: BGImage1,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus a felis condimentum molestie. Etiam a ullamcorper odio. Phasellus ipsum lorem, finibus semper sollicitudin ac, varius ut velit. Maecenas hendrerit ac ligula eu ultrices. '},
    {id: 2, h2: 'NotMacBook', h3: 'Lorem ipsum dolor', image: BGImage2,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus a felis condimentum molestie.'},
    {id: 3, h2: 'MacBook', h3: 'Lorem ipsum dolor sit amet', image: BGImage3,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus a felis condimentum molestie. Etiam a ullamcorper odio. Phasellus ipsum lorem, finibus semper sollicitudin ac, varius ut velit. Maecenas hendrerit ac ligula eu ultrices. '},
    {id: 4, h2: 'NotMacBook', h3: 'Lorem ipsum dolor', image: BGImage1,
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus a felis condimentum molestie.'},
]


export const Slider: FC<{}> = (props) => {
    return <section className={css.main}>
        <Swiper
            modules={[Pagination, Navigation, EffectFade]}
            pagination = {{ clickable: true }}
            navigation
            effect="fade"
        >
            {data.map( el => <SwiperSlide key={el.id}>
                <Slide h2={el.h2} h3={el.h3} p={el.p} image={el.image} />
            </SwiperSlide>)}
        </Swiper>
    </section>
}

type slideProps = {
    h2: string
    h3: string
    p: string
    image: string
}

const Slide: FC<slideProps> = ({h2, h3, p, image}) => {
    return <section className={css.slide} >
        <div className={css.container}>
            <div className={css.leftDiv}>
                <img src={image} />
            </div>
            <div className={css.rightDiv}>
                <h2>{h2}</h2>
                <h3>{h3}</h3>
                <p>{p}</p>
                <MyButton text="Show more" type="blue" />
            </div>
        </div>

    </section>
}