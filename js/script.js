// 6-5
/*
Web Animations APIの基本の書き方
「動かす要素.animate(動かす内容, 再生時間);」

①動かす要素.animate({
  キー(プロパティ名):['開始の値', '終了の値'],
}, 再生時間);

②const keyframes(定数名はなんでもいいよ) ={
  キー(プロパティ名):['開始の値', '終了の値'],
};
動かす要素.animate(keyframes,再生時間);

上記①と②は同じ意味
*/
const heading = document.querySelector('#heading');
const keyframes = {
  opacity: [0,1], //開始時は0＝透明、終了時は1＝不透明
  translate: ['0 50px', 0],
};
// 6-7
const options = {
  duration: 2000,
  easing: 'ease',
};
// heading.animate(keyframes, 2000); をoptionsを呼び出す以下のように変更
heading.animate(keyframes, options);
// 1秒＝1000　すなわち上記は2秒かけて再生するように指示している

// 6-6
/*
一つの要素に複数のアニメーションをつけたい場合
①const keyframes = {
  プロパティ1: ['開始の値1', '終了の値1'],
  プロパティ2: ['開始の値2', '終了の値2'],
};
動かす要素.animate(keyframes, 再生時間);

②const keyframes = [
{
  プロパティ1: '開始の値1',
  プロパティ2: '開始の値2',
},
{
  プロパティ1: '終了の値1',
  プロパティ2: '終了の値2',
}
];
動かす要素.animate(keyframes, 再生時間);

上記①②のは同じ意味
井戸に動く内容が多い場合は②が適している
*/

// 6-7
/*
動かす時間や、タイミング、繰り返しの記述方法の基本
「動かす要素.animate(動かす内容, 動きの詳細);」

「
const keyframes = {
  キー（プロパティ名）:['開始の値', '終了の値'」,
};
cont options = {
  キー（プロパティ名）: '値',
};
動かす要素.animate(keyframes, options);
」
（定数名はなんでも良いよ）
*/
