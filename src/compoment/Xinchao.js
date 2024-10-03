function Xinchao(){

    const hiAll = () => {
        alert("Hello everyone");
      };
    
      // Hàm có 1 đối số
      const hiYou = (name) => {
        alert("Hello " + name);
      };
      return (
        <div>
          <h1>Welcome to the Hello Component</h1>
          <button onClick={hiAll}>hiAll</button>
          <button onClick={() => hiYou("thiện phạm ")}>hiYou</button>
          {/* Bạn có thể thêm các nút khác với tên khác nếu cần */}
        </div>
      );
}
;


export default Xinchao;