const Item = ({ add, remove, name, price, img }) => {
  return (
    <div className="item">
      <h2 className="item-name">{name}</h2>
      <img src={img} alt="album cover" />
      <p>Price:</p>
      <h3 className="price">{price}</h3>
      <button onClick={remove}>Remove from cart</button>
      <button onClick={add}>Add to cart</button>
    </div>
  );
};

export default Item;
