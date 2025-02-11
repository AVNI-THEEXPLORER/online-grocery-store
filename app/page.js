import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Footer from "./_components/Footer";


export default async function Home() {

  const sliderList = await GlobalApi.getSliders();
  const categoryList= await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();

  return (
    <div className="p-5 md:p-5 md:px-16 object-cover">

      {/* Sliders */}
     <Slider sliderList={sliderList}/>

     {/* Category List  */}
     <CategoryList categoryList={categoryList}/>

     {/* Product List  */}
     <ProductList productList={productList}/>

     {/* Banner  */}
     <Image src='/banner.png' alt="banner" width={1000} height={400}  className="w-full object-contain h-[400px] "/>
     
     {/* Footer  */}
     <Footer/>
     
    </div>
  );
}
