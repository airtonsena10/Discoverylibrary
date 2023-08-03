import axios from 'axios'

export const API = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});