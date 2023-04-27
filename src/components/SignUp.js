
import "../style/signUp.css";
import { AiFillCloseCircle } from "react-icons/ai";
import {createUserWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../firebase/firebase.component"
import { useState } from "react";

function SignUp({visibility,onClose}){
    const [signupName, setSignupName] = useState("");
	const [signupEmail, setSignupEmail] = useState("");
	const [signupPassword, setSignupPassword] = useState("");
	// const [signupPhoneNumber, setSignupPhoneNumber] = useState("");



const registerUser=async(e)=>{
    e.preventDefault();
await createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
  console.log(user);
  alert("signed up succesfully")
})
.catch((error) => {
  const errorCode = error.code;
//   const errorMessage = error.message;
  alert(errorCode);
  // ..
});
}

    const signout = async (e)=>{
        e.preventDefault();
        await signOut(auth);
        alert("signed out")
    }

	return (
    <div
        className="modal"
        style={{
            display: visibility
                ? "block"
                : "none",
        }}>
        <div>
        <main className="signUp-model">
            <div className="signUp-card">
				<div className="signUp-header">
                    <h1 className="signup-title">Sign Up</h1>
                    	<button
						className="btn close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
                </div>
                    <form className="signUp-form">
                        <div className="form-content">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" 
                            value={signupName}
                            onChange={(event)=>{
                                setSignupName(event.target.value)
                                }}/>
                            </div>
                            <div className="form-content">
                            <label>E-mail Address</label>
                            <input type="email" placeholder="Enter your email" value={signupEmail}
                            onChange={(event)=>{
                                setSignupEmail(event.target.value)
                                }}/>
                            </div>
                            <div className="form-content">
                            <label>Password</label>
                            <input type="password" value={signupPassword} placeholder="Enter your password"
                            onChange={(event)=>{
                                setSignupPassword(event.target.value)
                                }}
                            />
                            </div>
                            {/* <div className="form-content">
                            <label>Phone Number</label>
                            <input type="password" placeholder="Enter your phone number"
                            onChange={(event)=>{
                                setSignupPhoneNumber(event.target.value)
                                }}
                            />
                            </div> */}
                        <button className="signup-btn" onClick={registerUser}>SIGNUP</button>
                        <button className="signup-btn" onClick={signout}>SIGNOUT</button>

                    </form>
				
            </div>
        </main>
        </div>
    </div>
	);
}

export default SignUp;
