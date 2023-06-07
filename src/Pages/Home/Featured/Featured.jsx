import SectionTitle from "../../../comonents/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div
      className="hero bg-fixed"
      style={{ backgroundImage: `url("../../../../public/featured.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center text-neutral-content">
      <SectionTitle
              subHeading={"---Check it out---"}
              heading={"FROM OUR MENU"}
            ></SectionTitle>
        <div className="hero-content flex-col p-20 lg:flex-row">
          <img
            src="../../../../public/featured.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className=" text-start">
              <h1 className="text-xl">March 20, 2023</h1>
              <h1 className="text-xl">WHERE CAN I GET SOME?</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <div className="py-6">
                <button className="border-b-4 border-0 btn font-bold text-white  btn-outline p-2">
                  SEAD MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
