import { RootState } from "../store";

export const selectCurrent = (state:RootState) => state.current.data;