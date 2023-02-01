import { requirePropFactory } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import './signIn.css'


const SignIn = () => {
    const [GetData, setGetdata] = useState([]);
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const getDta = () => {
        Axios.get('http://localhost:3001/api/get').then((i) => {
            // alert('succesfully received data');
            setGetdata(i.data);
            console.log(i.data);
        }).catch(() => {
            // alert('while reciving data got error');
        })
    }

    useEffect(() => {
        getDta();
    }, [])

    const submitEvalution = () => {
        let userLogin = 0;
        GetData.map((item, index) => {
            if (item.phoneNumber == email && ++index == item.id) {
                if (item.NewPassWord == password) {
                    userLogin = userLogin + 1;
                }
            }
        })
        if (userLogin >= 1) {
            if(window.confirm('Really go to another page?')) {
                window.location.replace('/Home');
            }
        } else {
            alert("username or Password Wrong");
        }
    }
  
    return (
        <div className="signinDiv">
            <div className="divSignIN" id="divSignIN">
                <div className="ARSImage">
                    <img src={require("./Ajay.png")} width={'150px'} height={'90px'} className={"ARSImage1"} />
                </div>
                <div className="divLoginText" id="divLoginText">
                    <section className="sectionSignin" id="sectionSignin">
                        <h1 className="logintext">Log in to ARS Fashion</h1>
                    </section>
                </div>
                <section className="divSection1" id="divSection1">
                    <input className="signInInput" id="signInInput" onChange={(email) => {
                        setemail(email.target.value)
                    }} placeholder='Email address or phone number' />
                </section>
                <section className="divSection1" id="divSection2">
                    <input className="signInInput" id="signInInput" onChange={(password) => {
                        setPassword(password.target.value)
                    }} placeholder='Password' />
                </section>
                <div className="sectionButton">
                    <button value={'submit'} onClick={submitEvalution} className='signinSubmitButton'>submit</button>
                </div>
                <div className="divSectionSignUp">
                    <a href="/SignUp" className="signUp" target={'_self'}>
                        signUp
                    </a>
                    <a href="/ForgetPassword" className="ForgetPassword" target={'_self'}>
                        Forgotten account?
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SignIn;