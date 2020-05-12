import { element, text} from "./MakeElements";
import searchForm from './Search';
import '../css/main.css'

const Main = () => {
  const main = element('MAIN');
  const mainDiv = element('DIV');
  mainDiv.setAttribute('id', 'maincontent');

  mainDiv.append(searchForm())

  main.append(mainDiv);

  return main;
};

export default Main;