import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';

export const ParcelView: FC = () => {
    const [parcelID, setP] = useState(0);
    const [parcels, setParcels] = useState(0);
    const [parcelData, setParcelData] = useState(
        [1, "0xblabla",99,1.69,"chart", 42.69, 62]
                                                )
    const [owner, setOwner] = useState("0x8vqeADS5Lb");
    const [rating, setRating] = useState(77);
    const [rating2, setRating2] = useState(77);
    const [treeCover, setTreeCover] = useState(308);
    const [lastPrice, setLastPrice] = useState("55,504");
    const [production, setProduction] = useState(15.91);

    const [coordinates, setCoordinates] = useState("3.26785s 59.91231w");
    const [region, setRegion] = useState("Amazon");
    const [biome, setBiome] = useState("54.29.1.4");
    const [totalSize, setTotalSize] = useState(400);

    const [co2eAvoided, setco2eAvoided] = useState("2,613.823");
    const [name, setName] = useState("Amazon Watch NGO");






    return (
        <div className={styles.mainAreaLeft}>
            <div style={{display: "flex", flexDirection: "row", marginTop: "5vh",marginBottom: "5vh"}}>
                <div style={{fontWeight: "bold"}}>Parcel ID {parcelData[0]}</div>
                <div style={{width: "30vw"}}> </div>
                <Button style={{marginRight: "1vw"}} variant="contained">+ Make offer</Button>
                <Button variant="contained">- Report inactive steward</Button>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Image src="/parcel.png" height={"256"} width={"256"} />
                
                <div className='infoBoxes0' style={{display: "flex", flexDirection: "column", marginBottom: "6vh", width: "13vw", height: "20vh", borderRadius: "3vh", marginLeft: "3vw", backgroundColor: "cyan"}}>
                    <div style={{fontWeight: "bold", marginLeft: "1vw"}}>Market data</div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Owner</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{String(owner).slice(0,4)}...{String(owner).slice(String(owner).length-4)}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Last price</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>${lastPrice}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{rating}%</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{rating2}%</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Tree cover</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{treeCover} ha</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Production</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{production} COT</div>
                        </div>
                    </div>

                </div>

                <div className='infoBoxes' style={{display: "flex", flexDirection: "column", marginBottom: "6vh",  marginLeft: "3vw", width: "14vw", height: "20vh", borderRadius: "3vh", backgroundColor: "cyan"}}>
                    <div style={{fontWeight: "bold", marginLeft: "1vw"}}>Metadata</div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "10vw"}}>
                                <div style={{fontSize: "15px", color: "grey",}}>Coordinates</div>
                                <div style={{fontSize: "15px", fontWeight: "bold", flex:1}}>{coordinates}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Region</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{region}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Biome</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{biome}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Total Size</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{totalSize} ha</div>
                        </div>
                    </div>

                </div>
            </div>

            <div style={{display: "flex", flexDirection: "row"}}> 
                <div style={{display: "flex", flexDirection: "column", width: "36vw", height: "44vh"}}> 
                    <div style={{marginTop: "2vh", fontWeight:'bold', fontSize:20}}>Ecological Performance</div>
                    {/* <div style={{marginTop: "1vh", marginLeft: "2vw", fontSize:10}}>Total CO2e avoided</div>
                    <div style={{marginTop: "1vh", marginLeft: "2vw", fontWeight:'bold', fontSize:15}}>{co2eAvoided} tonnes</div> */}
                    <div style={{marginTop: "2vh", marginLeft: "2vw", display: "flex", flexDirection: "column", width: "34vw", height: "34vh"}}>
                        <Image style={{marginTop: "2vh"}} src="/parcel_graph.png" height={"407"} width={"546"} />
                    </div>

                </div>
                <div style={{display: "flex", flexDirection: "column", width: "16vw", height: "44vh", marginLeft: "4vw"}}> 
                    <div style={{marginTop: "2vh", fontWeight:'bold', fontSize:20}}>Steward</div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{marginLeft: "0vw", marginTop: "1vh", display: "flex", flexDirection: "column", fontSize:10}}>
                            <div style={{fontSize:16}}>Name</div>
                            <div style={{fontWeight:'bold', fontSize:15}}>{name}</div>
                        </div>
                        <div style={{marginLeft: "0vw", marginTop: "1vh", display: "flex", flexDirection: "column", fontSize:10}}>
                            <div style={{fontSize:16}}>Address</div>
                            <div style={{fontWeight:'bold', fontSize:15}}>{String(owner).slice(0,4)}...{String(owner).slice(String(owner).length-4)}</div>
                        </div>
                    </div>
                    <div style={{marginTop: "2vh", display: "flex", flexDirection: "column", width: "16vw", height: "34vh"}}>
                        <Image style={{marginTop: "2vh"}} src="/steward.png" height={"200"} width={"160"} />
                    </div>

                </div>
            </div>

        </div>

    )
}