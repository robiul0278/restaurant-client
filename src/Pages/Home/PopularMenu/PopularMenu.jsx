import SectionTitle from "../../../comonents/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu/useMenu";
import MenuItem from "../../Menu/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular'); 

  return (
    <section className="md:px-48">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="my-16 grid gap-5 md:grid-cols-2 grid-cols-1">
        {
            popular.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
