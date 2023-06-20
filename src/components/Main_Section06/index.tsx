import React, { ReactNode } from 'react'
import styles from "./Section06.module.css";



export default function Section06() {
  return (
    <>
        <div className={styles.wrap}>
            <div className={styles.loopInnerWrap}>
                <LoopSlide id={'slide1'}></LoopSlide>
                <LoopSlide id={'slide2'}></LoopSlide>
                
            </div>
        </div>
    </>
  )
}


function LoopSlide(props: {id : string}){
    let conArr : string[] = ['누구보다 구성원의 발전을 생각하는','재빠르게 문제점을 찾아내는','협업과 소통을 중시 하며 발전하는']
    let liList : any = conArr.map((row,index) => {
    return(
        <li key={index}>
            <div>
                <span className={styles.circle}></span>
                <span>{row}</span>
            </div>
        </li>
    )
   
    });
    
    return (
        <div className={styles.loopInner} id={props.id == 'slide1' ? styles.slide1 : styles.slide2}>
            <ul>
                {liList}
                {liList}
            </ul>
        </div>
    )

}
