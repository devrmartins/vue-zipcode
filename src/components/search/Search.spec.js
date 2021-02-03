import axios from "axios";
import { mount } from "@vue/test-utils";
import Search from "./Search";

jest.mock("axios");

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
  let searchComponent;
  const zipcode = "01001000";

  const search = async () => {
    axios.get.mockResolvedValue(data);
    await searchComponent.find("input").setValue(zipcode);
    await searchComponent.vm.search();
  };

  const haveProperty = async (property) => {
    await search();
    expect(searchComponent.vm.result).toHaveProperty(property);
  };

  beforeEach(() => {
    searchComponent = mount(Search);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should start with value equal to empty", () => {
    expect(searchComponent.vm.zipcode).toEqual("");
  });

  it("if the search model value is change when value input change", async () => {
    const input = searchComponent.find("input");
    await input.setValue("58000000");
    expect(searchComponent.vm.zipcode).toEqual("58000000");
  });

  it("cannot is empty when button is clicked", async () => {
    const button = searchComponent.find("button");
    await button.trigger("click");

    expect(searchComponent.html()).toContain("Zipcode is required");
  });

  it("should have just numbers", async () => {
    const input = searchComponent.find("input");
    await input.setValue("58000-000");
    expect(input.element.value).toEqual("58000000");
  });

  it("should have a maximum of 8 characters", async () => {
    const input = searchComponent.find("input");
    await input.setValue("99995800099999-999999900000");
    expect(input.element.value.length).toEqual(8);
  });

  it("should have a minimum of 8 characters", async () => {
    const input = searchComponent.find("input");
    const button = searchComponent.find("button");
    await input.setValue("999");
    await button.trigger("click");

    expect(searchComponent.html()).toContain("Zipcode must be 8 characters");
  });

  it("if zipcode is empty don't call method search", async () => {
    axios.get.mockResolvedValue(data);
    const button = searchComponent.find("button");
    await button.trigger("click");

    expect(searchComponent.html()).toContain("Zipcode is required");
  });

  it("Call search method and check result", async () => {
    await search();
    expect(searchComponent.vm.result).toEqual(data.data);
  });

  it("the response should have a logradouro", async () =>
    haveProperty("logradouro"));
  it("the response should have a bairro", async () => haveProperty("bairro"));
  it("the response should have a localidade", async () =>
    haveProperty("localidade"));
  it("the response should have a uf", async () => haveProperty("uf"));
  it("the response should have a ddd", async () => haveProperty("ddd"));
});
