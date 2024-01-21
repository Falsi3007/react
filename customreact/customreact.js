function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(Prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props)
    }

    container.appendchild(domElement)
}

const reactelement = {
    type: 'a',
    props : {
        href:'https://google.com',
        target :'_blank'
    },
    children : 'click me to visit google'
}

const maincontainer = document.querySelector('#root')

customrender(reactElement,mainContainer)