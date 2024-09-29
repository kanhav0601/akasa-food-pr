import GlobalApi from '@/app/_utils/GlobalApi';
import React from 'react';
import TopCat from '../_components/TopCat';
import ItemsList from '@/app/_components/ItemsList';

async function ItemCategory({ params }) {
    const { categoryName } = params;

    // Initializing state variables for data
    let itemList = [];
    let categoryList = [];
    let errorOccurred = false; // Flag for tracking errors

    try {
        // Fetch data
        itemList = await GlobalApi.itemsByCat(categoryName);
        categoryList = await GlobalApi.getCategoryList();
    } catch (error) {
        console.error('Error fetching data:', error);
        errorOccurred = true;
    }

    // Render error message if data fetch fails
    if (errorOccurred) {
        return (
            <div className='text-center text-red-500'>
                <p>There was an error fetching the data. Please try again later.</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className='text-3xl font-serif text-slate-200 text-center p-5 font-extrabold bg-gradient-to-r from-purple-600 via-orange-600 to-purple-600 shadow-md uppercase'>
                {categoryName}
            </h2>

            {/* Pass the correct prop selectedCategory */}
            <TopCat categoryList={categoryList} selectedCategory={categoryName} />

            <div className='p-5 md:p-10'>
                {/* Render a message if no items are found */}
                {itemList.length > 0 ? (
                    <ItemsList itemList={itemList} />
                ) : (
                    <p className='text-center text-slate-400'>No items found for this category.</p>
                )}
            </div>
        </div>
    );
}

export default ItemCategory;
