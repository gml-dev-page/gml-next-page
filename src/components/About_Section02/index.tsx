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
    <div className={styles.wrap}>
        <div className={styles.inner}>
            <div className={styles.titleWrap}>
                <span>GML 12 Traits</span>
                <h1>GML에서<br/>
                    일 잘하는 사람이 되기 위한<br/>
                    12가지 원칙
                </h1>
            </div>

            <div className={styles.conWrap}>
                <img src='/images/officeImg4.jpg'/>
                <ul>
                    <TraitsList/>
                </ul>
            </div>
        </div>
    </div> 
    </>
  )
}

function TraitsList(){
    let traitArr = [
        '책임은 실행한 사람이 아닌 결정한 사람이 진다.',
        '실행이 완벽보다 낫다.',
        '실수가 반복된다면 그것은 프로세스의 문제다.',
        '자동차는 엔진만으로 굴러가지 않는다.',
        '큰 그림이 엉망이면 작은 것들은 중요하지 않다.',
        '찌그러진 동그라미도 동그라미다.',
        '한계란 이룬 것이 한 개도 없는 사람의 변명이다.',
        '비관은 기분이지만, 낙관은 의지다.',
        '어제와 똑같이 살면서 다른 미래를 기대하지 마라.',
        '칭찬은 모자람보다 과함이 낫다.',
        '자유와 책임은 한 몸이다.',
        '이끌거나 따르거나 떠나거나'
    ]

    const list = traitArr.map((ele,index) => {
        return(
            <li key={`trait_${index}`} data-aos="fade-up">
                <span className={styles.num}>{index+1}.</span>
                <p>{ele}</p>
            </li>
        )
    })    
    
    return(
        <>
         {list}
        </>
    )
}
