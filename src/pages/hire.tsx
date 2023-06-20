import Section01 from '@/components/Hire_Section01'
import React from 'react'
import styled from 'styled-components';
import secSrc from "public/images/officeImg3.jpg";
import Section02 from '@/components/Hire_Section02';
import Section03 from '@/components/Hire_Section03';


const FixedWrap = styled.div<any>`
    padding: 0 0 115px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 80vh;
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    background-image : url(${secSrc.src});
    @media (max-width: 600px) {
      min-height: 50vh;

    }
`
const Container = styled.div<any>`
    position: relative;
`
const PageWrap = styled.div<any>`
    margin-top: 80vh;
    background-color: #fff;
    @media (max-width: 600px) {
      margin-top:40vh;

    }
    
`


export default function HirePage() {
  return (
    <>
      <FixedWrap></FixedWrap>
      
      <div>
          <Container>
              <PageWrap>
                  <Section01/>
                  <Section02/>
                  <Section03/>
              </PageWrap>
          </Container>
      </div>
    </>
  )
}
