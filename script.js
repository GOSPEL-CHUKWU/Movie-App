const hover = document.querySelectorAll('.container-img');
const displayButtons = document.querySelectorAll('.action-btn');
const buttons = document.querySelectorAll('button');

document.addEventListener('mouseover', function (e) {
  // console.log(buttons);
  // console.log(e.target);
  for (const [key, value] of hover.entries()) {
    for (const [key, value] of displayButtons.entries()) {
      if (e.target === hover[key]) {
        // console.log('Ion get');
        displayButtons[key].classList.remove('hidden');
      } else {
        displayButtons[key].classList.add('hidden');
      }
    }
  }
});

//Remember that you've not finished the project, remember that the problems are that the download and play buttons; don't have there icons and the don't come out when you hover(you are seeing it cos its on opacity) and another problem is the hovering over of the buttons, the disappear (the add back the hidden class)... Check for more, I might have missed some... add more pictures if you can
