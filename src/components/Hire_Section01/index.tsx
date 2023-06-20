import React from 'react';
import secSrc from "public/images/officeImg3.jpg";
import styles from "./Section01.module.css";



export default function Section01() {
  return (
    <>
        <div className={styles.inner}>
          <div className={styles.line}>
            
          </div>
            <strong>Let&apos;s Grow <br/> Together </strong>
            <div className={styles.des}>
                <p>
                /  GML 
                <br/><br/>
                GML은 일상 속에서 마주하는 불편함과 니즈에 대해서 연구합니다.
                <br/>
                이에 대한 해결책을 제안하여 더 나은 삶으로 이끄는 것을 목표로 합니다.
                우리가 추구하는 방향에 함께 하실 인재를 찾고 있습니다.
                </p>
            </div>
        </div>
    </>
  )
}
