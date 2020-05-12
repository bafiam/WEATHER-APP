import { element, text} from "./MakeElements";
import '../css/search.css'
const searchForm = () => {
  const div1 = element('FORM');
  div1.setAttribute('id', 'searchForm');
  const input = element('INPUT');
  input.setAttribute('id', 'search');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter City name ...');

  div1.appendChild(input);
  return div1
}
export default searchForm