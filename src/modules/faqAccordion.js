const faqAccordion = () => {
  const accordion = document.querySelector('.accordion');
  const titleBlocks = document.querySelectorAll('h2.title_block');

  titleBlocks.forEach((item) => {
    item.addEventListener('click', (e) => {
      titleBlocks.forEach((item) => {
        if (e.target.classList.contains('msg-active')) {
          e.target.classList.remove('msg-active');
        } else {
          titleBlocks.forEach((item) => {
            item.classList.remove('msg-active');
          });
          e.target.classList.add('msg-active');
        }
      });
    });
  });
};

export default faqAccordion;
