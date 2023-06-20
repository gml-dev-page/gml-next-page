import React from 'react'
import styles from "./Footer.module.css";
import logoSrc from "public/images/gmlLogo.png";
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <div className={styles.wrap}>
        <div className={styles.inner}>
            <span>ⓒ GML Inc. All rights reserved.</span>
            <div className={styles.line}></div>
            <span>coo@graemlab.com</span>
            <div className={styles.line}></div>
            <span>부산광역시 해운대구 센텀중앙로 48, 에이스하이테크21 711호</span>


            <div  className={styles.logo}><Image src={logoSrc} alt="logo" width={90}/></div>
        </div>
    </div>
    </>
  )
}
