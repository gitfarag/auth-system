import ProductEntity, { Product } from "./../entities/product.entity";

const _productEntity = new ProductEntity();

class ProductService {
  async allProducts(): Promise<Product[]> {
    const allP = await _productEntity.index();
    return allP;
  }

  async addProduct(product: Product): Promise<Product> {
    const added = await _productEntity.addProduct(product);
    return added;
  }

  async updateProduct(product: Product): Promise<Product> {
    const added = await _productEntity.updateProduct(product);
    return added;
  }

  async getProductById(id: number): Promise<Product> {
    const added = await _productEntity.getProductById(id);
    return added;
  }

  async deleteProductById(id: number): Promise<string> {
    const added = await _productEntity.deleteProductbyId(id);
    return added;
  }
}

export default ProductService;
