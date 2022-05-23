import ApplicationReducerModel from "../../infrastructure/models/application/applicationReducerModel";
import applicationReducer from "./application.reducer";

describe("application reducer", () => {
  const initialState: ApplicationReducerModel = {
    loading: false,
  };

  it("should handle initial state", () => {
    expect(applicationReducer(undefined, { type: "unknown" })).toEqual({
        loading: false
    });
  });
});
