import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import profilePic from '../public/Artwork1.JPEG';
import Nav from '@/components/Nav';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan Electronic Press Kit</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='./icon.png' />
      </Head>
      <main>
        <Nav />
      </main>
    </>
  );
}