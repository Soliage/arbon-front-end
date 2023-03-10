import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import Button from '@mui/material/Button';

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <div style={{width: "8vw", height: "2vh"}}> </div>
            <Image src="/soliageLogoPlaceholder.png" height={"50"} width={"250"} />
            <div className="filler" style={{width: "50vw", height: "2vh"}}>
            </div>
            <WalletMultiButton />
            {/* <Button style={{marginLeft: "1vw"}} variant="contained">+</Button>
            <Button style={{marginLeft: "1vw"}} variant="contained">+</Button>
            <Button style={{marginLeft: "1vw"}} variant="contained">+</Button> */}
        </div>
    )
}