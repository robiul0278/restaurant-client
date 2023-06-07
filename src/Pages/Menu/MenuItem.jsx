
const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
      <section>
        <div className="flex space-x-4">
          <img
            style={{ borderRadius: "0 100px 100px 100px" }}
            className="w-[120px]"
            src={image}
            alt=""
          />
          <div>
            <h3 className="text-xl">{name} ---------------------</h3>
            <p>{recipe}</p>
          </div>
          <p className="text text-yellow-500">{price}</p>
        </div>
      </section>
    );
  };
  
  export default MenuItem;
  