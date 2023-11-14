import { useStore } from "@/stores";
import React from "react";

const Products = async ({ params }) => {
    console.log(params.id)
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
                </div>
            </div>
        </div>
    </div>;
};

export default Products;
