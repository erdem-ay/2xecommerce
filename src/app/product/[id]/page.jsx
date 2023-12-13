import { useStore } from "@/stores";
import React from "react";

const Products = async ({ params }) => {
    const { getProductById } = useStore.getState();
    const product = await getProductById(params.id);
    console.log(product)

    return <div
        className="bg-black flex-1 flex justify-center items-center"
    >
        <div className="max-w-8xl w-10/12 my-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div
                    className="flex flex-col border border-gray-700 bg-white p-12 mb-2 rounded-lg"
                >
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.brand}</p>
                    {/* <img src={product.image_url || 'https://unsplash.com/photos/WLUHO9A_xik/download?force=true&w=640'} alt={product.title || 'Ürün Resmi'} /> */}

                </div>
            </div>
        </div>
    </div>;
};

export default Products;
