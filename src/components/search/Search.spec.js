import axios from "axios";
import { mount } from "@vue/test-utils";
import Search from "./Search";

jest.mock("axios");

const API = "http://viacep.com.br/ws";
const data = {
  data: {
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107",
  },
};

describe("Search", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should start with value equal to empty", () => {
    const wrapper = mount(Search);
    expect(wrapper.vm.zipcode).toEqual("");
  });

  it("if the search model value is change when value input change", async () => {
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    await input.setValue("58000000");
    expect(wrapper.vm.zipcode).toEqual("58000000");
  });

  it("cannot is empty when button is clicked", async () => {
    const wrapper = mount(Search);
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.html()).toContain("Zipcode is required");
  });

  it("should have just numbers", async () => {
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    await input.setValue("58000-000");
    expect(input.element.value).toEqual("58000000");
  });

  it("should have a maximum of 8 characters", async () => {
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    await input.setValue("99995800099999-999999900000");
    expect(input.element.value.length).toEqual(8);
  });

  it("should have a minimum of 8 characters", async () => {
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    const button = wrapper.find("button");
    await input.setValue("999");
    await button.trigger("click");

    expect(wrapper.html()).toContain("Zipcode is invalid");
  });

  it("should call the api viacep", async () => {
    axios.get.mockResolvedValue(data);
    const zipcode = "01001000";
    const wrapper = mount(Search);
    const input = wrapper.find("input");
    const button = wrapper.find("button");
    await input.setValue("01001000");
    await button.trigger("click");

    expect(axios.get).toHaveBeenCalledWith(`${API}/${zipcode}/json/`);
  });

  it("if zipcode is empty don't call the api viacep", async () => {
    axios.get.mockResolvedValue(data);
    const wrapper = mount(Search);
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(axios.get).toHaveBeenCalledTimes(0);
  });

  it.todo("the response should have a logradouro");
  it.todo("the response should have a bairro");
  it.todo("the response should have a localidade");
  it.todo("the response should have a uf");
  it.todo("the response should have a ddd");
});
