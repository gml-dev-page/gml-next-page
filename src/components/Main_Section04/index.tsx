import React from 'react'
import styles from "./Section04.module.css";
import bgSrc from "public/images/officeImg2.jpg";
import Link from 'next/link';


export default function Section04() {
  return (
    <>
        <div className={styles.wrap} style={{ backgroundImage : `url(${bgSrc.src})` }}>
                
                <div className={styles.inner} data-aos="fade-up">
                    <div className={styles.titleWrap}>
                        <h1>함께 이뤄내는 이커머스<br/>
                            <strong>우리는 GML 입니다.</strong>
                        </h1>
                    </div>
                    <div className={styles.desWrap}>
                        <span>
                            &quot;효과적&quot;인 일이라고 말하는 곳은 많습니다.<br/>
                            GML은 유능한 구성원들과 함께 보다 &quot;효율적&quot;인 일을 해냅니다.<br/>
                            부서별 협업과 소통으로 합리적인 개선점을 함께 찾으며,<br/>
                            실패에 대한 두려움까지 소통하며 성장해 나가고 있습니다.
                        </span>
                    </div>

                    <Link  href="/hire" className={"button"} style={{float:"right"}}>함께 하기</Link>
                    
                </div>    
        </div>
    </>
  )
}
