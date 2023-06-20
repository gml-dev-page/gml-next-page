import React, { useEffect } from 'react'
import styles from "./Section01.module.css";
import secSrc from "public/images/officeImg.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Section01() {
    useEffect(() => {
        AOS.init({
			duration: 1200,
            });
      })

  return (
    <>
    <div className={styles.Wrap} data-aos="fade-up">
        <div className={styles.conWrap}>
            <div className={styles.titleWrap} >
                <span>
                    <h1 className={styles.title}>
                        효율적인 이커머스 컨설팅<br/> 지금 GML에서 가능합니다.
                    </h1>
                </span>

                <p className={styles.des}>
                   전문적인 구성원들이 함께 기획하고 고객이 상상하는 이커머스를 직접 실행합니다.<br/>
                   우리 사업을 운영하는데 필요한 마케팅, 운영관리, 매출관리 등에 지치셨나요?!<br/>
                   디자인, 마케팅, 바이럴, 개발부 등 전문적인 인재들로 구성된 GML에서 함께 해결해드리겠습니다.
                </p>
            </div>

            <div className={styles.imgWrap}>
                <div  className={styles.imgFlex}>
                    <div  className={styles.imgBox}>
                        {/* <div className={styles.imgCon} style={{ backgroundImage : `url(${secSrc.src})` }} ></div> */}
                        <div className={styles.imgCon}><img src={secSrc.src} alt={"mainimg"}/></div>

                    </div>
                </div>
            </div>
           
        </div> 
    </div>
</>
  )
}


