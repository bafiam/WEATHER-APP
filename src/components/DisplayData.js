import { element, text } from './MakeElements';
import '../css/displayData.css'

const weatherData = () => {
  const div = element('DIV');
  div.setAttribute('id','weatherDiv');
  const cityP = element('P');
  cityP.setAttribute('id','cityName')

  const divMain = element('DIV');
  divMain.setAttribute('id',"divMain")

  const div1 = element('DIV');
  div1.setAttribute('id',"mainOne")
  const head4 = element('H4');
  const head4Text = text('Wind')
  const icon = element('I');
  icon.setAttribute('class',"fas fa-wind")
  const head5 = element('H5');

  const div1_01 = element('DIV');
  div1_01.setAttribute('id',"mainTwo")
  const head4_01 = element('H4');
  const head4Text_01 = text('Cloudiness')
  const icon_01 = element('I');
  icon_01.setAttribute('class',"fas fa-cloud")
  const head5_01 = element('H5');

  const div1_02 = element('DIV');
  div1_02.setAttribute('id',"mainThree")
  const head4_02 = element('H4');
  const head4Text_02 = text('Humidity')
  const icon_02 = element('I');
  icon_02.setAttribute('class',"fas fa-smog")
  const head5_02 = element('H5');

  const div1_03 = element('DIV');
  div1_03.setAttribute('id',"mainFour")
  const head4_03 = element('H4');
  const head4Text_03 = text('Temperature')
  const icon_03 = element('I');
  icon_03.setAttribute('class',"fas fa-sun")
  const head5_03 = element('H5');

  head4.append(head4Text);
  div1.append(head4, icon, head5)

  head4_01.append(head4Text_01);
  div1_01.append(head4_01, icon_01, head5_01)

  head4_02.append(head4Text_02);
  div1_02.append(head4_02, icon_02, head5_02)

  head4_03.append(head4Text_03);
  div1_03.append(head4_03, icon_03, head5_03)


  divMain.append(div1, div1_01, div1_02, div1_03)




  div.append(cityP, divMain);

  return div

}
export default weatherData