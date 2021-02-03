import { mount } from "@vue/test-utils";
import Result from "./Result";

describe("Result", () => {
  let resultComponent;

  beforeEach(() => {
    resultComponent = mount(Result);
  });

  it("should be start with value null", () => {
    expect(resultComponent.vm.result).toBeNull();
  });
});
