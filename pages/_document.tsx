import { Head, Html, Main, NextScript } from 'next/document'
import Document, { DocumentContext } from 'next/document'

class MyDocument extends Document {
  //   static async getInitialProps(ctx: DocumentContext) {
  //     const initialProps = await Document.getInitialProps(ctx)

  //     return initialProps
  //   }
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id='modal-show-hovered-card'></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
