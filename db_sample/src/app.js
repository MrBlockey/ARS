import SignUp from './signUp/signUp';
import SignIn from './signIn/signIn';
// import Layout from './Layout';
import ForgetPassword from './forgetPassword/ForgetPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import Home from './Home/home';
import { BrowserRouter, Routes, Route, /*HashRouter*/ } from "react-router-dom";
// import {initializeApp} from "firebase/app";
// import {Auth} from "firebase/auth"

// const firebaseConfig = {
//     apiKey: "AIzaSyA4pihdPVfDMfrzu_snltETwNOD_DFSBUk",
//     authDomain: "ars-digital-marketing.firebaseapp.com",
//     projectId: "ars-digital-marketing",
//     storageBucket: "ars-digital-marketing.appspot.com",
//     messagingSenderId: "331583679575",
//     appId: "1:331583679575:web:cf5143286b2ae9541e8712",
//     measurementId: "G-F19WHX9E88"
// };

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index path="/" element={<SignIn />} />
                    <Route path='/Home' element={<Home />} />
                </Route>
                <Route path="SignUp" element={<SignUp />} />
                <Route path='/ForgetPassword'>
                    <Route index element={<ForgetPassword />} />
                    <Route path=':ResetPassword' element={<ResetPassword />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

// initializeApp(firebaseConfig);
export default App;