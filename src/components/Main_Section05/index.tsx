import React from 'react'
import styles from "./Section05.module.css";
import logoSrc from "public/images/selectfitLogo.png";
import thumbSrc from "public/images/selectfitThumb.jpg";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';



export default function Section05() {
  return (
   <>
    <div className={styles.wrap}>
        <Fade duration={1000} direction={"right"} style={{position:"relative",zIndex:9}}>
            <div className={styles.inner}>
                <div className={styles.flexBox}>
                    <div className={styles.titleWrap}>
                        <Image src={logoSrc} alt="selectfit"/>
                        <h1>건강의 모든 것을 선택합니다.</h1>
                        <div className={styles.desWrap}>
                            <span>
                                세계 곳곳의 청정자연에서 고객에게 적합한<br/>
                                에너지를 찾아 제공하기 위한 자연주의 건강 브랜드 입니다.
                            </span>
                        </div>

                        <Link href="https://selectfitmall.com/"  target="_blank" rel="noreferrer"  className={styles.button}>바로 가기</Link>
                    </div>
                    <div className={styles.conWrap}>
                        <Image src={thumbSrc} alt="selectfit"/>
                    </div>
                </div>

            </div>
        </Fade>

      
    </div>
   </>
  )
}
