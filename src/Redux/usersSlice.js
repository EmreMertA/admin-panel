import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: 53451,
      name: 'Scott S. Calabrese',
      amount: 24.98,
      plan: 'Bussines',
      date: 'Oct 22, 2014',
      status: 'Paid',
      trackingNumber: '-',
    },
    {
      id: 53452,
      name: 'Teresa L. Doe',
      amount: 564.0,
      plan: 'Personal',
      date: 'Oct 22, 2014',
      status: 'Paid',
      trackingNumber: '-',
    },
    {
      id: 53453,
      name: 'Steve N. Horton',
      amount: 58.87,
      plan: 'Trial',
      date: 'Oct 22, 2014',
      status: 'Shipped',
      trackingNumber: '#CGX0089734531',
    },
    {
      id: 53454,
      name: 'Charles S Boyle',
      amount: 97.5,
      plan: 'Bussines',
      date: 'Oct 22, 2014',
      status: 'Paid',
      trackingNumber: '-',
    },
    {
      id: 53455,
      name: 'Lucy Doe',
      amount: 12.79,
      plan: 'Personal',
      date: 'Oct 22, 2014',
      status: 'Shipped',
      trackingNumber: '#CGX0089734531',
    },
    {
      id: 53456,
      name: 'Michael Bunr',
      amount: 249.99,
      plan: 'Trial',
      date: 'Oct 22, 2014',
      status: 'Shipped',
      trackingNumber: '#CGX0089734531',
    },
  ],
  user: { name: 'Emre' },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
