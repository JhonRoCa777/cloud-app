import { solicitudeTableDTO_IS, type SolicitudeTableDTO } from "@/models";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const SentSlice = createSlice({
  name: 'Sent',
  initialState: solicitudeTableDTO_IS,
  reducers: {
    setSentStore: (_state, action: PayloadAction<SolicitudeTableDTO[]>) => action.payload,
    resetSentStore: () => []
  }
});

/* eslint-disable react-refresh/only-export-components */
export const { setSentStore, resetSentStore } = SentSlice.actions;
