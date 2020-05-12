import Header from "./components/Header";
import Main from "./components/Main";
import {fetchUrl, fetchData} from "./components/FetchData"
import '../src/css/style.css'
import places from 'places.js'



const page = document.querySelector('#content');
page.append(Header(), Main());

// start search name autocomplete
const getSearch = document.querySelector('#search')
const fixedOptions = {
  appId: 'plN8796X3W30',
  apiKey: 'c568c1cb9061fe015472a6d3ddbb9356',
  container: getSearch
};
places(fixedOptions)

//  start get form
const getSearchForm = document.querySelector('#searchForm')

const runSearch = (e) => {
  e.preventDefault()
  let data = e.target.elements[0].value.split(',')
  console.log(data[0])
}

getSearchForm.addEventListener('submit', runSearch)


// async function run() {

//   let url  = fetchUrl("enugu");
//   let data = await fetchData(url)
//   console.log(data)
// }
// run()


