import React from "react";
import "./Footer.scss";
import { useRecoilState } from "recoil";
import { $countries } from "../../recoilstore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faPhoenixFramework, faSquareYoutube, faYoutube, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faBuildingColumns, faHeadphones, faMailBulk, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
   const { t } = useTranslation("global");
   const  userLang = localStorage.getItem("lang");

  const [countries] = useRecoilState($countries);
  return (
    <div className="col-12 foter1 " dir={userLang === 'ar' ? 'rtl' : 'ltr'}>
      <hr />
      <div className="footer">
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.COUNTRY-LOCATION / LOCAL OFFICE")}</h5>
            <li>
              <select id="fselect">
                <option value="">{t("text.Choose Country")}</option>
                {countries.map((country) => (
                  <option key={country.unicode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <a id="flink" href="/MakeUp">
              <FontAwesomeIcon icon={faPhone}/>
              <span>+2022540974</span>
              </a>
            </li>
            <li>
              <a id="flink" href="/SkinCare">
              <FontAwesomeIcon icon={faMailBulk}/>
              <span>eg177-AA.egypt@AA.com </span>
              </a>
              <a id="flink" href="/SkinCare">
              <FontAwesomeIcon icon={faBuildingColumns}/>
              <span>{t("text.Office Details")}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.Doing business togethe")}</h5>
            <li>
              <a id="flink" href="/">
              {t("text.Solutions /")}
              </a>
              <a id="flink" href="/">
             {t('text. Local information/')}
              </a>
              <a id="flink" href="/">
             {t("text. E-Buisness")}
              </a>
            </li>
            <li style={{paddingLeft:"25px"}}>
              <a id="flink" href="/MakeUp">
              {t("text.Sustainability /")}
              </a>
              <a id="flink" href="/MakeUp">
               MY MA
              </a>
            </li>
            <li style={{visibility:"hidden"}}>
              <a id="flink" href="/SkinCare">
                {" "}
                SkinCare
              </a>
            </li>
          </ul>
        </div>
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.Get to know us")}</h5>
            <li>
              <a id="flink" href="/">
               {t("text.  AM Group /")}
              </a>
              <a id="flink" href="/">
              {t("text.News Room /")}
              </a>
              <a id="flink" href="/">
              {t("text.Events /")}
              </a>
              <a id="flink" href="/">
              {t("text.Blog /")}
              </a>
            </li>
            <li>
              <a id="flink" href="/MakeUp">
              {t("text.Careers/")}
              </a>
              <a id="flink" href="/MakeUp">
              {t("text.ContactUs/")}
              </a>
              <a id="flink" href="/MakeUp">
              {t("text. Preference Center")}
              </a>
            </li>
            <li className="d-flex">
              <a id="flink" href="/SkinCare">
              <div id="fiacon"  >
             <FontAwesomeIcon  icon={faFacebookF} />
              </div>
              </a>
              <a id="flink" href="/SkinCare">
              <div  id="fiacon">
               <FontAwesomeIcon icon={faX} />
              </div>
              </a>
              <a id="flink" href="/SkinCare">
              <div  id="fiacon">
               <FontAwesomeIcon  icon={faInstagram} />
              </div>
              </a>
              <a id="flink" href="/SkinCare">
              <div  id="fiacon">
               <FontAwesomeIcon  icon={faLinkedinIn} />
              </div>
              </a>
              <a id="flink" href="/SkinCare">
              <div  id="fiacon">
               <FontAwesomeIcon  icon={faYoutube}/>
              </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// import "./Footer.scss";
// import { Link } from "react-router-dom";
// import logo from '../../assets/logo.png';

// import {
//   FaEnvelope,
//   FaTwitter,
//   FaYoutube,
//   FaLinkedin,
//   FaFacebook,
// } from "react-icons/fa";
// export default function Footer() {
//   return (
//     <div>
//       <div className="col-12 ">
//         <div className=" footer  ">
//           <div className=" div1 container d-flex ">
//             <div className="LOGO">
//            <Link className="navbar-brand" to="/">
//             <img src={logo} alt="logo"  className="LOGO" />
//           </Link>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//             </div>
//             <div>
//               <ul>
//                 <li> <h4> Accounts</h4><a href=""> My Account</a></li>
//                 <li><a href="">Check Order</a> </li>
//               </ul>
//             </div>

//             <div>
//               <ul>
//                 <h4>About Us</h4>
//                 <li><a href="/"> Home </a></li>
//                 <li><a href="/MakeUp"> MakeUp</a></li>
//                 <li><a href="/SkinCare"> SkinCare</a></li>
//               </ul>
//             </div>
//             <div>
//               <ul>
//                 <h4> Contact Us</h4>
//                 <li><FaEnvelope /> Email</li>
//                 <li> <FaTwitter /> Twitter</li>
//                 <li> <FaYoutube /> Youtube</li>
//                  <li><FaLinkedin /> Linkedin</li>
//                 <li> <FaFacebook /> Facebook </li>
//               </ul>
//             </div>
//             <div>
//               <ul>
//                 <h4>LEGAL</h4>
//                 <li>terms andconditions of sale</li>
//                 <li>Privacy Notice</li>
//                 <li>Do Not sell My Personal information</li>
//                 <li> Cookie Privacy </li>
//                 <li> Terms of Use </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
