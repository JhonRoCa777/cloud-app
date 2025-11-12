import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { type SolicitudeTableDTO } from "@/models";
import { SentSlice, ReceivedSlice } from "@/redux";

interface AppStore {
  SentSlice: SolicitudeTableDTO[],
  ReceivedSlice: SolicitudeTableDTO[],
}

export const Store = configureStore<AppStore>({
  reducer: {
    SentSlice: SentSlice.reducer,
    ReceivedSlice: ReceivedSlice.reducer,
  }
});

export const SentStore = () => useSelector((store: AppStore) => store.SentSlice);
export const ReceivedStore = () => useSelector((store: AppStore) => store.ReceivedSlice);
