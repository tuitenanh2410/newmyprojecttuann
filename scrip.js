// Lưu thông tin bệnh nhân vào bảng
function luuThongTin() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const cccd = document.getElementById("CCCD").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const disease = document.getElementById("disease").value.trim();

  if (!name || !age || !cccd || !phone || !address || !disease) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  const table = document
    .getElementById("patientTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${cccd}</td>
    <td>${phone}</td>
    <td>${address}</td>
    <td>${disease}</td>
  `;

  alert("Thông tin bệnh nhân đã được lưu.");
  resetForm();
}

// Tìm kiếm bệnh nhân theo tên hoặc CCCD
function timKiem() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const rows = document.querySelectorAll("#patientTable tbody tr");

  rows.forEach((row) => {
    const name = row.cells[0].textContent.toLowerCase().trim(); // Tên bệnh nhân
    const CCCD = row.cells[2].textContent.toLowerCase().trim(); // CCCD bệnh nhân8

    // Kiểm tra nếu từ khóa khớp với tên hoặc CCCD
    if (name.includes(searchInput) || CCCD.includes(searchInput)) {
      row.style.display = ""; // Hiển thị dòng
    } else {
      row.style.display = "none"; // Ẩn dòng
    }
  });
}

// Sửa thông tin bệnh nhân
function suaThongTin() {
  const selectedRow = document.querySelector("#patientTable tbody tr.selected");
  if (!selectedRow) {
    alert("Vui lòng chọn bệnh nhân cần sửa.");
    return;
  }

  const inputs = ["name", "age", "CCCD", "phone", "address", "disease"];
  inputs.forEach((id, index) => {
    document.getElementById(id).value = selectedRow.cells[index].textContent;
  });

  selectedRow.remove();
}

// Xóa thông tin bệnh nhân
function xoaThongTin() {
  const selectedRow = document.querySelector("#patientTable tbody tr.selected");
  if (!selectedRow) {
    alert("Vui lòng chọn bệnh nhân cần xóa.");
    return;
  }

  selectedRow.remove();
  alert("Đã xóa thông tin bệnh nhân.");
}

// Reset form sau khi lưu
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("CCCD").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("disease").value = "";
}

// Chọn dòng trên bảng
document.getElementById("patientTable").addEventListener("click", (e) => {
  const rows = document.querySelectorAll("#patientTable tbody tr");
  rows.forEach((row) => row.classList.remove("selected"));

  const clickedRow = e.target.parentNode;
  clickedRow.classList.add("selected");
});
