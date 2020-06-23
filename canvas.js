window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  // resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // variables
  let painting = false;

  // start and end position
  function startPosition() {
    painting = true;
  }
  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  // draw
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }


  // event listeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', endPosition);
  canvas.addEventListener('mousemove', draw);









})
