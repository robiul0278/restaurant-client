import { Helmet } from "react-helmet";
import img from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../comonents/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu/useMenu";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizzaa from "../../assets/menu/pizza-bg.jpg";
import saladd from "../../assets/menu/salad-bg.jpg";
import soups from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory";
import Cover from "../../Shared/Cover/Cover";
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter( item => item.category === "dessert" );
    const soup = menu.filter( item => item.category === "soup" );
    const salad = menu.filter( item => item.category === "salad" );
    const pizza = menu.filter( item => item.category === "pizza" );
    const offered = menu.filter( item => item.category === "offered" );
  return (
    <section>
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>
      <Cover
        img={img}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offer-item category  */}
      <MenuCategory
      items={offered}
      ></MenuCategory>


      {/* dessert-item category */}
      <MenuCategory
      coverImg={dessert}
      title={'desserts'}
      subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      items={desserts}
      ></MenuCategory>
      {/* pizza-item section  */}
      <MenuCategory
      items={pizza}
      coverImg={pizzaa}
      title={'pizza'}
      subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      ></MenuCategory>
      {/* salad-item section  */}
      <MenuCategory
      title={"salad"}
      subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      coverImg={saladd}
      items={salad}
      ></MenuCategory>
      {/* soup-item section  */}
      <MenuCategory
      title={'soups'}
      subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      coverImg={soups}
      items={soup}
      ></MenuCategory>
    </section>
  );
};

export default Menu;
