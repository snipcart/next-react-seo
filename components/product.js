export default (props) => (
    <div className="product">

        <a href={props.url }>
            <img src={props.image} alt={props.name} height="400px" className="thumbnail"/>
            <p>{props.name}</p>
        </a>

        <p className="product-details">
            {props.description}
        </p>

        <button className="snipcart-add-item"
            data-item-name={props.name}
            data-item-id={props.id}
            data-item-image={props.image}
            data-item-url={'https://next-react-snipcart.netlify.com/product/' + props.id}
            data-item-price={props.price}>
            Buy it for {props.price} $
        </button>

    </div>)
