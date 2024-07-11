import { createSlice } from "@reduxjs/toolkit";

export interface Book {
  id: number;
  name: string;
  category: string;
  description:string;
  price: number;
}



const initialState: Book[] = [];

export const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
     return state.filter(book => book.id !== action.payload)
    },
    editBookDetail: (state, action) => {
        const { id, name, category,description,price } = action.payload;
        const existingUser = state.find(user => user.id === id);
        if(existingUser) {
          existingUser.name = name;
          existingUser.category = category;
          existingUser.description = description;
          existingUser.price = price;
        }
      },
  },
});

export default BookSlice.reducer;
export const { addBook, deleteBook,editBookDetail } = BookSlice.actions;
