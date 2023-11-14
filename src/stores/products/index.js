const ecommerce = process.env.ECOMMERCE_URL;


export const createProductStore = (set,get) => ({
  product: {},
  products: [],
  getProducts: async () => {
    const response = await fetch(`${ecommerce}products`, {
      cache: "no-cache",
    });
    const products = await response.json();
    set({ products });

    return products;
  },

  getProductById: async (productId) => {
    const { products } = get()
    const response = await fetch(`${ecommerce}products/${productId}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    set({ products });
    return data;
  },


});

