const faqAccordion = () => {
  const accordion = document.querySelector('.accordion');
  const titleBlocks = document.querySelectorAll('h2.title_block');
  console.log(titleBlocks);

  titleBlocks.forEach((item) => {
    item.addEventListener('click', (e) => {
      titleBlocks.forEach((item) => {
        if (item.classList.contains('msg-active')) {
          item.classList.remove('msg-active');
        }
      });
      e.target.classList.toggle('msg-active');
    });
  });
};

export default faqAccordion;
