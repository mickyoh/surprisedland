'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // const results = ['大吉', '大吉', '大吉', '大吉', '凶'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '森進一'; // 5%
    } else if (n < 0.3) {
      btn.textContent = '芦田愛菜'; // 15%
    } else if (n < 0.4) {
        btn.textContent = '美川憲一'; // 15%
    } else if (n < 0.5) {
        btn.textContent = '叶姉妹'; // 15%
    } else if (n < 0.6) {
        btn.textContent = '明石家さんま'; // 15%
    } else if (n < 0.7) {
        btn.textContent = '叶姉妹'; // 15%
    } else if (n < 0.8) {
        btn.textContent = '伊藤博文'; // 15%
    } else if (n < 0.9) {
        btn.textContent = '女王卑弥呼'; // 15%
    } else {
      btn.textContent = 'マイケルJフォックス'; // 80%
    }
  });
}