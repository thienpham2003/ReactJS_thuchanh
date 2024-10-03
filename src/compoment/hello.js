function Hello(){
    const person = {   name: 'Peter ',
  theme: {     backgroundColor: 'red',
    color: 'white'
  } };
return(
<div>
    <h1 style={person.theme}>xin chào, {person.name}</h1>
    <div>Chúc bạn thành công với React</div>
    
    </div>
);

}
export default Hello ;
