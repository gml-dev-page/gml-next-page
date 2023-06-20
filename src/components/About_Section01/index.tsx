import React from 'react'
import styles from "./Section01.module.css";
import cardData from "public/data/cardData.json";

export default function Section01() {
  return (
    <>
        <div className={styles.wrap}>
            <div className={styles.videoWrap}>
                <video className={styles.video} src="/videos/video1.mp4" autoPlay loop muted playsInline></video>
                <div className={styles.titleWrap}>
                    <h1>
                        GML, 우리의 문화는<br/>
                        우리가 나아가야 할 방향입니다
                    </h1>
                    <span>
                        GML만의 일하는 방식으로<br/>
                        우리의 비전을 달성하고 존재 이유를 설명합니다.
                    </span>
                </div>
            </div>

            <div className={styles.cardWrap}>
                <div className={styles.cardInner}>
                    <ul className={styles.cardBox}>
                        <CardList />
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

function CardList(){
    const card = cardData.cardList.map((data : any, index : number) => {
        return(
            <li className={styles.card} key={`card_${index}`}>
                <span className={styles.des} >
                {data.des}
                </span>
                <div className={styles.nameWrap}>
                    <div className={styles.nameBox}>
                        <span className={styles.name}>
                            <strong>{data.name}</strong>님
                        </span>
                        <span className={styles.position}>{data.position}</span>
                    </div>
                    <div className={styles.iconBox}>
                        <img src={`/images/${data.cardProfileUrl}.png`} alt='mimo'/>
                    </div>
                </div>
            </li>
        )
    })

    return(
        <>{card}</>
    )
}