import Header from "./components/Header";
import Main from "./components/Main";
import { fetchUrl, fetchData } from "./components/FetchData";
import "../src/css/style.css";
import places from "places.js";

const page = document.querySelector("#content");
page.append(Header(), Main());

// start search name autocomplete
const getSearch = document.querySelector("#search");
const fixedOptions = {
  appId: "plN8796X3W30",
  apiKey: "c568c1cb9061fe015472a6d3ddbb9356",
  container: getSearch,
};
places(fixedOptions);

const run = async (name) => {
  let url = fetchUrl(name);
  let responce = await fetchData(url);
  return responce;
};

const reset = () => {
  getCity.innerHTML = "";
  document.querySelector("#mainOne h5").innerHTML = "";
  document.querySelector("#mainTwo h5").innerHTML = "";
  document.querySelector("#mainThree h5").innerHTML = "";
  document.querySelector("#mainFour h5").innerHTML = "";
};

const appendData = async () => {
  let data = "Nairobi"
  if (data) {
    const getData = await run(data);
    if (getData.error === undefined) {
      reset();
      getCity.append(data);
      document.querySelector("#mainOne h5").append(getData.wind.speed + " m/s");
      document
        .querySelector("#mainTwo h5")
        .append(getData.weather[0].description);
      document
        .querySelector("#mainThree h5")
        .append(getData.main.humidity + " %");
      document
        .querySelector("#mainFour h5")
        .append(getData.main.temp + " degrees");
    } else {
      reset();
      getCity.append(getData.error);
    }
  }

}
appendData()
const runSearch = async (e) => {
  e.preventDefault();
  let data = e.target.elements[0].value.split(",");
  if (data) {
    const getData = await run(data);
    if (getData.error === undefined) {
      reset();
      getCity.append(e.target.elements[0].value);
      document.querySelector("#mainOne h5").append(getData.wind.speed + " m/s");
      document
        .querySelector("#mainTwo h5")
        .append(getData.weather[0].description);
      document
        .querySelector("#mainThree h5")
        .append(getData.main.humidity + " %");
      document
        .querySelector("#mainFour h5")
        .append(getData.main.temp + " degrees");
    } else {
      reset();
      getCity.append(getData.error);
    }
  }
};


const getCity = document.querySelector("#cityName");
document.querySelector("#searchForm").addEventListener("submit", runSearch);
