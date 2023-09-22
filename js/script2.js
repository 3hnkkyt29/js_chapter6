const items = document.querySelectorAll('.img-item');
// // cssファイルと同様「.img-item」にする必要あり、「.」忘れない
// 取得する要素はIDではなくクラスなのでカッコ内は「.img-item」

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity:[0,1], //透明から不透明に
    //rotate:['x 90deg', 0], //回転しながら画像が現れる
    translate:['0 50px', 0], //下から浮き上がってくるように画像が現れる
  };
  const options = {
    duration: 600, //再生時間600ミリ秒
    delay: i * 300,//delay=アニメーションの開始時間を遅らせることができる
    //300=0.3秒
    // delay: 300　と記述すると全ての画像が300億れで表示されるので変数iをつける
    fill: 'forwards', //再生後不透明を維持
  };
  items[i].animate(keyframes, options);
}
