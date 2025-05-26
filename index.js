const img= document.getElementById("myImage");

img.addEventListener("click", () =>{
    img.classList.remove("bounce-animation");
    void img.offsetWidth;
    img.classList.add("bounce-animation");
})

const img2= document.getElementById("myImage2");

img2.addEventListener("click", () =>{
    img2.classList.remove("bounce-animation");
    void img2.offsetWidth;
    img2.classList.add("bounce-animation");
})

const img3= document.getElementById("myImage3");

img3.addEventListener("click", () =>{
    img3.classList.remove("bounce-animation");
    void img3.offsetWidth;
    img3.classList.add("bounce-animation");
})



const btn = document.getElementById("moveBtn");
const image = document.getElementById("myImage");

let moved = false;

btn.addEventListener("click", () => {
  if (!moved) {
    image.style.left = "300px"; // 動かす距離
  } else {
    image.style.left = "0";
  }
  moved = !moved;
});



//リアクションボタンNOデータレイヤー送信//
const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
});




const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');

    // ★★★ ここから追加 ★★★
    // データレイヤーにイベントをプッシュ
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'user_reaction',     // GTMで受け取るカスタムイベント名
        'reaction_type': 'like',      // リアクションの種類（カスタムディメンション用）
        'reaction_value': 1           // リアクションの数値（カスタムメトリクス用）
    });
    // ★★★ ここまで追加 ★★★
});



//３ページ以上遷移したユーザーのキーイベント//
function() {
  try {
    var pageViews = sessionStorage.getItem('gtm_page_views');
    if (pageViews) {
      pageViews = parseInt(pageViews) + 1;
    } else {
      pageViews = 1;
    }
    sessionStorage.setItem('gtm_page_views', pageViews);
    return pageViews;
  } catch (e) {
    return undefined;
  }
}
