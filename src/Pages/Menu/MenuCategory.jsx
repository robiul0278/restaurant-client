import { Link } from "react-router-dom";
import MenuItem from "../../Pages/Menu/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, coverImg, title, subtitle }) => {
  return (
    <section>
      {title && (
        <Cover img={coverImg} title={title} subtitle={subtitle}></Cover>
      )}
      <div className="my-16 px-48 grid gap-5 md:grid-cols-2 grid-cols-1">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className="border-b-4 border-0 btn font-bold  btn-outline p-2">
        Order Your Favorite Food
      </button>
      </Link>
    </section>
  );
};

export default MenuCategory;
