
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="mt-20 md:w-3/12 text-center mx-auto">
            <p className="text-yellow-600 text-xl italic py-2">{subHeading}</p>
            <h3 className="text-3xl border-y-4 py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;