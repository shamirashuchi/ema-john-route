import { getShoppingCart } from "../Utilities/fakedb";

const cartProductLoader = async () =>{
        const loadedProducts = await fetch('products.json');
        const products = await loadedProducts.json();
        // console.log(products)
        const storedCart = getShoppingCart();
        //console.log(storedCart);
        const savedCart = [];
        for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
    }
   }
    return {products,cart: savedCart};
}
export default cartProductLoader;
