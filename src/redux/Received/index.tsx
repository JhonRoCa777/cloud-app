import { solicitudeTableDTO_IS, type SolicitudeTableDTO } from "@/models";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const ReceivedSlice = createSlice({
  name: 'Received',
  initialState: solicitudeTableDTO_IS,
  reducers: {
    setReceivedStore: (_state, action: PayloadAction<SolicitudeTableDTO[]>) => action.payload,
    resetReceivedStore: () => []
  }
});

/* eslint-disable react-refresh/only-export-components */
export const { setReceivedStore, resetReceivedStore } = ReceivedSlice.actions;
