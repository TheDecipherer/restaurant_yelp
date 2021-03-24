import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
    Authorization:
      "Bearer D_M5Oto1SrRpDGtiWcOPIqZlGjeTLORuM7bZSl03-xmwkwHyuOtZ62_hBa777SLtZFdmF9LWGqpzAbsXvBIQnkWph59djm80xLWrPfw-2xJN6mraoW0HV902oMpaYHYx",
  },
});
