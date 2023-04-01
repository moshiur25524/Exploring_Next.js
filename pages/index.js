import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi. I am Moshiur Rahman. I am a junior web developer. I have some experience of HTML, CSS, JS, REACT, NEXT.JS, FIREBASE, NODE, EXPRESS, MONGODB, BOOTSTRAP and more . If you want you can contact me in me <a href="https://www.facebook.com/mosiur.rahman.5621149" target='_blank'>facebook</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}