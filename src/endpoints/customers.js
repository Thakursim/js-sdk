import BaseExtend from '../extends/base';

import { cartIdentifier, buildCartItemData } from '../utils/helpers';

class CustomersEndpoint extends BaseExtend {
  constructor(endpoint) {
    super(endpoint);

    this.endpoint = 'customers';
    this.cartId = cartIdentifier();
  }

  Get() {
    return this.request.send(`${this.endpoint}`, 'GET');
  }

  // Items(cartId = this.cartId) {
  //   return this.request.send(`${this.endpoint}/${cartId}/items`, 'GET');
  // }

  // AddProduct(productId, quantity = 1, cartId = this.cartId) {
  //   const body = buildCartItemData(productId, quantity);

  //   return this.request.send(`${this.endpoint}/${cartId}/items`, 'POST', body);
  // }

  // AddCustomItem(body, cartId = this.cartId) {
  //   const itemObject = Object.assign(body, {
  //     type: 'custom_item',
  //   });

  //   return this.request.send(`${this.endpoint}/${cartId}/items`, 'POST', itemObject);
  // }

  // RemoveItem(itemId, cartId = this.cartId) {
  //   return this.request.send(`${this.endpoint}/${cartId}/items/${itemId}`, 'DELETE');
  // }

  // UpdateItemQuantity(itemId, quantity, cartId = this.cartId) {
  //   const body = buildCartItemData(itemId, quantity);

  //   return this.request.send(`${this.endpoint}/${cartId}/items/${itemId}`, 'PUT', body);
  // }

  // Checkout(body, cartId = this.cartId) {
  //   return this.request.send(`${this.endpoint}/${cartId}/checkout`, 'POST', body);
  // }

  // Delete(cartId = this.cartId) {
  //   return this.request.send(`${this.endpoint}/${cartId}`, 'DELETE');
  // }
}

export default CustomersEndpoint;
