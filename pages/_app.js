
import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Head from 'next/head'

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <div id="main">
            <Head>
                  <script  src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                  <script  src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"  id="snipcart"></script>
                  <link  href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet"  type="text/css" />
                  <link href="/static/main.css" rel="stylesheet" />
            </Head>

            <h1 className="title">Peaky Blinders’ Store</h1>
            
            <Component {...pageProps} />
            
            <div>
              <p>
              SEO-friendly Next.js app with a <a href="https://snipcart.com/">Snipcart</a> powered store. 
              <a href="https://github.com/snipcart/next-snipcart">[See the code] </a>
              <a href="https://snipcart.com/blog/react-seo-nextjs-tutorial">[Read full tutorial]</a>
              </p>
            </div>
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)