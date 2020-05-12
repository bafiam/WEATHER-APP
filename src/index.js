import Header from "./components/Header";
import Main from "./components/Main";
import {fetchUrl, fetchData} from "./components/FetchData"
import '../src/css/style.css'


const page = document.querySelector('#content');

page.append(Header(), Main());


async function run() {

  let url  = fetchUrl("Nairobi");
  let data = await fetchData(url)
  console.log(data)
}
run()


