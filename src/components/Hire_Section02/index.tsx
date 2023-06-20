import Image from 'next/image';
import React, { useEffect } from 'react'
import styles from "./Section02.module.css";


export default function Section02() {

  return (
    <>
        <div className={styles.wrap}>
            <div className={styles.inner}>
                <div className={styles.titleWrap}>
                    <span>Work & Life Balance of GML</span>
                    <strong>GML 복지제도</strong>
                </div>
               

                <ul className={styles.benefitWrap}>
                
                   <AddList/>
                
                </ul>
              
            </div>
        </div>
    </>
  )
}

function AddList(){
    let list : any[] = [
        {'title':'수평적 문화','des':'직급 체계가 아닌\n영어 이름으로 소통해요.'},
        {'title':'야근없는 회사','des':'연장근무는 NO\n18시 칼퇴근 하세요!'},
        {'title':'넉넉한 점심시간','des':'1시간 30분 점심시간\n충분한 휴식을 취하세요.'},
        {'title':'오전 근무','des':'마지막 주 금요일은 전 직원\n오전 근무만 하고 칼퇴근!'},
        {'title':'연차 사용','des':'자유롭게 연차 사용이 가능해요.'},
        {'title':'휴가 5일','des':'주말까지 총 9일을 쉴 수 있어요.'},
        {'title':'생일 반차 지원','des':'생일자는 당일\n오전 근무만 하고 퇴근하세요!'},
        {'title':'간식 무제한','des':'다양한 간식 및 음료\n무제한 제공해요.'},
        {'title':'교육비 지원','des':'업무관련 강의/세미나/도서구입 지원'},
    ]

    let listMap = list.map((ele,index) => {
        return(
        
                <li key={`li_${index}`} data-aos="fade-up">
                    <Image className={styles.icon} src={`/images/hire_icons${index+1}.png`} alt="icon" width={100} height={100}/>
                    <strong>{ele.title}</strong>
                    <p>
                        {
                            ele.des.split('\n').map( (line : any, idx:number) => {
                                return (<span  key={`text_${idx}`}>{line}<br/></span>)
                            })
                        }
                    </p>
                </li>

        )
    })

    return(
        <>
        {listMap}
        </>
    )
}