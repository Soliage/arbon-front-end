import { FC } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export const OverviewAreaR2: FC = () => {
    return (
        // <div className={styles.mainAreaRight2}>
        //     <div>Burn Cot</div>
        //     <div style={{width: "25vw", height: "28vh", backgroundColor: "red", marginTop: "1vh", borderRadius: "2vh"}}></div>
        // </div>
        <div>
            <Image src="/burncot.png" height={384*0.9} width={550} />
        </div>
    )
}