import { mount } from "@vue/test-utils";
import Search from "./Search";

describe("Search", () => {
  it("should start with the search value equal to empty", () => {
    const wrapper = mount(Search);
    expect(wrapper.vm.search).toEqual("");
  });

  it("If the search model value is change when value input change", async () => {
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    await input.setValue("58000000");
    //await input.trigger("change");
    expect(wrapper.vm.search).toEqual("58000000");
  });
});
