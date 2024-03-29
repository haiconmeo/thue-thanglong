
import Head from 'next/head';
import Footer from "../src/layout/footer/Footer";
import Header from "../src/layout/header/Header";
import Layout from "../src/layout/Layout";
import IndexPage from "../src/pages/IndexPage";

const Index = () => {
  return (
    <div>
      <Head>

        <meta property="og:title" content="Công ty TNHH Tư vấn và Đại lý thuế Thăng Long" />
        <meta property="og:type" content="movie" />
        <meta property="og:url" content="https://www.dailythuethanglong.com/" />
        <meta property="og:image" content="https://res.cloudinary.com/dsthxgzde/image/upload/c_scale,w_678/v1671456615/samples/thanglong-tax/b%C3%ACa_c%C3%B3_logo_dqya01.png" />
        <meta property="og:description"
          content="Đại lý thuế Thăng Long - Trao uy tín, gặt niềm tin."/>

      </Head>
      <Layout noFooter noHeader>
        <Header />
        <IndexPage />
        <Footer />
      </Layout>
    </div>

  );
};
export default Index;
