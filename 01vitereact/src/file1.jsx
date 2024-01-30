function Func1(){
    const name = 'Google';
//in return statement we can only return one enclose element 
//so to return multiple elements we can enclose them inside <div></div> or <> </> called fragments
    return (
        <div>
        <a href="https://google.com" target="_blank">Click to open {name}</a>
        </div>
    );
}

export default Func1