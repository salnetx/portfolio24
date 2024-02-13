// pages/index.js
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";
import React, { useState, useEffect } from 'react';
import Head from "next/head";

const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/products')
        const data = await res.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout imgUrl={'https://www.salnet.xyz/sal.png'} title={'salnetx'} description={'I am a fullstack developer, 9 - 9 remote worker, community builder, and a solo traveler. I love to build apps that solve real-life problems.'} xuser={'@salnetx'} weburl={'salnet.xyz'} summary={'Hi there. This is Sal.'}>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7123797226885173" crossOrigin="anonymous"></script>

        {/* MailerLite Universal */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, e, u, f, l, n) {
                w[f] = w[f] || function () { (w[f].q = w[f].q || []).push(arguments); };
                l = d.createElement(e), l.async = 1, l.src = u,
                n = d.getElementsByTagName(e)[0], n.parentNode.insertBefore(l, n);
              })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
              ml('account', '792010');
            `,
          }}
        />
        {/* End MailerLite Universal */}
      </Head>

      <style jsx>{`
        .left-column {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
        }
      `}</style>

      <div className="grid sm:grid-cols-6">

        {/* LEFT DIV START */}
        <div className="col-span-2 py-2 sticky left-column sm:h-screen">
          <div className="sm:m-12 my-6 ml-9 mr-6">
            <Image
              src={'/salnet.png'}
              className="rounded-full sm:w-5/12 w-32"
              width={270}
              height={270}
            />
            <h1 className="sm:text-5xl text-4xl font-black pt-6">SALNET <p className="font-semibold mt-2 text-xl">Software Engineer, I Build Apps</p></h1>
            <div className="mt-4">
              <p className="sm:text-xl text-lg ">＊ 1.5k on twitter</p>
              <p className="sm:text-xl text-lg ">＊ @salnetx across all platforms.</p>
              <p className="sm:text-xl text-lg  mt-1">📍 Earth, Milkyway Galaxy</p>
              <p className="sm:text-xl text-lg mt-8">I know it may sound funny, but I actually have a newsletter.</p>
              <button className="bg-blue-500 px-8 py-2.5 mt-6 rounded-xl font-semibold text-white">SUBSCRIBE</button>
            </div>

            {/* ... (other content of the left div) */}
            
          </div>
        </div>
        {/* LEFT DIV END */}

        {/* RIGHT DIV START */}
        <div className="col-span-4 py-3 sm:mx-0 mx-3">
          <div className='flex sm:pr-32 px-2.5 items-center justify-center sm:mt-16 pb-32'>
            <div className='grid sm:grid-cols-2 gap-x-8 gap-y-8'>
              {apiData.map((item, index) => (
                <div key={index}>
                  <ProductCard index={index} banner={item.banner} des={item.des} name={item.name} route={item.route} image={item.image} earning={item.earning} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT DIV END */}
      </div>

      <Footer />
    </Layout>
  );
}

export default Home;
