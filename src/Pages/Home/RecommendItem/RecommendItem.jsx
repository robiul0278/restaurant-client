import SectionTitle from "../../../comonents/SectionTitle/SectionTitle";
import item from "../../../assets/home/slide1.jpg";
const RecommendItem = () => {
  return (
    <section className="my-16 md:px-48">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 mt-16 md:grid-cols-3 gap-6">
        <div className="card card-compact w-full bg-base-100">
          <figure>
            <img className="object-cover w-full h-72" src={item} alt="Shoes" />
          </figure>
          <div className="flex flex-col text-center p-4 items-center bg-slate-100">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="border-b-4 border-0 btn font-bold btn-outline p-2">
                SEAD MORE
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100">
          <figure>
            <img className="object-cover w-full h-72" src={item} alt="Shoes" />
          </figure>
          <div className="flex flex-col text-center p-4 items-center bg-slate-100">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="border-b-4 border-0 btn font-bold btn-outline p-2">
                SEAD MORE
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100">
          <figure>
            <img className="object-cover w-full h-72" src={item} alt="Shoes" />
          </figure>
          <div className="flex flex-col text-center p-4 items-center bg-slate-100">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="border-b-4 border-0 btn font-bold btn-outline p-2">
                SEAD MORE
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecommendItem;
