//監視対象が範囲内に現れたら実行する動作
const showKirin = (entries) => {
  console.log(entries[0]);
};
//監視ロボットの設定
const kirinObserver = new IntersectionObserver(showKirin);
//#Kirinを監視するよう指示
kirinObserver.observe(document.querySelector('#kirin'));

/*
1〜8行目をまとめると
監視ロボット「kirinObserver」に
「「#kirin」を監視してね、エリア内に入ったらコンソールに「キリンさんです」と出力してね」
という指示を送った
*/