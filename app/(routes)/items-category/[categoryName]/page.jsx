import GlobalApi from '@/app/_utils/GlobalApi';
import React from 'react';
import TopCat from '../_components/TopCat'; // Capitalized component
import ItemsList from '@/app/_components/ItemsList';

async function ItemCategory({ params }) {
    const { categoryName } = params; // Destructure params to get categoryName

    // Fetch data and handle errors
    let itemList = [];
    let categoryList = [];

    try {
        itemList = await GlobalApi.itemsByCat(categoryName); // Fetch items by category
        categoryList = await GlobalApi.getCategoryList(); // Fetch category list
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error accordingly, maybe show a message to the user
    }

    return (
        <div>
            <h2 className='text-3xl font-serif text-slate-200 text-center p-5 font-extrabold bg-gradient-to-r from-purple-600 via-orange-600 to-purple-600 shadow-md uppercase'>
                {categoryName}
            </h2>

            {/* Corrected prop name: selectedCategory */}
            <TopCat categoryList={categoryList} selectedCategory={categoryName} /> 
            
            <div className='p-5 md:p-10'>
                <ItemsList itemList={itemList} />
            </div>
        </div>
    );
}

export default ItemCategory;
