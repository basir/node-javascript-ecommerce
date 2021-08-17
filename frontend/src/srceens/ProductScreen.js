import {
  parseRequestUrl,
  showLoading,
  hideLoading,
  showMessage,
  rerender,
} from '../utils';
import { createReview, getProduct } from '../api';
import Rating from '../components/Rating';
import { getUserInfo } from '../localStorage';

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById('add-button').addEventListener('click', () => {
      document.location.hash = `/cart/${request.id}`;
    });

    if (document.getElementById('review-form')) {
      document
        .getElementById('review-form')
        .addEventListener('submit', async (e) => {
          e.preventDefault();
          showLoading();
          const data = await createReview(request.id, {
            comment: document.getElementById('comment').value,
            rating: document.getElementById('rating').value,
          });
          hideLoading();
          if (data.error) {
            showMessage(data.error);
          } else {
            showMessage('Review Added Successfully', () => {
              rerender(ProductScreen);
            });
          }
        });
    }
  },
  render: async () => {
    const request = parseRequestUrl();
    showLoading();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    hideLoading();
    const userInfo = getUserInfo();
    return `
    <div class="content">
      <div class="back-to-result">
        <a href="/#/">Back to result </a>
      </div>
      <div class="details">
        <div class="details-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="details-info">
          <ul>
            <li>
              <h1>${product.name}</h1>
            </li>
            <li>
            ${Rating.render({
              value: product.rating,
              text: `${product.numReviews} reviews`,
            })}
            </li>
            <li>
              Price: <strong>$${product.price}</strong>
            </li>
            <li>
              Description:
              <div>
                ${product.description}
              </div>
            </li>
          </ul>
        </div>
        <div class="details-action">
            <ul>
              <li>
                Price: $${product.price}
              </li>
              <li>
                Status : 
                  ${
                    product.countInStock > 0
                      ? `<span class="success">In Stock</span>`
                      : `<span class="error">Unavailable</span>`
                  }
              </li>
              <li>
                  <button id="add-button" class="fw primary">Add to Cart </div>
            </ul>
        </div>
      </div>
      <div class="content">
      <h2>Reviews</h2>
      ${product.reviews.length === 0 ? `<div>There is no review.</div>` : ''}  
      <ul class="review">
      ${product.reviews
        .map(
          (review) =>
            `<li>
            <div><b>${review.name}</b></div>
            <div class="rating-container">
            ${Rating.render({
              value: review.rating,
            })}
              <div>
              ${review.createdAt.substring(0, 10)}
              </div>
            </div>
            <div>
            ${review.comment}
            </div>
          </li>`
        )
        .join('\n')}

        <li>
       
        ${
          userInfo.name
            ? `
            <div class="form-container">
            <form id="review-form">
              <ul class="form-items">
              <li> <h3>Write a customer reviews</h3></li>
                <li>
                  <label for="rating">Rating</label>
                  <select required name="rating" id="rating">
                    <option value="">Select</option>
                    <option value="1">1 = Poor</option>
                    <option value="2">2 = Fair</option>
                    <option value="3">3 = Good</option>
                    <option value="4">4 = Very Good</option>
                    <option value="5">5 = Excellent</option>
                  </select>
                </li>
                <li>
                  <label for="comment">Comment</label>
                  <textarea required  name="comment" id="comment" ></textarea>
                </li>
                <li>
                  <button type="submit" class="primary">Submit</button>
                </li>
              </ul>
            </form>
            </div>`
            : ` <div>
              Please <a href="/#/signin">Signin</a> to write a review.
            </div>`
        }
      </li>
    </ul> 

      </div>
    </div>`;
  },
};
export default ProductScreen;
