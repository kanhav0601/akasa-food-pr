import Items from './Items'; // Import Items component correctly

function ItemsList({ itemList }) {
    return (
        <div>
            <h2 className='text-center text-orange-600 font-bold text-3xl md:text-4xl lg:text-5xl'>
                Sky-High Eats to Fuel Your Journey!
            </h2>
            <div className='p-8 grid grid-cols-2 
                md:grid-cols-3 lg:grid-cols-4
                gap-5'>
                {itemList.map((items, index) => index<8&& (
                    <Items key={items.id} items={items} /> // Ensure a unique key prop
                ))}
            </div>
        </div>
    );
}

export default ItemsList;
