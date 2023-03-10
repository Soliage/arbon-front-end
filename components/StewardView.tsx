import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';

interface Props {
    setViewFn: (page) => void
}
export const StewardView = ({
    setViewFn
}: Props ):JSX.Element => {

    const [parcelData, setParcelData] = useState([
        [1, "0xblabla",99,1.69,0, 42.69, 62],
        [2, "0xbleble",98,1.69,1, 42.69, 14],
        [3, "0xblublu",97,1.69,2, 42.69, 13],
        [4, "0xblublu",97,1.69,3, 42.69, 12],
        [5, "0xblublu",97,1.69,4, 42.69, 12],
                                                ])

    const [parcelsOwned, setParcelsOwned] = useState(10);
    const [averageRating, setAverageRating] = useState(67);
    const [treeCover, setTreeCover] = useState(2680);
    const [totalValue, setTotalValue] = useState("478,953");
    const [rating, setRating] = useState(77);
    const [totalSize, setTotalSize] = useState(4000);                                            


    return (
        <div className={styles.mainAreaLeft}>
            <div style={{display: "flex", flexDirection: "row", marginTop: "5vh",marginBottom: "5vh"}}>
                <div style={{fontWeight: "bold"}}>Overview</div>
                <div style={{width: "30vw"}}> </div>
                <Button style={{marginRight: "1vw"}} variant="contained">+ Stake parcels</Button>
                <Button variant="contained">- Unstake parcels</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "row"}}> 
                <div className='infoBoxes' style={{display: "flex", flexDirection: "column", marginBottom: "6vh", width: "13vw", height: "20vh", borderRadius: "3vh", backgroundColor: "cyan"}}>
                    <div style={{fontWeight: "bold", marginLeft: "1vw"}}>Parcel totals</div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Parcels owned</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcelsOwned}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Total value</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>${totalValue}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Average rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{averageRating}%</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{rating}%</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Tree cover</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{treeCover} ha</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Total size</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{totalSize} ha</div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: "2vw", marginTop: "0vh"}}>
                    <Image src="/land.png" width={350} height={200} />
                </div>
                <div style={{marginLeft: "2vw", display: "flex", flexDirection: "column"}}> 
                    <Image style={{display: "flex", marginTop: "0vh"}} src="/circlegraph.png" height={200} width={250} />
                    <Image style={{display: "flex", marginTop: "0vh"}} src="/circlegraph_description.png" height={50} width={50} />
                </div>
            </div>
            <div style={{marginBottom: "2vh", fontWeight: "bold"}}>Parcels owned</div>
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
                    <Button style={{marginLeft: "25vw"}} variant="contained">View More</Button>
                </div>
            </div>

        </div>

    )
}