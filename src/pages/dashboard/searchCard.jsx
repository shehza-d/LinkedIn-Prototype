import styles from "../../styles/dashboard/searchCard.module.css";
import star from "../../assets/dashboard/Star.svg";
import { useNavigate } from "react-router-dom";

export default function SearchCard(props) {
  const { heading, text, img, logo, phoneNumber, address, setCounter } = props;
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${img}` }}
      onClick={() => navigate("/company-details")}
    >
      <div className={styles.content}>
        <div className={styles.cardHeader}>
          <img src={logo} alt="" />
          <div>
            <p>{heading}</p>
            <p>electronics</p>
          </div>
          <div>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <p>{text}</p>
        <div className={styles.cardFooter}>
          <span>{phoneNumber}</span>
          <span style={{ color: "#1A5CB0", paddingLeft: "7px" }}>
            Address: {address}
          </span>
        </div>
      </div>
      {/* <div className={styles.imgDiv}>
        <img src={img} className={styles.bgImg} alt="" />
      </div> */}
    </div>
  );
}
