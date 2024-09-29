import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ItemsList from "./_components/ItemsList";
import Footer from "./_components/Footer";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const itemList = await GlobalApi.getAllItems();

  return (
    <div className="p-2 px-16">
      {/* Slider */}
      <Slider sliderList = {sliderList} />
      {/* CategoryList */}
      <CategoryList categoryList = {categoryList}/>
      {/* ItemList */}
      <ItemsList itemList ={itemList} />
      {/* banner */}
      <Footer/>

    </div>
  );
}
