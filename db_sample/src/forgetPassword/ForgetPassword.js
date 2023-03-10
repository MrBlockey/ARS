import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IDForUpdateAction } from "../store/reducer/cartReducer";
import { incrementByAmount } from "../store/reducer/cartReducer";
import './ForgetPassword.css'

const ForgetPassword = () => {

    const [GetData, setGetdata] = useState([]);
    const [email, setemail] = useState('');
    const navigate = useNavigate();
    const getDta = () => {
        Axios.get('http://localhost:3001/api/get').then((i) => {
            // alert('succesfully received data');
            setGetdata(i.data);
        }).catch(() => {
            // alert('while reciving data got error');
        })
    }

    useEffect(() => {
        getDta();
    }, [])
    const dispatch = useDispatch();

    const submitForgetPassword = () => {
        let num = 0;
        let id = 0;
        GetData.map((item) => {
            if (item.phoneNumber == email) {
                num++;
                id = item.id;
            }
        })
        
        if (num >= 1) {
            navigate("/ForgetPassword/ResetPassword");
            dispatch(IDForUpdateAction(id));
            dispatch(incrementByAmount(50))
        } else {
            alert('failed')
        }
    }

    return (
        <div id="forgetPassDivbase">
            <div id="forgetPassDivbase1">
                <div className="forgetPassDivheader">
                    <section id="forgetPassSectionheader">
                        <h2 id="FindYourAccount">Find Your Account</h2>
                    </section>
                </div>
                <div className="pleaseEnter">
                    Please enter your email address or mobile number to search for your account.
                </div>
                <div>
                    <section>
                        <input type={'text'} className="inputBoxForForgetpass" placeholder="Email address or mobile number" onChange={(i) => {
                            setemail(i.target.value);
                        }} />
                    </section>
                </div>
                <div className="buttonsDivForForgetPass">
                    <section>
                        <button onClick={() => window.open('/')} className="buttonOne">
                            Cancel
                        </button>
                    </section>
                    <section>
                        <button className="buttonTwo" onClick={submitForgetPassword}>
                            Submit
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;