import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    loadProducts,
    setProductError,
    setProductLoading,
    addProduct
} from '../../../redux/actions/products'
import Products from './view'

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products.list,
        isLoading: state.products.isLoading,
        error: state.products.error
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            loadProducts,
            setError: setProductError,
            setLoading: setProductLoading,
            addProduct
        },
        dispatch
    )
}

const connectedProps = connect(mapStateToProps, mapDispatchToProps)
export default connectedProps(Products)