import Head from "next/head";

const Layout = ({children, description, fav, xuser, weburl, summary, title, imgUrl })=>{
        return(
            <>
              <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />

                <meta name="google-adsense-account" content="ca-pub-7123797226885173" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
                <meta name="keywords" content="X Intent, twitter intent, twitter intent generator, x intent generator" />
                <meta name="author" content="Sal" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={xuser} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imgUrl} />


                <meta property="og:type" content= "website" />
                <meta property="og:url" content={weburl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imgUrl} />m

                {/* <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="salnetx" data-description="Support me on Buy me a coffee!" data-message="" data-color="#ff0880" data-position="Right" data-x_margin="38" data-y_margin="38"></script>               */}
                
                </Head>
              <main>
                {children}
              </main>
            </>
        )
}
export default Layout;