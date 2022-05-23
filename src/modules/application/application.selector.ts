import { RootState } from "../../infrastructure/store";

export const selectLoading = ({ application }: RootState) =>  application.loading;
