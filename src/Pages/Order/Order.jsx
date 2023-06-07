import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import cover from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu/useMenu";
import OrderItem from "./OrderItem";
import { useParams } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";

const Order = () => {
  const [menu] = useMenu();
  const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salad = menu.filter( item => item.category === "salad" );
  const pizza = menu.filter( item => item.category === "pizza" );
  const soup = menu.filter( item => item.category === "soup" );
  const dessert = menu.filter( item => item.category === "dessert" );
  const drinks = menu.filter( item => item.category === "drinks" );

  return (
    <section>
      <Cover
        img={cover}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>         
        </TabList>
        <TabPanel>
            <OrderItem items={salad} ></OrderItem>
        </TabPanel>
        <TabPanel>
            <OrderItem items={pizza} ></OrderItem>
        </TabPanel>
        <TabPanel>
            <OrderItem items={soup} ></OrderItem>
        </TabPanel>
        <TabPanel>
            <OrderItem items={dessert} ></OrderItem>
        </TabPanel>
        <TabPanel>
        <OrderItem items={drinks} ></OrderItem>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Order;
