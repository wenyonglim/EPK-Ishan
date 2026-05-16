import Head from 'next/head';
import NavHome from '@/components/NavHome';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Media from '@/components/Media';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan Electronic Press Kit</title>
        <meta
          name='description'
          content='Electronic press kit for London singer-songwriter Ishan.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='./icon.png' />
      </Head>
      <main>
        <div className=''>
          <NavHome Home={'underline'} About={''} Press={''} Media={''} />
        </div>
        <div className='hidden lg:block'>
          <Bio />
        </div>
        <div className='hidden lg:block'>
          <Gallery />
        </div>
        <div className='overflow-y-hidden overflow-x-hidden'>
          <Media />
        </div>

        <div className=''>
          <Footer />
        </div>
      </main>
    </>
  );
}
