/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react';
import styles from "./Section03.module.css";
import useScrollCountUp  from '@/hooks/useCountUp';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section03({}: any) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const count1 = useScrollCountUp(10);
  const count2 = useScrollCountUp(58);
  const count3 = useScrollCountUp(4);




  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div>
        <div className={`${styles.titleWrap} countTitle`}>
          <p>No.1 E-Commerce</p>
          <h1>GML&apos;s 2022</h1>
        </div>

        <div className={styles.rowStateWrap}>
          <div className={styles.countNumWrap}>
            <div className={styles.flexBox}>
              <div className={styles.flexItem}>
                <div className={styles.flexItem_num} {...count1}></div>
                <div className={styles.flexItem_num}>만개</div>
                <div className={styles.flexItem_name}>누적 주문 수</div>
                <div className={styles.flexItem_des}>
                  자체 브랜드 운영과 모든 고객에게<br/>전문적인 이커머스 서비스를 제공합니다.
                </div>
              </div>

              <div className={styles.flexItem}>
                <div className={styles.flexItem_num} {...count2}></div>
                <div className={styles.flexItem_num}>만개</div>
                <div className={styles.flexItem_name}>누적 리뷰 수</div>
                <div className={styles.flexItem_des}>
                  매일매일 새로운 리뷰로<br/> 수십만명의 고객에게 보여지고 있습니다.
                </div>
              </div>

              <div className={styles.flexItem}>
            
                <div className={styles.flexItem_num} {...count3}></div>
                <div className={styles.flexItem_num}>배~</div>
                <div className={styles.flexItem_name}>구매전환율 상승</div>
                <div className={styles.flexItem_des}>
                  매출 상승에 대한 끝 없는 연구로<br/>전환율을 상승시키고 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
