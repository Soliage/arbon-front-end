import { FC } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export const OverviewAreaR1: FC = () => {
    return (
        // <div className={styles.mainAreaRight1}>
        //     {/* <div>Buy Cot</div>
        //     <div style={{width: "25vw", height: "38vh", backgroundColor: "green", marginTop: "1vh", borderRadius: "2vh"}}></div> */}
        // </div>
        <div>
            <Image src="/buycot.png" height={384*1.45} width={550*1} />
        </div>

    )
}