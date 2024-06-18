import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EditDocumentState {
  value: boolean;
}

const initialState: EditDocumentState = {
  value: false,
};

const EditDocumentSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setEdit: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setEdit } = EditDocumentSlice.actions;
export default EditDocumentSlice.reducer;
