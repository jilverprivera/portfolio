import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

