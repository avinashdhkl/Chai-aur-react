function  customerRender(reactElement,mainContainer) {
    const docElement = document.createElement(reactElement.type)
    docElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop ==='children') continue;
        docElement.setAttribute(prop,reactElement.props [prop])
    }
    // docElement.setAttribute('href',reactElement.props.href)
    // docElement.setAttribute('target',reactElement.props.target)   
    mainContainer.append(docElement)
}


const reactElement={

    type:'a', 
    props:{
        href:"https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4&ab_channel=ChaiaurCode",
        target:"_blank"
    },
    children:'Click here to watch Video'

}


const mainContainer = document.querySelector('#root');

customerRender(reactElement,mainContainer); 