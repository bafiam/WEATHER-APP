import { element, text } from './MakeElements';
import '../css/displayData.css';

const weatherData = () => {
  const div = element('DIV');
  div.setAttribute('id', 'weatherDiv');
  const cityP = element('P');
  cityP.setAttribute('id', 'cityName');

  const divMain = element('DIV');
  divMain.setAttribute('id', 'divMain');

  const div1 = element('DIV');
  div1.setAttribute('id', 'mainOne');
  const head4 = element('H4');
  const head4Text = text('Wind');
  const icon = element('I');
  icon.setAttribute('class', 'fas fa-wind');
  const head5 = element('H5');

  const div101 = element('DIV');
  div101.setAttribute('id', 'mainTwo');
  const head401 = element('H4');
  const head4Text01 = text('Cloudiness');
  const icon01 = element('I');
  icon01.setAttribute('class', 'fas fa-cloud');
  const head501 = element('H5');

  const div102 = element('DIV');
  div102.setAttribute('id', 'mainThree');
  const head402 = element('H4');
  const head4Text02 = text('Humidity');
  const icon02 = element('I');
  icon02.setAttribute('class', 'fas fa-smog');
  const head502 = element('H5');

  const div103 = element('DIV');
  div103.setAttribute('id', 'mainFour');
  const head403 = element('H4');
  const head4Text03 = text('Temperature');
  const icon03 = element('I');
  icon03.setAttribute('class', 'fas fa-sun');
  const head503 = element('H5');

  head4.append(head4Text);
  div1.append(head4, icon, head5);

  head401.append(head4Text01);
  div101.append(head401, icon01, head501);

  head402.append(head4Text02);
  div102.append(head402, icon02, head502);

  head403.append(head4Text03);
  div103.append(head403, icon03, head503);


  divMain.append(div1, div101, div102, div103);


  div.append(cityP, divMain);

  return div;
};
export default weatherData;