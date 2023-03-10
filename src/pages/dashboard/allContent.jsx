import styles from "../../styles/dashboard/allContent.module.css";
// import SearchSuggestion from "./searchSuggestionBox";
import SearchCard from "./searchCard";
// import earth from "../../assets/dashboard/earth.png";
// import huawei from "../../assets/dashboard/huawei.png";
// import mail from "../../assets/dashboard/mail.png";
// import samsung from "../../assets/dashboard/samsung.png";
// import earth from '../../assets/dashboard'
import CompanySearchBar from "../../components/CompanySearchBar";
import ExecutiveSearchBar from "../../components/ExecutiveSearchBar";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";

// const dataObj = [
//   {
//     img: earth,
//     logo: huawei,
//     heading: "Huawei",
//     text: "Huawei Technologies Co., Ltd. is a Chinese multinational technology corporation headquartered in Shenzhen, Guangdong, China. It designs, develops, produces and sells telecommunications equipment, consumer electronics and various smart devices.",
//     number: "03994033044",
//     address: "Huawei Base, Bantian,...",
//   },
//   {
//     img: mail,
//     logo: samsung,
//     heading: "Samsung",
//     text: `Samsung Electronics Co., Ltd. is a South Korean multinational electronics corporation headquartered in Yeongtong-gu, Suwon, South Korea. It is the pinnacle of the Samsung chaebol, accounting for 70% of the group's revenue in 2012`,
//     number: "03994033044",
//     address: "Huawei Base, Bantian,...",
//   },
// ];

export default function AllContent({ setCounter, searchQuery }) {
  const { state } = useContext(GlobalContext);
  const [companyExecutiveState, setCompanyExecutiveState] = useState(true);
  // const [dataArr, setDataArr] = useState([]);
  const [setMatches] = useState();
  // window.matchMedia("(min-width: 768px)").matches
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [setMatches]);
  // let mediaQuery = window.matchMedia('(max-width: 768px)').matches
  // console.log(matches);
  console.log(searchQuery);
  console.log(state?.companySearchQueryData);
  const searchFun = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.details.toLowerCase().includes(searchQuery) ||
        item.address.toLowerCase().includes(searchQuery)
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.cardContainer}>
        {searchFun(state?.companySearchQueryData)?.map((eachData, i) => (
          <SearchCard
            key={eachData.id}
            id={eachData.id}
            // setCounter={setCounter}
            heading={eachData?.name}
            text={eachData?.details}
            img={eachData?.img}
            logo={eachData?.logoURL}
            phoneNumber={eachData?.contactNumber}
            address={eachData?.address}
            // postDate={eachData?.createdOn}
          />
        ))}
        {/* <SearchCard /> */}
        {/* {matches ? <SearchSuggestion /> : null} */}
        {/* to remove */}
        <br />
        <br />
        <p></p>
        <br />
        {/* to remove */}
      </div>
      {companyExecutiveState ? (
        <CompanySearchBar state={setCompanyExecutiveState} />
      ) : (
        <ExecutiveSearchBar state={setCompanyExecutiveState} />
      )}
    </div>
  );
}
