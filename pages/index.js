import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/products'

class Index extends React.Component {
  render () {
    return (
      <Products {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => 
    ({products: state.products})

export default connect(mapStateToProps)(Index)