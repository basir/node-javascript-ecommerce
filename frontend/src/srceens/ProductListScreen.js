import DashboardMenu from '../components/DashboardMenu';
import { getProducts, createProduct, deleteProduct } from '../api';
import { showLoading, hideLoading, rerender, showMessage } from '../utils';

const ProductListScreen = {
  after_render: () => {
    document
      .getElementById('create-product-button')
      .addEventListener('click', async () => {
        const data = await createProduct();
        document.location.hash = `/product/${data.product._id}/edit`;
      });
    const editButtons = document.getElementsByClassName('edit-button');
    Array.from(editButtons).forEach((editButton) => {
      editButton.addEventListener('click', () => {
        document.location.hash = `/product/${editButton.id}/edit`;
      });
    });
    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', async () => {
        if (confirm('Are you sure to delete this product?')) {
          showLoading();
          const data = await deleteProduct(deleteButton.id);
          if (data.error) {
            showMessage(data.error);
          } else {
            rerender(ProductListScreen);
          }
          hideLoading();
        }
      });
    });
  },
  render: async () => {
    const products = await getProducts();
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: 'products' })}
    <div class="dashboard-content">
      <h1>Products</h1>
      <button id="create-product-button" class="primary">
        Create Product
      </button>
      <div class="product-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th class="tr-action">ACTION</th>
            <tr>
          </thead>
          <tbody>
            ${products
              .map(
                (product) => `
            <tr>
              <td>${product._id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.brand}</td>
              <td>
              <button id="${product._id}" class="edit-button">Edit</button>
              <button id="${product._id}" class="delete-button">Delete</button>
              </td>
            </tr>
            `
              )
              .join('\n')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    `;
  },
};
export default ProductListScreen;
