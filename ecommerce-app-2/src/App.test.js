import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getProducts } from './path/to/your/functions'; 

const mock = new MockAdapter(axios);

describe('getProducts', () => {
  it('should return products from API', async () => {


    mock.onGet('products').reply(200, products);

    const response = await getProducts();
    const products = response.data.result

    expect(products[0].id).toBe(1);
  });

  it('should handle errors', async () => {
    mock.onGet('products').reply(500);

    try {
      await getProducts();
    } catch (error) {
      expect(error.response.status).toBe(500);
    }
  });
});
