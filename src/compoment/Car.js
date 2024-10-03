import React, { useState } from 'react';

function Car() {
  // Khởi tạo state với thông tin của Car
  const [car, setCar] = useState({
    name: 'Toyota',
    color: 'Red',
    year: 2020,
  });

  // Hàm để cập nhật năm của Car
  const updateYear = (event) => {
    const newYear = event.target.value;
    setCar((prevCar) => ({
      ...prevCar,
      year: newYear,
    }));
  };

  // Hàm để thực hiện cập nhật
  const handleUpdate = () => {
    alert(`Updated Year: ${car.year}`);
  };

  return (
    <>
      <h2>Show information of Car:</h2>
      <p>Name: {car.name}</p>
      <p>Color: {car.color}</p>
      <p>Year: {car.year}</p>
      <div>
        Update Year of Car: 
        <input 
          type="number" 
          onChange={updateYear} 
          value={car.year} // Để hiển thị năm hiện tại trong ô nhập liệu
        />
        <input 
          type="button" 
          value="Update Year" 
          onClick={handleUpdate} 
        />
      </div>
    </>
  );
}

export default Car;
