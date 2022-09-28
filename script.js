const gallery = document.getElementById('gallery');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

gallery.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - gallery.offsetLeft;
  const scroll = x - startX;
  gallery.scrollLeft = scrollLeft - scroll;
});

gallery.addEventListener('mousedown', startDragging, false);
gallery.addEventListener('mouseup', stopDragging, false);
gallery.addEventListener('mouseleave', stopDragging, false);