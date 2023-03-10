import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const StewardViewR2: FC = () => {
    const [parcelData, setParcelData] = useState([
        [112456, 123456123,500],
        [212345, 151232132,346],
        [312456, 123456662,135],
        [454241, 123456789,213],

                                                ])
    return (
        <div className={styles.mainAreaRight2}>
            <div style={{fontWeight: "bold"}}>Reward history</div>
            <div style={{display: "flex", flexDirection: "column", marginTop: "1vh", marginLeft: "-2vw"}}>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <div style= {{width: "9vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Timestamp</div>
                    <div style= {{width: "9vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Height</div>
                    <div style= {{width: "4vw", height: "2vh", fontSize: "2vh", color: "grey"}}>COT</div>
                </div>
                <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "2vh"}}>
                    {
                    parcelData.map(parcel =>  {
                        return (        
                            <div style={{display: "flex", flexDirection: "row", textAlign: "center", marginBottom: "4vh"}}>
                                <div style= {{width: "9vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[0]}</div>
                                <div style= {{width: "9vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[1]}</div>
                                <div style= {{width: "4vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[2]}</div>
                            </div>       
                        )
                        
                        })
                        
                    }
                </div>

            </div>
        </div>
    )
}