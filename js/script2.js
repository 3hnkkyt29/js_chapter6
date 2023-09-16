const items = document.querySelectorAll('.img-item');
// // cssファイルと同様「.img-item」にする必要あり、「.」忘れない

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity:[0,1]
  };
  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(keyframes, options);
}
