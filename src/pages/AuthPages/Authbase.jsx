import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/AuthBase.module.css";
import bgImg from "../../assets/Rectangle-7126.png";
import Login from "./Login";
import logo1 from '../../assets/logoWhite.svg'
import logoBlue from '../../assets/logoBlue.svg'
export default function AuthBase() {
  return (
    <div className={`${styles.authScreen}`}>
      <ToastContainer />
      <div>
        <img src={logo1} className={styles.logo1} alt="" />
        <p className={styles.heading}>
          Advanced Search-Find your smartest way to the buyer.
        </p>
        <span className={styles.subHeading}>Start your company in minutes</span>
      </div>
      <div className={styles.authSection}>
        <Login />
      </div>
        <img src={logoBlue} className={styles.logo2} alt="" />
    </div>
  );
}