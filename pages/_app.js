
import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <div id="main">
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