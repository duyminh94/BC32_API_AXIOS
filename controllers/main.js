let users = [];
GetUsers();
//////////////////////////////////////////////////////////////////
function GetUsers(searchTerm) {
  apiGetUsers(searchTerm)
    .then((response) => {
      console.log(response.data);
      users = response.data.map((user) => {
        return new User(
          user.id,
          user.taikhoan,
          user.matkhau,
          user.hoten,
          user.Email,
          user.image,
          user.ngonngu,
          user.loaiND,
          user.mota
        );
      });
      display(users);
    })
    .catch((error) => {
      console.log(error);
    });
}

function addUser(user) {
  apiaddUser(user)
    .then(() => {
      GetUsers();
      let isValid = ValidateForm();
      if (!isValid) {
        showErrorMess();
        return;
      }
      showSuccessMess()
      resetForm();
    })
    .catch((error) => {
      
      console.log(error);
    });
}

function deleteUser(userId) {
  apiDeleteUser(userId)
    .then(() => {
      GetUsers();
      showInfoMess()
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateUser(userId, user) {
  apiUpdateUser(userId, user)
    .then(() => {
      GetUsers();
      let isValid = ValidateForm("edit");
      if (!isValid) {
        showErrorMess();
        return;
      }
      showSuccessMess("Đã Cập Nhật Thành Công, Không Có Lỗi")
      resetForm()
    })
    .catch((error) => {
      showErrorMess('Vui Lòng F5 Lại để cập nhật lại thông tin người dùng')
      console.log(error);
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Hiển thị thông tin */
function display(users) {
  let output = users.reduce((result, user, index) => {
    return (
      result +
      `<tr>
        <td>${index + 1}</td>
        <td>${user.taikhoan}</td>
        <td>${user.matkhau}</td>
        <td>${user.hoten}</td>
        <td>${user.Email}</td>
        <td><img src="${user.image}" width="50px" height="50px" />
        </td>
        <td>${user.ngonngu}</td>
        <td>${user.loaiND}</td>
        <td>${user.mota}</td>
        <td>
        <button class='btn btn-primary'
        data-toggle='modal'
        data-target='#myModal'
        data-id='${user.id}'
        data-type='edit'>Sửa</button>
       <button class="btn btn-danger"
        data-id='${user.id}'
        data-type='delete'> Xóa
        </button>
        </td>
  </tr>`
    );
  }, "");

  dom("#tblDanhSachNguoiDung").innerHTML = output;
}

function dom(selector) {
  return document.querySelector(selector);
}
/* Reset Thông tin */
function resetForm() {
  dom("#ThongTinND").value = "";
  dom("#TaiKhoan").value = "";
  dom("#MatKhau").value = "";
  dom("#HoTen").value = "";
  dom("#Email").value = "";
  dom("#HinhAnh").value = "";
  dom("#loaiNgonNgu").value = "";
  dom("#loaiNguoiDung").value = "";
  dom("#MoTa").value = "";

  dom("#TaiKhoan").disabled = false;
}
//////////////////DOM//////////////////////////////////
/* Add */
dom("#btnThemNguoiDung").addEventListener("click", () => {
  dom(".modal-title").innerHTML = "Thêm Người Dùng";
  dom(".modal-footer").innerHTML = `
    <button class='btn btn-secondary' data-dismiss='modal'>Hủy</button>
    <button class='btn btn-primary' data-type='add'>Thêm</button>
    `;
  /* ResetForm */
  resetForm();
});

dom(".modal-footer").addEventListener("click", (evt) => {
  console.log(evt.target);
  let Eltype = evt.target.getAttribute("data-type");

  let id = dom("#ThongTinND").value;
  let taikhoan = dom("#TaiKhoan").value;
  let matKhau = dom("#MatKhau").value;
  let hoten = dom("#HoTen").value;
  let Email = dom("#Email").value;
  let image = dom("#HinhAnh").value;
  let ngonngu = dom("#loaiNgonNgu").value;
  let loaiND = dom("#loaiNguoiDung").value;
  let mota = dom("#MoTa").value;

  let user = new User(
    null,
    taikhoan,
    matKhau,
    hoten,
    Email,
    image,
    ngonngu,
    loaiND,
    mota
  );

  if (Eltype === "add") {
    addUser(user);
  } else if (Eltype === "update") {
    updateUser(id, user);
    
    
  }
});

/* Xóa và Cập Nhật */

dom("#tblDanhSachNguoiDung").addEventListener("click", (evt) => {
  let id = evt.target.getAttribute("data-id");
  let elType = evt.target.getAttribute("data-type");

  if (elType === "delete") {
    deleteUser(id);
  } else if (elType === "edit") {
    dom(".modal-title").innerHTML = "Cập Nhật Thông Tin Người Dùng";
    dom(".modal-footer").innerHTML = `
    <button class='btn btn-secondary' data-dismiss='modal'>Hủy</button>
    <button class='btn btn-primary' data-type='update'>Cập Nhật</button>
    `;

    apiGetUserById(id)
      .then((response) => {
        let user = response.data;
        dom("#ThongTinND").value = user.id;
        dom("#TaiKhoan").value = user.taikhoan;
        dom("#MatKhau").value = user.matKhau;
        dom("#HoTen").value = user.hoten;
        dom("#Email").value = user.Email;
        dom("#HinhAnh").value = user.image;
        dom("#loaiNgonNgu").value = user.ngonngu;
        dom("#loaiNguoiDung").value = user.loaiND;
        dom("#MoTa").value = user.mota;
      })
      .catch((error) => {
        console.log(error);
      });
    dom("#TaiKhoan").disabled = true;
  }
});

dom("#search").addEventListener("keydown", (evt) => {
  console.log(evt.target);
  // Kiểm tra không phải ký tự Enter => Kết thúc hàm
  if (evt.key !== "Enter") return;
  GetUsers(evt.target.value);
});

////////////////////////////////////////////////////////////////////////

/* Validation */

function ValidateForm(type) {
  let isValid = true;
  if(type === "edit"){
   isValid =
    validateName() &
    validatePassword() &
    validateEmail() &
    validateImage() &
    validatePostion() &
    validateTrans() &
    validateDescribe();
  } else {
    isValid =
    ValidateID() &
    validateName() &
    validatePassword() &
    validateEmail() &
    validateImage() &
    validatePostion() &
    validateTrans() &
    validateDescribe();
  }

  if (!isValid) {
    return false;
  }
  return true;
}
