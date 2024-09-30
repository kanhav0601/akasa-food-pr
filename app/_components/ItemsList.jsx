import Items from './Items'; // Import Items component

function ItemsList({ itemList }) {
    return (
        <div>
            <h2 className='text-center text-orange-600 font-bold text-3xl md:text-4xl lg:text-5xl'>
                Sky-High Eats to Fuel Your Journey!
            </h2>
            <div 
                className='p-8 grid grid-cols-2 
                md:grid-cols-3 lg:grid-cols-4 gap-5'
                role="grid" // Accessibility improvement
            >
                {itemList.slice(0, 8).map((item) => (
                    <Items key={item.id} item={item} /> // Ensure a unique key prop
                ))}
            </div>
        </div>
    );
}

export default ItemsList;
