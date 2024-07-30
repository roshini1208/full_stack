// src/component/EventSlice1.js
import { createSlice } from '@reduxjs/toolkit';

const eventSlice1 = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
    },
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.findIndex((event) => event.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedEvent };
      }
    },
    deleteEvent: (state, action) => {
      const index = state.findIndex((event) => event.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice1.actions;
export default eventSlice1.reducer;
