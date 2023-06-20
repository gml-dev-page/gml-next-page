import React, { useEffect } from 'react'
import styles from "./Section03.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Section03() {
    useEffect(() => {
        AOS.init({
			duration: 1200,
            });
      })

  return (
    <>
    <div className={styles.wrap}>
        <div className={styles.inner}>
            <div className={styles.titleWrap}>
                <span>The right people for GML</span>
                <h1>GML의 일하는 방식</h1>
            </div>

            <div className={styles.conWrap}>
                <ul>
                    <RightList/>
                </ul>
            </div>
        </div>
    </div> 
    </>
  )
}

function RightList(){
    let rightArr = [
        '결과물에 100%\n만족하지 않는 사람',
        '부족한 점은 채우고\n배움의 가치를 소중히 하는 사람',
        '실행은 빠르게\n문제점은 더 빠르게 찾는 사람',
        '사소한 소통도\n업무의 기본이라 생각하는 사람',
        '변화를 이끌어내고\n결과물을 만들어 내는 사람',
        '합리적 문제 해결능력과\n새로운 제안방식을 제시하는 사람'
    ]

    const list = rightArr.map((ele,index) => {
        return(
            <li key={`trait_${index}`} data-aos="fade-up">
                <span className={styles.num}>{index+1}.</span>
                <p>
                        {
                            ele.split('\n').map( (line : any, idx:number) => {
                                return (<span  key={`text_${idx}`}>{line}<br/></span>)
                            })
                        }
                    </p>
            </li>
        )
    })    
    
    return(
        <>
         {list}
        </>
    )
}
