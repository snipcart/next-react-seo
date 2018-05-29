import Link from 'next/link'

const ProductLink = (props) => (
    <li>
        <Link as={`/product/${props.id}`} href={`/product?id=${props.id}`}>
            <a>{props.name}</a>
        </Link>
    </li>)

var Products = ({ products }) => (
    <div>
        <h1>My products</h1>
        <ul>
            { products.map(props => (
                <ProductLink key={props.id} {...props}/>
            )) }
        </ul>
    </div>)

export default Products