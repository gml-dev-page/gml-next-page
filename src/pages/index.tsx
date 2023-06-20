import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbars from '@/components/Navbar'
import MainPage from './main'
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <MainPage/>
    </>
  )
}
