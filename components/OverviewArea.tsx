import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';

interface Props {
    setViewFn: (page) => void
}
export const OverviewArea = ({
    setViewFn
}: Props ):JSX.Element => {
     
    const getData2 = () => {
        setCotPrice(65)
        setParcels(21)
        setParcelData(
            [
                [1, "0xblabla",99,1.69,"chart", 42.69, 62],
                [2, "0xbleble",98,1.69,"chart", 42.69, 14],
                [3, "0xblublu",97,1.69,"chart", 42.69, 13],
                [4, "0xblublu",97,1.69,"chart", 42.69, 12],
                [5, "0xblublu",97,1.69,"chart", 42.69, 12],
            ]
        )
    }
    
    const [cotPrice, setCotPrice] = useState(78);
    const [parcels, setParcels] = useState(0);
    const [avgRating, setAvgRating] = useState(0);
    const [hectares, setHectares] = useState(0);
    const [sequesteredTons, setSequesteredTons] = useState(0);
    const [stewardEarnings, setStewardEarnings] = useState(0);
    const [mint, setMint] = useState(0);
    const [burn, setBurn] = useState(0);
    const [total, setTotal] = useState(0);
    const [parcelData, setParcelData] = useState([
        [1, "0xblabla",99,1.69,0, 42.69, 62],
        [2, "0xbleble",98,1.69,1, 42.69, 14],
        [3, "0xblublu",97,1.69,2, 42.69, 13],
        [4, "0xblublu",97,1.69,3, 42.69, 12],
        [5, "0xblublu",97,1.69,4, 42.69, 12],
                                                ])

                           
    return (
        <div className={styles.mainAreaLeft}> 
            <div style={{marginTop: "5vh",marginBottom: "5vh", fontWeight: "bold"}}>Overview</div>
            <div style={{marginBottom: "0.5vh", fontSize: "2vh", color: "grey"}}>Current price COT</div>
            <div style={{marginBottom: "3vh", fontWeight: "bold"}}>${cotPrice}</div>
            <div className='infoBoxes' style={{display: "flex", flexDirection: "row", marginBottom: "5vh"}}>
                <div className={styles.infoBox1}>
                    <div style={{fontSize: "25px", marginBottom: "0.5vw", fontWeight: "bold"}}>Total coverage</div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{width: "5vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Parcels</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                        <div style={{width: "5vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Avg rating</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>{avgRating}%</div>
                        </div>
                        <div style={{width: "5vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Hectares</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>{hectares}</div>
                        </div>
                    </div>
                </div>

                <div className={styles.infoBox2}>
                    <div style={{fontSize: "25px", marginBottom: "0.5vw", fontWeight: "bold"}}>Monthly Carbon Stats</div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{width: "8vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Tons sequestered</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>{sequesteredTons} Tons</div>
                        </div>
                        <div style={{width: "8vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Steward earnings</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>${stewardEarnings}</div>
                        </div>
                    </div>
                </div>

                <div className={styles.infoBox3}>
                    <div style={{fontSize: "25px", marginBottom: "0.5vw", fontWeight: "bold"}}>COT outstanding</div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{width: "5vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Mint (m)</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>{mint}</div>
                        </div>
                        <div style={{width: "5vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Total</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>{total}k</div>
                        </div>
                        <div style={{width: "5vw", display: "flex", flexDirection: "column", paddingRight: "3vh"}}>
                            <div style={{fontSize: "15px", color: "grey"}}>Burn (m)</div>
                            <div style={{fontSize: "15px", fontWeight: "bold"}}>{burn}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginBottom: "2vh", fontWeight: "bold"}}>Current Parcels</div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <div style= {{width: "3vw", height: "2vh", fontSize: "2vh", color: "grey"}}>ID</div>
                    <div style= {{width: "9vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Steward</div>
                    <div style= {{width: "4vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Rating</div>
                    <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey"}}>M/M change</div>
                    <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Chart (y)</div>
                    <div style= {{width: "10vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Cash Flows COT (m)</div>
                    <div style= {{width: "10vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Cash Flows USD (m)</div>
                    <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey"}}>More</div>
                </div>
                <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "2vh"}}>
                {
                    parcelData.map(parcel =>  {
                        
                        return (        
                            <div style={{display: "flex", flexDirection: "row", textAlign: "center", marginBottom: "4vh"}}>
                                <div style= {{width: "3vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[0]}</div>
                                <div style={{width: "9vw", height: "2vh", display: "flex", flexDirection: "row"}}>
                                    <div style={{width: "2vw", height: "2vh"}}>
                                    <Image style={{marginTop: "0vh"}} src="/parcel_icon.png" height={"24"} width={"24"} />
                                    </div>
                                    <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{String(parcel[1]).slice(0,4)}...{String(parcel[1]).slice(String(parcel[1]).length-4)}</div>
                                </div>
                                <div style= {{width: "4vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[2]}%</div>
                                <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[3]}%</div>
                                <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>
                                    <Image style={{marginTop: "2vh"}} src={("/chart").concat(String(parcel[4])).concat(".png")} height={"40"} width={"76"} />
                                </div>
                                <div style= {{width: "10vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[5]}</div>
                                <div style= {{width: "10vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[6]}</div>
                                <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>
                                    <Button variant="contained"  
                                        onClick={() => {
                                            setViewFn("parcel")
                                    }}>View</Button>
                                </div>

                            </div>       
                        )
                        
                        })
                    }
                </div>
                <div>
                    <Button style={{marginLeft: "25vw"}} variant="contained" color="primary">View More</Button>
                </div>
            </div>

        </div>

    )
}