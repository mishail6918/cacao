const TELEGRAM_BOT_TOKEN = "8233765151:AAF8MdQd9HIkwSGUF-b01jIkDgxCBDMSq88"; // Получите у @BotFather
const TELEGRAM_CHAT_ID = "narrativ_test_auth_bot"; // ID вашего чата

// Функция отправки в Telegram
async function sendToTelegram(formData) {
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const message = `Новая заявка: ${formData.name}, ${formData.phone}`;

  try {
    const response = await fetch(PROXY_URL + TELEGRAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

// Обработчик отправки формы
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form[method="post"]');

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Получаем данные формы
      const formData = {
        name: document.querySelector("#name").value.trim(),
        phone: document.querySelector("#phone").value.trim(),
        task: document.querySelector('[name="task"]').value,
        flow: document.querySelector('[name="flow"]').value,
      };

      // Валидация
      if (!formData.name) {
        alert("Пожалуйста, введите ваше имя");
        return;
      }

      if (!formData.phone) {
        alert("Пожалуйста, введите ваш телефон");
        return;
      }

      // Показываем индикатор загрузки
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = "Отправка...";
      submitButton.disabled = true;

      try {
        // Отправляем в Telegram
        const telegramSuccess = await sendToTelegram(formData);

        if (telegramSuccess) {
          alert(
            "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время."
          );
          form.reset();
        } else {
          alert("Ошибка отправки. Пожалуйста, попробуйте еще раз.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
      } finally {
        // Восстанавливаем кнопку
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }
});

function countDown(class_) {
  let timer = document.querySelector(class_);
  if (
    localStorage.getItem("sec" + class_) &&
    localStorage.getItem("min" + class_)
  )
    var a = localStorage.getItem("min" + class_),
      b = localStorage.getItem("sec" + class_);
  else
    (a = timer.getAttribute("data-minutes")),
      (b = timer.getAttribute("data-seconds"));
  var d = setInterval(function () {
    0 <= parseInt(a) &&
      -1 !== parseInt(b) &&
      (0 === parseInt(b) && 0 !== parseInt(a) && (a--, (b = 59)),
      (timer.innerText = (10 > a ? "0" + a : a) + " " + (10 > b ? "0" + b : b)),
      0 === parseInt(b) &&
        0 === parseInt(a) &&
        (a--, (b = 0), (timer.innerText = "00 00"), clearInterval(d)),
      b--,
      localStorage.setItem("sec" + class_, b),
      localStorage.setItem("min" + class_, a));
  }, 1e3);
}
// countDown('.time');

if (parseInt(localStorage.getItem("shown__"))) {
  countDown(".time");
  $(".order").css("display", "block");
  $(".wheel__wrapper").hide();
}

$(".btn--submit").click(function () {
  countDown(".time");
  $(".order").addClass("shown__");
  localStorage.setItem("shown__", "1");
});

var resultWrapper = document.querySelector(".overlay"); /*оверлей попап*/
var wheel = document.querySelector(".prize-wheel"); /* имидж колеса*/
$(".wheel__cursor").click(function () {
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("spin"); /* класс анимации вращения */
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);

    wheel.classList.add("rotated");
  }
});

$(".close-popup, .btn-popup").click(function (e) {
  e.preventDefault();
  $(".wheel__wrapper").slideUp(); /* обертка с барабаном */
  $(".order").slideDown(); /* обертка с формой заказа */
  $(".overlay").fadeOut();
});

$(".btn-popup").click(function () {
  $(".bottom-link").attr(
    "href",
    "https://pillsenmag.com/click.php?lp=1&place=bottom"
  );
});

var element = $("#teaser-comment"),
  teaserLoad = $("#comment-load"),
  count = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
$(window).scroll(function () {
  var a = $(window).scrollTop() + $(window).height(),
    b = element.offset().top;
  a > b &&
    0 == count &&
    (teaserLoad.addClass("visible"),
    (count = 1),
    localStorage.setItem("count", count));
});

bannerImage.addEventListener("change", function (a) {
  loadImageFileAsURL2(a, "#base64Img", "ImgBase64");
});
userFile.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#userPic", "userFotoImg");
});
$('a[href="#policy"]').click(function (a) {
  a.preventDefault();
  $(".overlay-policy").fadeIn();
});
$(".policy-close").click(function () {
  $(".overlay-policy").fadeOut();
});
$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault();
    a = Math.ceil(Number($("#minus_weight").val()) / 0.666666);
    Number($("#weight").val()) > Number($("#minus_weight").val()) + 40
      ? $(".formResult").html(
          "<p><b>Si vous suivez les instructions ci-dessous, vous pourrez perdre " +
            $("#minus_weight").val() +
            " kg" +
            " en seulement " +
            a +
            " jours sans régime ni exercice!</b></p><p>" +
            "Pensez-vous que c'est impossible? Lisez l'article ci-dessous jusqu'à la fin et vous changerez d'avis. J'espère que cela changera votre vie!</p>"
        )
      : $(".formResult").html(
          "<p><b>\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435" +
            " \u0434\u0430\u043d\u043d\u044b\u0435.</b></p>"
        );
    $(".formResult").css({
      transition: "background 1s",
      backgroundColor: "#92c3439e",
      border: "2px solid #92c343",
    });
    setTimeout(function () {
      $(".formResult").css({ backgroundColor: "#fff" });
    }, 2e3);
  });
});

/* Сlik LPT */
var xhr = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll('a[href*="img"]');
  // var link = document.querySelectorAll('a[href*="url"]');
  var form = document.querySelector(".wheel");
  var wheel_cursor = document.querySelector(".wheel__cursor");
  var topBtn = document.querySelectorAll('a[href*="toform"]');
  var popup = document.querySelector(".btn.btn-popup");
  // var bottomLink = document.querySelector(".bottom-link");
  var pic = document.querySelectorAll('a[href*="pic"]');
  var order = document.querySelectorAll('a[href*="order"]');
  var bottom_teaser = document.querySelectorAll('a[href*="offer"]');

  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.addEventListener("click", (e) => {
      e.preventDefault();
      var href = e.currentTarget.href;
      xhr.open("GET", href);
      xhr.send();
      navigator.sendBeacon(href);
    });
  }

  wheel_cursor.addEventListener("click", (e) => {
    var href1 = e.currentTarget.dataset.link;
    xhr.open("GET", href1);
    xhr.send();
  });

  for (var i = 0; i < topBtn.length; i++) {
    var btn = topBtn[i];
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      form.scrollIntoView({ block: "start", behavior: "smooth" });
      var href2 = e.currentTarget.href;
      xhr.open("GET", href2);
      xhr.send();
    });
  }

  bottomLink.addEventListener("click", (e) => {
    e.preventDefault();
    form.scrollIntoView({ block: "start", behavior: "smooth" });
    var href3 = e.currentTarget.href;
    xhr.open("GET", href3);
    xhr.send();
  });

  popup.addEventListener("click", (e) => {
    var href4 = e.currentTarget.dataset.link;
    xhr.open("GET", href4);
    xhr.send();
  });

  for (var i = 0; i < pic.length; i++) {
    var pics = pic[i];
    pics.addEventListener("click", (e) => {
      e.preventDefault();
      var href4 = e.currentTarget.href;
      xhr.open("GET", href4);
      xhr.send();
      navigator.sendBeacon(href4);
    });
  }

  popup = document.querySelectorAll(".btn-popup");
  for (var i = 0; i < popup.length; i++) {
    var btns = popup[i];
    btns.addEventListener("click", (e) => {
      var href5 = e.currentTarget.dataset.link;
      xhr.open("GET", href5);
      xhr.send();
    });
  }

  for (var i = 0; i < link.length; i++) {
    var lnk = link[i];
    lnk.addEventListener("click", (e) => {
      e.preventDefault();
      form.scrollIntoView({ block: "start", behavior: "smooth" });
      var href6 = e.currentTarget.href;
      xhr.open("GET", href6);
      xhr.send();
    });
  }

  videoLpt = document.querySelectorAll(".video-wrap");
  for (var i = 0; i < videoLpt.length; i++) {
    var videoLink = videoLpt[i];
    videoLink.addEventListener("click", (e) => {
      var href7 = e.currentTarget.dataset.link;
      xhr.open("GET", href7);
      xhr.send();
      // navigator.sendBeacon(href7);
    });
  }

  for (var i = 0; i < order.length; i++) {
    var ord = order[i];
    ord.addEventListener("click", (e) => {
      e.preventDefault();
      form.scrollIntoView({ block: "start", behavior: "smooth" });
      var href8 = e.currentTarget.href;
      xhr.open("GET", href8);
      xhr.send();
    });
  }

  for (var i = 0; i < bottom_teaser.length; i++) {
    var bottoff = bottom_teaser[i];
    bottoff.addEventListener("click", (e) => {
      e.preventDefault();
      form.scrollIntoView({ block: "start", behavior: "smooth" });
      var href9 = e.currentTarget.href;
      xhr.open("GET", href9);
      xhr.send();
    });
  }
});
