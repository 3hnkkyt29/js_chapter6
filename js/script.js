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