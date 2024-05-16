//importing gql from apollo client
import { gql } from '@apollo/client';

//query of product
//works for all but i think should just be one?
export const QUERY_PRODUCTS = gql`
	query getProducts($category: ID) {
		products(category: $category) {
			_id
			name
			description
			image
			quantity
			price
			category {
				_id
			}
		}
	}
`;
//query to checkout
//not working
export const QUERY_CHECKOUT = gql`
	query getCheckout($products: [ProductInput]) {
		checkout(products: $products) {
			session
		}
	}
`;
//query for all products
//works, shows all products
export const QUERY_ALL_PRODUCTS = gql`
  query getProducts($category: ID, $name: String){
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;
//query of category
export const QUERY_CATEGORIES = gql`
  query getCategories($_id:ID!){
    categories {
      _id
      name
    }
  }
`;
//query of user
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

