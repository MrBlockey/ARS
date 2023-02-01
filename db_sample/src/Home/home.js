import { requirePropFactory } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css"

const Home = () => {
    const [data, setdata] = useState('');
    const getDetails = () => {
        axios.get('http://localhost:3001/api/get').then((item) => {
            setdata(item.data);
        }).catch((error) => {
            alert('retry Again')
        })
    }

    useEffect(() => {
        getDetails();
    }, [])
    return (
        <div className="HomePage">
            <div className="HeadesPage">
                <div className="HeadesPage2">
                    <ul className="listStyleType">
                        <li>
                            Home
                        </li>
                        <li>
                            profile
                        </li>
                        <li>
                            about
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Home;