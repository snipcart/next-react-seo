import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/products'
import Head from 'next/head'

class Index extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <link href="/static/main.css" rel="stylesheet" />
        </Head>

        <Products {...this.props}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => 
    ({products: state.products})

export default connect(mapStateToProps)(Index)