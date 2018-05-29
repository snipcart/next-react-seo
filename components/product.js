export default (props) => (
    <div className="product">

        <a className="product" href={props.url }>
            <img src={props.image} alt={props.name} className="thumbnail"/>
            <p>{props.name}</p>
        </a>

        <button className="snipcart-add-item"
            data-item-name={props.name}
            data-item-id={props.id}
            data-item-image={props.image}
            data-item-url='/'
            data-item-price={props.price}>
            Buy it for {props.price} $
        </button>

    </div>)
