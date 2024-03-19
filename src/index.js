import headerNumber from './modules/headerNumber';
import menu from './modules/menu';
import popupRepairTypes from './modules/popupRepairTypes';
import mask from './modules/mask';
import sendForm from './modules/sendForm';
import popupPrivacy from './modules/popupPrivacy';
import hints from './modules/hints';
import sliderRepairTypes from './modules/sliderRepairTypes';
import sliderPortfolio from './modules/sliderPortfolio';
import popupTransparency from './modules/popupTransparency';
import popupConsultation from './modules/popupConsultation';
import sliderReviews from './modules/sliderReviews';
import faqAccordion from './modules/faqAccordion';

headerNumber();
menu();
popupRepairTypes();
mask();
popupPrivacy();
hints();
sliderRepairTypes();
sliderPortfolio();
popupTransparency();
popupConsultation();
sliderReviews();
faqAccordion();

sendForm('feedback1');
sendForm('feedback2');
sendForm('feedback3');
sendForm('feedback4');
sendForm('feedback5');
sendForm('feedback6');

window.addEventListener('resize', () => {
  console.log('change');
  hints();
  popupTransparency();
  sliderRepairTypes();
});
