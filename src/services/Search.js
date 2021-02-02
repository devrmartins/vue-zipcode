import axios from "axios";

class Search {
  get(zipcode) {
    return axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
  }
}

export default new Search();
