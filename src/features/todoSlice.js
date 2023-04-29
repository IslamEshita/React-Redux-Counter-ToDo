import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return { items: [...state.items, action.payload] };
    },
    clearTodo: () => {
      return { items: [] };
    },
    removeAt: (state, action) => {
      // Array containnig all the items
      let index = action.payload;
      let newItems = [...state.items];
      // Remove the item at the specific loation
      newItems.splice(index, 1);
      return {
        items: newItems,
      };
    },
  },
});

export const { addTodo, clearTodo, removeAt } = todoSlice.actions;
export default todoSlice.reducer;
