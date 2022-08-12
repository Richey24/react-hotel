const initialState = [];

export const customerActions = {
  setCustomers: (customers) => ({
    type: "SET_CUSTOMERS",
    payload: customers,
  }),

  updateCustomer: (updates) => ({
    type: "UPDATE_CUSTOMER",
    payload: { ...updates, status: "Available" },
  }),

  deleteCustomer: (id) => ({
    type: "DELETE_CUSTOMER",
    payload: id,
  }),
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return action.payload.map((customer, index) => ({
        ...customer,
        serialNumber: index + 1,
      }));
    case "UPDATE_CUSTOMER":
      return [...state, action.payload];
    case "DELETE_CUSTOMER":
      return state.filter((v) => v.room === action.payload);
    default:
      return state;
  }
};
