import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Image from 'next/image'

export const ParcelViewR3 = ({
    
} ):JSX.Element => {
    const [parcelData, setParcelData] = useState([
        [1, "0xblabla","0xwtheadm", 420.23],
        [2, "0xpjhng","0xoh3rqf", 600.81],
        [3, "0xkdjef","0xoiefa", 125.92],
        [4, "0xnegeja","0xoijefha", 43.53],
        [5, "0xpehgfo","0xpjrgjd", 491.23],

                                                ])

    return (
        <div className={styles.mainAreaRight1Full}>
            <div style={{fontWeight: "bold"}}>History</div>
            <div style={{width: "25vw", height: "30vh", marginTop: "2vh", marginBottom: "10vh", borderRadius: "2vh"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <div style= {{width: "3vw", height: "2vh", fontSize: "2vh", color: "grey"}}>#</div>
                    <div style= {{width: "8vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Buyer</div>
                    <div style= {{width: "8vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Seller</div>
                    <div style= {{width: "5vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Price</div>
                </div>
                <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "2vh"}}>
                    {
                    parcelData.map(parcel =>  {
                        return (        
                            <div style={{display: "flex", flexDirection: "row", textAlign: "center", marginBottom: "3vh"}}>
                                <div style= {{width: "3vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[0]}</div>
                                <div style= {{width: "8vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{String(parcel[1]).slice(0,4)}...{String(parcel[1]).slice(String(parcel[1]).length-4)}</div>
                                <div style= {{width: "8vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{String(parcel[2]).slice(0,4)}...{String(parcel[1]).slice(String(parcel[1]).length-4)}</div>
                                <div style= {{width: "5vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>$ {parcel[3]}</div>

                            </div>       
                        )
                        
                        })
                        
                    }
                </div>
                
            </div>
            </div>
            
            <div style={{fontWeight: "bold"}}>Price development</div>
            <div style={{width: "25vw", height: "32vh", marginTop: "1vh", borderRadius: "2vh"}}>
                <Image src="/price_development.png" height={230*1.5} width={342*1.5} />
            </div>
        </div>
    )
}