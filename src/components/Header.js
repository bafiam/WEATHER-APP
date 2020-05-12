import { element, text } from './MakeElements';
import '../css/header.css'

const Header = () => {
  const header = element('HEADER');
  const nav = element('NAV');
  const div1 = element('DIV');
  const p = element('P');
  const pTxt = text('Weather app');

  p.appendChild(pTxt);
  div1.appendChild(p);
  

  nav.append(div1);

  header.append(nav);
  return header;
};

export default Header;