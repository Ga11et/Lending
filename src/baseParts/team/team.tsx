import { FC } from "react";
import { MyButton } from "../../components/Button";
import css from './team.module.css'
import member1 from '../../assets/person-1.png'
import member2 from '../../assets/person-2.png'
import member3 from '../../assets/person-3.png'
import member4 from '../../assets/person-4.png'

const data = [
    {id: 1, photo: member1, name: 'John Doe', post: 'Ceo&Founder'},
    {id: 2, photo: member2, name: 'Paul Kowalsy', post: 'Ceo&Founder'},
    {id: 3, photo: member3, name: 'Emilly Williams', post: 'Ceo&Founder'},
    {id: 4, photo: member4, name: 'Patricia Green', post: 'Ceo&Founder'},
]

export const OurTeam: FC<{}> = (props) => {
    return <section className={css.ourTeam}>
        <div className={css.container}>
            <h2 className={css.h21}>Check our</h2>
            <h2 className={css.h22}>awesome team</h2>
            <div className={css.teammates}>
                {data.map( el => <Member key={el.id} name={el.name} photo={el.photo} post={el.post} />)}
            </div>
        </div>
    </section>
}

type memberProps = {
    photo: string
    name: string
    post: string
}

const Member: FC<memberProps> = ({photo, name, post}) => {
    return <div className={css.member}>
        <img src={photo} alt="member" />
        <h3>{name}</h3>
        <p>{post}</p>
        <MyButton text="Check profile" type="normal" />
    </div>
}