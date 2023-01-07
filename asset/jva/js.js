//  Chuyển động các icon
// 1
window.addEventListener("load", function () {
  const nextBtn = this.document.querySelector(".slider-next");
  const prevBtn = this.document.querySelector(".slider-prev");
  const sliderWap = this.document.querySelector(".slider--warp");
  const inTruousp = document.querySelectorAll(".land__introduction");
  const sliderButton = document.querySelectorAll(".slider--buttoan");
  const sliderScoll = sliderWap.scrollWidth;
  [...inTruousp].forEach((item) => {
    item.classList.add("slider-item");
  });
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderItimWithd = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let postionX = 0;
  let index = 0;
  let number = 0;

  [...sliderButton].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...sliderButton].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const silderIndex = e.target.dataset.index;
      index = silderIndex;
      sliderMain.style = `transform : translateX(${-1 * index * 1300}px)`;
    })
  );
  // mobile
});

// 2
window.addEventListener("load", function () {
  const sliderTrons = document.querySelectorAll(".land__introductions1");
  const sliderButtons = document.querySelectorAll(".slider--buttoans");

  [...sliderTrons].forEach((vlim) => {
    vlim.classList.add("slider-items");
  });
  const sliderMains = document.querySelector(".slider-main-i");
  const sliderItemss = document.querySelectorAll(".slider-items");
  const sliderItimWithds = sliderItemss[0].offsetWidth;
  const sliderLengths = sliderItemss.length;
  let postionX = 0;
  let indexs = 0;

  [...sliderButtons].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...sliderButtons].forEach((er) => er.classList.remove("active"));
      e.target.classList.add("active");
      const silderIndexs = e.target.dataset.indexs;
      indexs = silderIndexs;
      sliderMains.style = `transform : translateX(${-1 * indexs * 1300}px)`;
    })
  );
});

// 3
window.addEventListener("load", function () {
  const sliderButtonss = document.querySelectorAll(".slider--imgButton");
  const sliderMainss = document.querySelector(".slider-mainImg");
  const sliderItemsss = document.querySelectorAll(".slider-itemimg");
  const sliderItimWithdss = sliderItemsss[0].offsetWidth;
  const sliderLengthss = sliderItemsss.length;
  let postionX = 0;
  let imgindex = 0;

  [...sliderButtonss].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...sliderButtonss].forEach((ri) => ri.classList.remove("active"));
      e.target.classList.add("active");
      const silderIndexss = e.target.dataset.imgindex;
      imgindex = silderIndexss;
      sliderMainss.style = `transform : translateX(${
        -1 * imgindex * 1300
      }px)`;
    })
  );
});

// Nút bấm tùy chọn

window.addEventListener("load", function () {
  const coLum100 = document.querySelector(".iteam-even");
  const ButtonBtn = document.querySelectorAll(".Button-btn");

  [...ButtonBtn].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...ButtonBtn].forEach((rim) => rim.classList.remove("active"));
      e.target.classList.add("active");
    })
  );
});

// Hiển kinh chát

window.addEventListener("load", function () {
  const baler = document.querySelector(".js-container");
  const coloserSawp = document.querySelector(".js-close--tawp");
  const conCart = document.querySelector(".tawk-chat-panel");

  function hidebian() {
    conCart.classList.add("accve");
  }

  function xoaHider() {
    conCart.classList.remove("accve");
  }

  baler.addEventListener("click", hidebian);
  coloserSawp.addEventListener("click", xoaHider);
});

// Chạy slider

window.addEventListener("load", function () {
  var index = 0;
  Chanonklick = function () {
    var imgs = ["./slider/img1.jpg", "./slider/img2.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if (index == 2) {
      index = 0;
    }
  };

  setInterval(Chanonklick, 5000);
});

// bật menu
window.addEventListener("load", function () {
  const menuBtn = document.querySelector(".menu--icon");
  const moBale = document.querySelector(".table__mobile");
  const coLosemenu = document.querySelector(".coloser-node");
  coLosemenu.onclick = function () {
    moBale.classList.remove("open");
  }

  function menuClickbtn() {
    moBale.classList.add("open");
  }

  menuBtn.addEventListener("click",menuClickbtn );
})

window.addEventListener("load", function () {
  // Đăng ký
  const buyBtn = document.querySelector(".js-buy-ticket");
  const rionlit = document.querySelector(".js-buy--sigin");
  const modalll = document.querySelector(".modal");
  const modalContainer = document.querySelector(".js-modal-Container");
  const colose = document.querySelector(".js--close--modal");

  // Hàm hiện
  function showBuyTickets() {
    modalll.classList.add("open");
  }

  // Hàm ẩn
  function showBuyTick__hider() {
    modalll.classList.remove("open");
  }

  //  Đăng ký
  buyBtn.addEventListener("click", showBuyTickets);
  colose.addEventListener("click", showBuyTick__hider);
  rionlit.addEventListener("click", showBuyTick__hider);
  modalll.addEventListener("click", showBuyTick__hider);

  modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
// Đâng nhập
window.addEventListener("load", function () {
  const buySigin = document.querySelector(".js-buy--sigin");
  const solehuy = document.querySelector(".js-buy-ticket");
  const modalRiot = document.querySelector(".modal-riot");
  const conTainer = document.querySelector(".js-modal-Containers");
  const coloser = document.querySelector(".js--close--modalli");

  function showBuySigin() {
    modalRiot.classList.add("open");
  }

  function showBuyTick__hider() {
    modalRiot.classList.remove("open");
  }

  solehuy.addEventListener("click", showBuyTick__hider);
  buySigin.addEventListener("click", showBuySigin);
  coloser.addEventListener("click", showBuyTick__hider);
  modalRiot.addEventListener("click", showBuyTick__hider);
  conTainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

window.addEventListener("load", function () {
  const extend = document.querySelector(".js-iconlit");
  const wards = document.querySelector(".silder__wards");
  const iConow = document.querySelector(".icon__row");
  function showtago_t() {
    wards.classList.toggle("toge");
    iConow.classList.toggle("fa-angle-down");
    iConow.classList.toggle("fa-angle-up");
  }

  extend.addEventListener("click", showtago_t);
});

window.addEventListener("load", function() {
  const zoOm = document.querySelectorAll('.sidier__gitsi--left');

  [ ...zoOm].forEach(item => {
    item.classList.add('btn-flex');
  })
})
