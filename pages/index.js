import Head from 'next/head';
import React from 'react';
import { Pricing } from '../components/App-Pricing';
import { Blog } from '../components/Blog';
import { Content1 } from '../components/Content1';
import EmblaCarousel from '../components/embla2/EmblaCarousel';
import EmblaCarousel2 from '../components/embla2/EmblaCarousel2';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer1';
import { Hero2 } from '../components/Hero2';
import { NavBar2 } from '../components/NavBar2';

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const SLIDE_COUNT_2 = 4;
const imgSlide = Array.from(Array(SLIDE_COUNT_2).keys());

function Home() {
  return (
    <>
      <Head>
      <title>Cryspies—Home</title>
      </Head>
      <main>
      <NavBar2 />
      <Hero2 />
      <EmblaCarousel id="Games" slides={slides} />
      <Content1 />
      <EmblaCarousel2 id="Books" imgSlide={imgSlide}/>
      <Feature id="Apps" />
      <Pricing/>
      <Blog id="Socials" />
      <Footer />
      {/* <Title>Cryspies—Home</Title>
        <p className='antialiased font-sans'>[To-do: Display Products]</p> */}
      </main>
    </>
  );
}

export default Home;