import OrderItemCard from "./OrderItemCard";

const OrderItem = ({items}) => {
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 md:my-16 md:grid-cols-3 md:px-48 gap-6">
        {
            items.map(item => <OrderItemCard
            key={item._id}
            item={item}
            ></OrderItemCard>)
        }
    </div>
    );
};

export default OrderItem;