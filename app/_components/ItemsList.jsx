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
                {itemList.slice(0, 8).map((item, index) => (
                    <div key={item.id || index} className="item-card">
                        {/* Image rendering using environment variable */}
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${item?.images?.[0]?.url || '/default-image.jpg'}`} 
                            alt={item.name} 
                            className="w-full h-48 object-cover"
                        />
                        <h3 className='text-lg font-bold mt-2'>{item.name}</h3>
                        {/* Additional item details can be added here */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemsList;
