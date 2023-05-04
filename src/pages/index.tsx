import Head from 'next/head'

import { useEffect } from 'react';

// Components
import Header from "@/components/templates/header";
import SectionTitle from "@/components/pages/index/sectionTitle";
import SectionStats from "@/components/pages/index/sectionStats";
import SectionSlider from "@/components/pages/index/sectionSlider";
import SectionInfo from '@/components/pages/index/sectionInfo';
import Footer from "@/components/templates/footer";

export default function Home() {
    // Необходимо при SSR, т.к. navigator не определен будет до выгрузки на клиент
    useEffect(() => {
      const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
        };
        
        if (isMobile.any()) {
        document.querySelector("html")?.classList.add("_mobile");
        } else {
        document.querySelector("html")?.classList.add("_desk");
        }
    })

  
  return (
    <>
      <Head>
        <title>Denis Atwell</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" />
     
      </Head>
      

          <SectionTitle />
          <SectionStats />
          <SectionSlider />
          <SectionInfo />
          
    </>
  )
}

