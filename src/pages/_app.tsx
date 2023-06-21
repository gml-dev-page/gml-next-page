import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextSeo } from 'next-seo';
import seoImg from '/public/seo_img.jpg';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
			
		});
  })

  return(
    <>
    <NextSeo
      title="이커머스 마케팅 GML"
      description="종합 이커머스마케팅 회사 그래마케팅연구소 GML. 좋은 브랜드가 좋은 세상을 만든다고 확신 하는 사람들이 모인 곳."
      // keywords="부산 마케팅, 온라인 마케팅, 그래마케팅랩, GML, 해운대 마케팅, 퍼포먼스 마케팅, 종합 마케팅"
      canonical="https://www.graemlab.com/"
      openGraph={{
        url: 'https://www.graemlab.com/',
        title: '이커머스 마케팅 GML',
        description: '종합 이커머스마케팅 회사 그래마케팅연구소 GML. 좋은 브랜드가 좋은 세상을 만든다고 확신 하는 사람들이 모인 곳.',
        images: [
          {
            url: '/public/seo_img.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'GML',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }} /><Layout>
        <Component {...pageProps} />
      </Layout></>
  )

}
