function MessToast({ title, message, type, duration }) {
  let main = dom("#toast");

  if (main) {
    let icon = {
      success: "<i class='fa-solid fa-face-grin-hearts'></i>",
      warning: "<i class='fa-solid fa-face-grin-squint-tears'></i>",
      error: "<i class='fa-solid fa-face-tired'></i>",
      info: "<i class='fa-solid fa-face-kiss-beam'></i>",
    };
    let delay = (duration / 1000).toFixed(2);

    let toast = document.createElement("div");
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideIn 0.3s ease, fadeOut linear 1s ease ${delay}s forwards`;

    let toastId = setTimeout(() => {
      toast.remove(toast);
    }, duration + 1000);
    main.appendChild(toast);

    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        toast.remove(toast);
        clearTimeout(toastId);
      }
    };

    toast.innerHTML = `
            <div class="toast__mgs"></div>
            <div class="toast__icon">
                ${(icon[type] && icon[type]) || ""}
            </div>
            <div class="toast__body">
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
            <div class="toast__close">
                <i class='bx bx-x'></i>
            </div>
        `;
  }
}

function showSuccessMess(message) {
  MessToast({
    title: "Congratulations ! Fan Cùng Quỷ Đỏ !",
    message:
      message || "Chúc Mừng ! Tài khoản của bạn đã được đăng ký thành công",
    type: "success",
    duration: 4000,
  });
}

function showErrorMess(message) {
  MessToast({
    title: "Glory Glory Man United ! Bạn có chút vấn đề thông tin",
    message:
      message ||
      "Xin Lỗi ! Bạn đăng ký form không hợp lệ! Vui lòng đăng ký đúng như form ",
    type: "error",
    duration: 3000,
  });
}

function showInfoMess(message) {
  MessToast({
    title: "Congratulations! You have a little bit about INFORM?",
    message: message || "Bạn đã xóa thành công người dùng trong trung tâm !",
    type: "info",
    duration: 3000,
  });
}
