import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import RecommendItem from "../RecommendItem/RecommendItem";
import SectionInfo from "../SectionInfo/SectionInfo";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SectionInfo></SectionInfo>
            <PopularMenu></PopularMenu>
            <ContactUs></ContactUs>
            <RecommendItem></RecommendItem>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;