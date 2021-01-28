import { mount } from "@vue/test-utils";
import Search from "./Search";

describe("Search", () => {
  it("should start with value equal to empty", () => {
    const wrapper = mount(Search);
    expect(wrapper.vm.search).toEqual("");
  });

  it("if the search model value is change when value input change", async () => {
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    await input.setValue("58000000");
    expect(wrapper.vm.search).toEqual("58000000");
  });

  it("cannot is empty when button is clicked", async () => {
    const wrapper = mount(Search);
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.html()).toContain("Search is required");
  });

  it("should have just numbers", async () => {
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    await input.setValue("58000-000");
    expect(input.element.value).toEqual("58000000");
  });

  it.todo("should call the api viacep");
  it.todo("the response should have a logradouro");
  it.todo("the response should have a bairro");
  it.todo("the response should have a localidade");
  it.todo("the response should have a uf");
  it.todo("the response should have a ddd");
});
