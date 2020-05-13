import { element, text} from "./MakeElements";
import searchForm from './Search';
import '../css/main.css'
import weatherData from './DisplayData';

const Main = () => {
  const main = element('MAIN');
  const mainDiv = element('DIV');
  mainDiv.setAttribute('id', 'maincontent');

  mainDiv.append(searchForm(), weatherData())

  main.append(mainDiv);

  return main;
};

export default Main;