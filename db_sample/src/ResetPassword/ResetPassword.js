import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import "./ResetPassword.css"
import Axios from "axios";

const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState();
    const [reEnter, setReenter] = useState();
    const IDForUpdate = useSelector((state) => state.counter.idUpdate );
console.log(IDForUpdate,'IDForUpdate');
    const submitButton = () => {
        if (newPassword) {
            if (reEnter) {
                if (newPassword == reEnter) {
                    Axios.patch("http://localhost:3001/api/update", { password: newPassword, id: IDForUpdate }).then(()=>{
                        alert('succesfully Changed your Password');
                    }).catch((err)=>{
                        alert("something went wrong",err);
                    })
                } else {
                    alert('newPassword and reenter password should be same')
                }
            } else {
                alert("can you please Renter your New Password")
            }
        } else {
            alert("enter NewPassword");
        }
    }

    return (
        <div className="resetBase">
            <div className="ResetView">
                <div className="ResetYourPassword">
                    <section>
                        <h1 className="headerTag">Reset Your Password</h1>
                    </section>
                </div>
                <div>
                    <div className="resetPasswordInputdiv">
                        <section className="resetPasswordInputOne">
                            <input placeholder="NewPassword" className="NewPasswordResetInput" onChange={(newpassword) => {
                                setNewPassword(newpassword.target.value)
                            }} />
                        </section>
                        <section className="resetPasswordInputOne">
                            <input placeholder="Re-Enter NewPassword" className="ReEnterNewPasswordResetInput" onChange={(reenter) => {
                                setReenter(reenter.target.value)
                            }} />
                        </section>
                    </div>
                </div>
                <div className="buttonDiv">
                    <button title="Submit" value={'Submit'} onClick={submitButton}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;