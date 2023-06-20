
import Link from "next/link";
import styles from "./Section03.module.css";


export default function Section03() {
  return (
    <>
        <div className={styles.wrap}>
            <div className={styles.inner}>
                <div className={styles.titleWrap} >
                    <h1>GML의 여정에 함께하실 분을 찾습니다.</h1>
                    <p>고객의 일상에 가치를 만드는 곳, GML <br/>
                        새로운 이커머스의 기준을 만드실 여러분을 기다리고 있습니다.
                    </p>
                </div>
                <Link href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=dmJuNTc4WUFHQ2dvemR3T25EbEhxZz09" target="_blank" rel="noreferrer" className={styles.button}>
                    채용공고 보러가기
                </Link>
            </div>
        </div>  
    </>
  )
}
