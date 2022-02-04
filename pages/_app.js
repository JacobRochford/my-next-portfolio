import Layout from '../layout/Layout';
import '../styles/globals.css'
import Theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp
