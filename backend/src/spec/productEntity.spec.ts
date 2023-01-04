
// import AuthService from "../services/auth.service";
import ProductEntity, { Product } from "../entities/product.entity";
const _Product = new ProductEntity();
const data: Product = {
  name: "iphone",
  cat: "mobile",
  price: 600,
  qty: 400,
};



describe("product Class ", () => {
  it(`It should create product`, async () => {
    const result = await _Product.addProduct(data);
    expect(result.name).toEqual('iphone');
  });
  it(`It should get  product`, async () => {
    const allProducts = await _Product.index();
    const pID = allProducts[0].id as number;
    const result = await _Product.getProductById(pID);
    expect(result).toBeDefined();
  });
  it(`It should update  product`, async () => {
    const result = await _Product.updateProduct({
      id: 1,
      name: "iphone",
      cat: "mobile",
      price: 600,
      qty: 1000,
    });
    expect(result.qty).toEqual(1000);
  });
  // it(`It should delete  product`, async () => {
  //   const users = await _Product.index();
  //   const uID = users[0].id as number;

  //   const result = await _Product.deleteProductbyId(uID);
  //   expect(result).toEqual(`product deleted`);
  // });

});
