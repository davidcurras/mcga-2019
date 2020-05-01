import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import fetchApi from '../../../helpers/fetch'

class Products extends Component {

    componentDidMount() {
        this.props.setLoading()
        fetchApi('/product')
            .then(data => this.props.loadProducts(data))
            .catch(err => this.props.setError(err))
    }

    renderList = () => {
        return this.props.products.map(product => {
            return <li key={product.id}>Name: {product.name}</li>
        })
    }

    add = () => {
        this.props.addProduct()
    }

    render() {
        return (
            <MainLayout>
                <h1>Products {this.props.isLoading ? 'loading...' : null}</h1>
                <h2>{this.props.error}</h2>
                <ul>
                    {this.renderList()}
                </ul>
                <button onClick={this.add}>Add</button>
            </MainLayout>
        )
    }
}

export default Products
