function toast({
  title = "",
  message = "",
  type = "toast--success",
  duration = 2000,
}) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // auto remove
    setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000); /*do thời gian ở animation phải cộng thêm 1s*/

    // ciick remove
    toast.onclick = function (e) {
      if (e.target.closest(".toast__more")) { /* click vào trung class sẽ xóa đi*/
        main.removeChild(toast); /* k có con tìm ra cha\*/
      }
    };
    const icons = {
      toast__success: "fas fa-circle-check",
      toast__more: "fas fa-circle-plus",
    };

    const icon = icons[type];
    const delay = (duration / 1000);

    toast.classList.add("toast", `${type}`); // tao class char ten là toast
    toast.style.animation = ` slide2 ease 1s,framOut linear 1s ${delay}s forwards`; /* forwards dừng ở annimation cuối*/
    toast.innerHTML = ` 
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast_body">
                      <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__more toast__msg">
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>`; /* cầm nội dung con đưa vào cha*/
    main.appendChild(toast);/* app xong đưa vào mani*/
  }
}

function showSucces() {
  toast({
    title: "Thành công!",
    message: "Bạn đã mua hàng thành công!",
    type: "toast__success",
    duration: 1000,
  });
}
function showMore() {
  toast({
    title: "Thành công!",
    message: "Bạn đã thêm thành công!",
    type: "toast__more",
    duration: 2000, /* time*/
  });
}
