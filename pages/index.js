import Head from 'next/head';
import Animation from '../components/Animation/Animation';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="https://jacobrochford.com/favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <title>Jacob Rochford&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio of software developer Jacob Rochford."
        />
        <link rel="canonical" href="https://jacobrochford.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jacob Rochford" />
        <meta
          name="twitter:description"
          content="Portfolio of software developer Jacob Rochford."
        />
        <meta
          name="twitter:image"
          content="https://jacobrochford.com/jr-logo-large.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Jacob Rochford" />
        <meta
          property="og:description"
          content="Portfolio of software developer Jacob Rochford."
        />
        <meta property="og:url" content="https://jacobrochford.com" />
        <meta
          property="og:image"
          content="https://jacobrochford.com/jr-logo-large.png"
        />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          href="https://jacobrochford.com/jr-logo-small.png"
        />
      </Head>

      <Container>
        <Hero />
        <Animation />
      </Container>
    </div>
  );
}
