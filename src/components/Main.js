import { element, text} from "./MakeElements";
import '../css/main.css'

const Main = () => {
  const main = element('MAIN');
  const mainDiv = element('DIV');
  mainDiv.setAttribute('id', 'maincontent');

  main.append(mainDiv);

  return main;
};

export default Main;