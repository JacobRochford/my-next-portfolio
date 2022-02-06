import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Head from 'next/head';
import Section from '../components/Section/Section';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="https://jacobrochford.com/favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <title>Contact | Jacob Rochford</title>
        <meta
          name="description"
          content="Contact software developer Jacob Rochford."
        />
        <link rel="canonical" href="https://jacobrochford.com/contact.html" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jacob Rochford" />
        <meta
          name="twitter:description"
          content="Contact software developer Jacob Rochford."
        />
        <meta
          name="twitter:image"
          content="https://jacobrochford.com/jr-logo-large.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Jacob Rochford" />
        <meta
          property="og:description"
          content="Contact software developer Jacob Rochford."
        />
        <meta property="og:url" content="https://jacobrochford.com/contact.html" />
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

      <Section>
        <ContactForm />
      </Section>
    </div>
  );
}
