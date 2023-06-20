import React, { useEffect, useState } from 'react';
import styles from "./Navbars.module.css";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logoSrc from "public/images/gmlLogo.png";
import Image from 'next/image';

export default function Navbars() {
    const [headerBg,setHeaderBg] = useState("");

    useEffect(()=>{
        // 안에서 window 객체를 사용
        const scrollHandler = () => {
            const sct = window.pageYOffset;
        
            if (sct >= 200) {
                setHeaderBg("white");
            } else {
                setHeaderBg("");
            }
          };
          window.addEventListener("scroll", scrollHandler);
    },[])
    

  return (
        <Navbar bg={headerBg} expand="lg" className='py-2' fixed="top" >
        <Container>
            <Navbar.Brand href="/"><Image src={logoSrc} alt="logo" className={styles.logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggleBtn} style={{border:'none'}}/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="justify-content-end">
                    {/* <Nav.Link href="/" className='px-4'>회사소개</Nav.Link> */}
                    <Nav.Link href="/about" className='px-4'>회사 소개</Nav.Link>
                    <Nav.Link href="/hire" className='px-4'>채용공고</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    
  )
}
