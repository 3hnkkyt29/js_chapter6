const items = document.querySelectorAll('.img-item');
// // cssファイルと同様「.img-item」にする必要あり、「.」忘れない
// 取得する要素はIDではなくクラスなのでカッコ内は「.img-item」

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity:[0,1] //透明から不透明に
  };
  const options = {
    duration: 600, //再生時間600ミリ秒
    // delay: i * 300,
    fill: 'forwards', //再生後不透明を維持
  };
  items[i].animate(keyframes, options);
}
