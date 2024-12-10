import React, { useContext } from "react";
import styles from "../../assets/css/Cards.module.css";
import ContextApi from "../ContextApi";
import locations from "../../assets/data/locations";
const LocationCards = (props) => {
    const lang = useContext(ContextApi);
    return (

        <div className={styles.cards} >
            {
                locations.map((location) => (
                    <div className={styles.card} style={{ padding: 0 }}>
                        <div style={{ height: "100%", width: "100%" }}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    backgroundColor: '#03183f',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontSize: "2rem"
                                }}
                            >
                                {location.location_AR.split(" ")[1]}
                            </div>
                            <div style={{
                                padding: "10px", textAlign: "right", padding: "10px",
                                textAlignLast: "right",
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px"
                            }}>
                                <div style={{ fontSize: "1.3rem" }}>
                                    {location.location_AR}
                                </div>
                                <div style={{ fontSize: "1.1rem", fontWeight: "lighter" }}>
                                    {location.location_description}
                                </div>
                                <div style={{
                                    fontSize: "1.1rem", fontWeight: "normal", display: "flex",
                                    flexDirection: "column",
                                    gap: "10px"
                                }}>
                                    <div style={{borderTop: "1px solid black" , display: "flex" , justifyContent: "center"}}>
                                        <a href={`tel:${location.branch_phone}`} target="_blank">{location.branch_phone}</a>
                                    </div>
                                    <div style={{borderTop: "1px solid black" , display: "flex" , justifyContent: "center"}}>
                                        <a href={`mailto:${location.branch_email}`} target="_blank"> البريد الاكتروني</a>
                                    </div>
                                    <div style={{borderTop: "1px solid black" , display: "flex" , justifyContent: "center"}}>
                                        <a href={location.google_gis_location} target="_blank">خرائط كوكل</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                ))
            }
        </div >
    );
};

export default LocationCards;
