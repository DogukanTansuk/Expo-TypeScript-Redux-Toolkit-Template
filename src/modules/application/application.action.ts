import { AppThunk } from "../../infrastructure/store";
import { toggleLoading } from "./application.reducer";

export const toggleLoadingAction = (): AppThunk => (dispatch) => {
  dispatch(toggleLoading);
};
