import axios from 'axios';
import {
  AllCartsType,
  AllProductsType,
  AllUsersType,
  CartType,
} from '../Types/Types';

export const getCart = async () =>
  (await axios.get<CartType>('https://dummyjson.com/carts/1')).data;

export const getAllCarts = async () =>
  (await axios.get<AllCartsType>('https://dummyjson.com/carts')).data;

export const getAllUsers = async () =>
  (await axios.get<AllUsersType>('https://dummyjson.com/users')).data;

export const getAllProducts = async () =>
  (await axios.get<AllProductsType>('https://dummyjson.com/products')).data;

export default getCart;
