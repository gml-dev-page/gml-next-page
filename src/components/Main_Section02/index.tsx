import React, { useEffect } from 'react'
import styles from "./Section02.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Section02() {
    useEffect(() => {
        AOS.init({
			duration: 1200,
            });
      })

  return (
    <>
        <div className={styles.wrap} data-aos="fade-up">
            <div className={styles.conWrap}>
                <div className={styles.conFlex}>
                    <div className={styles.conTitle}>
                        <h1>고객의 니즈를 연구하고 <br/>
                            함께 성장하는 이커머스
                        </h1>
                    </div>

                    <div className={styles.conDes}>
                        <p>
                        /  GML <br/><br/>
                        서비스와 제품을 제공하여 &quot;고객&quot;의 일상에 가치를 만듭니다.<br/>
                        모든 서비스에 불편함을 없애고자 노력하며 결과물에 끝없이 개선점을 찾아내 
                        새로운 고객의 니즈를 발견하기 위해 노력합니다. 고객의 니즈는 항상 변합니다.
                        다양합니다. 까다롭습니다. 그 과정에 GML이 함께 하겠습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
