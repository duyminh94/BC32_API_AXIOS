/* Kiểm Tra Tài Khoản */
function ValidateID() {
  let taikhoan = dom("#TaiKhoan").value;
  let spanEl = dom("#tbTaiKhoan");

  if (!taikhoan) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Tài Khoản không được để trống";
    return false;
  }
  if (taikhoan.length < 4 || taikhoan.length > 10) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Tài Khoản ở trung tâm phải nhập từ 4 - 10 ký tự";
    return false;
  }
  if (!validatecheckID(taikhoan)) {
    showInfoMess('Tài Khoản đã có trên hệ thống vui lòng đăng ký tài khoản khác!')
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}
/* Check tài khoản giống nhau */
function validatecheckID(taikhoan) {
  let spanEl = dom("#tbTaiKhoan");
  let findId = users.find((user) =>{
    return user.taikhoan === taikhoan
  })
  if(findId) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Tài Khoản đã tồn tại"
    return false;
  }
  return true
}

/* Kiểm tra họ tên */

function validateName() {
  let name = dom("#HoTen").value;
  let spanEl = dom("#tbHoten");

  if (!name) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Họ Tên Không Được Để Trống";
    return false;
  }
  let regex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (!regex.test(name)) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Tất cả phải là chữ!";
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}

/* Kiểm Tra Mật Khẩu */
function validatePassword() {
  let password = dom("#MatKhau").value;
  let spanEl = dom("#tbMatKhau");

  if (!password) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Mật Khẩu Không Được Để Trống";
  }
  let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (!regex.test(password) || password.length < 6 || password.length > 8) {
    spanEl.style.display = "Block";
    spanEl.innerHTML =
      "Mật khẩu từ 6 đến 8 kí tự trong đó bao gồm 1 kí tự in hoa, 1 kí tự thường, 1 kí tự số và 1 kí tự đặc biệt";
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}
/* Kiểm Tra Email */
function validateEmail() {
  let email = dom("#Email").value;
  let spanEl = dom("#tbEmail");

  if (!email) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Email Không Được Bỏ Trống";
    return false;
  }
  let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!regex.test(email)) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Email Sai Định Dạng";
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}
/* Kiểm tra hình ảnh */
function validateImage() {
  let image = dom("#HinhAnh").value;
  let spanEl = dom("#tbHinhAnh");

  if (!image) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Hình Ảnh không được không để trống";
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}
/* Kiểm tra chức vự */
function validatePostion() {
  let loaiND = dom("#loaiNguoiDung").value;
  let spanEl = dom("#tbNguoiDung");

  if (!loaiND) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Người dùng không được để trống";
    
  } else if(loaiND === 'DSNguoiDung') {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Vui Lòng Chọn Người Dùng";
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}
/* Kiểm tra Ngôn Ngữ */
function validateTrans() {
  let ngonngu = dom("#loaiNgonNgu").value;
  let spanEl = dom("#tbNgonNgu");

  if (!ngonngu) {
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Ngôn Ngữ Không Được Để Trống"; 
  } else if(ngonngu === 'DSNgonNgu'){
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Vui lòng Chọn Ngôn Ngữ"; 
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}
/* Kiểm tra Mô tả */
function validateDescribe(){
  let mota = dom('#MoTa').value
  let spanEl = dom('#tbMoTa')

  if(!mota){
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Mô tả vui không được để trống";
    return false;
  }
  if(mota.length < 10 || mota.length > 60){
    spanEl.style.display = "Block";
    spanEl.innerHTML = "Nhập mô tả bản thân không được nhỏ hơn 10 ký tự và không quá 60 ký tự";
    return false;
  }
  spanEl.style.display = "none";
  spanEl.innerHTML = "";
  return true;
}

function dom(selector) {
  return document.querySelector(selector);
}
