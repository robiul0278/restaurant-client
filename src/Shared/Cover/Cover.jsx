import { Parallax} from "react-parallax";
const Cover = ({ img, title, subtitle }) => {
  return (
    <section className="">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="hero py-40"
        >
          <div className="hero-content text-center">
            <div className="px-52 py-16 bg-black bg-opacity-30  text-white">
              <h1 className="mb-5 text-4xl font-serif uppercase font-bold">
                {title}
              </h1>
              <p className="mb-5 max-w-3xl">{subtitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Cover;
