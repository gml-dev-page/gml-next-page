import React, { useEffect } from 'react'
import styles from "./MainVideo.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainVideo() {
    useEffect(() => {
        AOS.init({
			duration: 1200,
            });
      })

  return (
    <>
    <div className={styles.wrap}>
        <div className={styles.videoWrap}>
            <video className={styles.video} src="/videos/video3.mov" autoPlay loop muted playsInline></video>
            <div className={styles.titleWrap} data-aos="fade-up">
                <h1>
                    우리는 결과물에 100%<br/>
                    만족을 추구하지 않습니다.
                </h1>
                <span>
                    GML은 완성된 결과물에서<br/>
                    새로운 개선점을 찾고 연구하고 해결합니다.
                </span>
            </div>
        </div>

    </div>
    </>
  )
}


