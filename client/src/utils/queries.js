//importing gql from apollo client
import { gql } from '@apollo/client';

//query of product
//works
export const QUERY_PRODUCTS = gql`
  query Product($id: ID!) {
    product(_id: $id) {
      _id
      category {
        _id
        name
      }
      description
      image
      name
      price
      quantity
    }
  }
`;
//query to checkout
//does not work
export const QUERY_CHECKOUT = gql`
	query getCheckout($products: [ProductInput!]) {
		checkout(products: $products) {
			session
		}
	}
`;
//query for all products
//works

// products {
//   _id
//   name
//   description
//   price
//   quantity
//   category {
//     name
//   }
export const QUERY_ALL_PRODUCTS = gql`
  query Products {
    products {
    _id
    category {
      name
      _id
    }
    description
    image
    name
    price
    quantity
    }
  }
`;
//query of category
//works
export const QUERY_CATEGORIES = gql`
  query getCategories($id: ID!){
    category(_id: $id) {
      _id
      name
    } 
  }
`;
//query of user
//works
export const QUERY_USER = gql`
  query getUser{
    user{
      firstName
      lastName
      email
      _id
      orders {
        _id
        products {
          _id
        }
      }
    }
  }
`;

