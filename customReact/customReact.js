function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target) 
    container.appendChild(domElement)
    */

    // using more modular approach
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop=='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a', //defines type of element like <a> tag
    props : { //properties of the elements
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click to visit google'
}
const mainContainer = document.querySelector('#root')//document.getElementById('root')

customRender(reactElement, mainContainer)