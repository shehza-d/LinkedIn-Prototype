import "./styles/App.css";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./context/context.js";
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import Home from "./pages/other/Home.jsx";
// import Login from "./pages/AuthPages/Login.jsx";
// import Signup from "./pages/AuthPages/Signup.jsx";
import AuthBase from "./pages/AuthPages/Authbase";
import Welcome from "./pages/other/Welcome.jsx";
import BaseSetupBackground from "./pages/BaseSetupPages/BaseSetupBackground";
import Congrats from "./pages/other/Congrats";
import Dashboard from "./pages/dashboard";
// import Signup from "./pages/AuthPages/Signup";
import EmployeeDetail from "./pages/dashboard/EmployeeDetail";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import loaderImg from "./assets/loader.webp";
import CompanyDetails from "./pages/dashboard/companyDetails";
import EmployeeSearch from "./pages/dashboard/EmployeeSearch";

// import { db } from "./firebase.js";
// import {
//   getFirestore,
//   collection, //get reference to a collection
//   addDoc,
//   getDocs, //get all docs
//   getDoc, //get one doc
//   doc, //get reference to a document
//   onSnapshot,
//   query,
//   where,
//   serverTimestamp,
//   orderBy,
//   deleteDoc,
//   updateDoc,
//   limit,
// } from "firebase/firestore";

export default function App() {
  const [isLogin, setIsLogin] = useState(null);
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    try {
      //  signOut(auth);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // https://firebase.google.com/docs/reference/js/firebase.User
          // console.log(user);
          setIsLogin(true);
          // console.log("user is logged in");
          dispatch({
            type: "SET_USER_ID",
            payload: user.uid,
          });
        } else {
          console.log("not logged in");
          setIsLogin(false);
          // User is signed out
          // ...
        }
      });
    } catch (err) {}
  }, []);
  // useEffect(() => {
  //   addDoc(collection(db, "companies"), {
  //     address:
  //     contactNumber:
  //     details:
  //     logoURL
  //     name:
  //     rating:
  //   });
  // }, []);
  return (
    <div className="App">
      {isLogin === true ? (
        <Routes>
          {/* <Route path="auth" element={<AuthBase />} /> */}
          <Route path="welcome" element={<Welcome />} />
          <Route path="setup" element={<BaseSetupBackground />} />
          <Route path="congrats" element={<Congrats />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="employees" element={<EmployeeDetail />} /> */}
          <Route path="employees" element={<EmployeeSearch />} />
          {/* <Screen3  />  */}
          <Route path="company-details" element={<CompanyDetails />} />
          <Route path="/" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : null}
      {isLogin === false ? (
        <Routes>
          <Route path="auth" element={<AuthBase />} />
          <Route path="*" element={<Navigate to="/auth" replace={true} />} />
        </Routes>
      ) : null}
      {isLogin === null ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <img width={300} src={loaderImg} alt="" />
        </div>
      ) : null}
    </div>
  );
}
