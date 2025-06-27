import React from "react";
import MyForm from "././component/MyForm"; // Giả sử MyForm được lưu trong thư mục cùng với App.js
import MyForm2 from "./component/MyForm2";
const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div>
    <div className="App">
      <h1>Form đăng ký 1</h1>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
    </div>
    <div className="App">
      <h1>Form đăng ký 2</h1>
      <MyForm2 title="Đăng ký người dùng 2"/>
    </div>
    </div>
  );
};

export default App;
