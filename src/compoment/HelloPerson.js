function HelloPerson() {
    const props = {
        name: 'thiện phạm ',
    };
    return (
        <div>
            <h1 style={props.theme}>xin chào, {props.name}</h1>
        </div>
    )
}
export default HelloPerson

