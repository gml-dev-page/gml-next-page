import React from 'react'
import styles from "../styles/MainPage.module.css";

import Section01 from '@/components/Main_Section01';
import Section02 from '@/components/Main_Section02';
import Section03 from '@/components/Main_Section03';
import Section04 from '@/components/Main_Section04';
import Section05 from '@/components/Main_Section05';
import Section06 from '@/components/Main_Section06';
import MainVideo from '@/components/Main_Video';





export default function MainPage() {
  return (
    <>
      <MainVideo/>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section05/>
      <Section06/>
 
    </>

    
  )
}
