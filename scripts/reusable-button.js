const clickHandler = text => {
    alert(`${text} button clicked`);
}

const addIconToButton = (myButton, buttonText) => {
    const buttonIcon = document.createElement('span');
    buttonIcon.className = 'material-symbols-outlined';
    buttonIcon.textContent = 'grade'
    buttonIcon.style.verticalAlign = 'initial';
    buttonIcon.style.fontSize = 'initial';
    buttonIcon.style.marginInline = '5px';
    if (params.iconPos === 'L') {
        myButton.appendChild(buttonIcon);
    } 

    myButton.appendChild(buttonText);
    
    if (params.iconPos === 'R') {
        myButton.appendChild(buttonIcon);
    }

    return myButton;
}

export const createReusableButton = (params) => {
    let myButton = document.createElement('button');
    
    const buttonText = document.createTextNode(params.text);
    if (params.iconRequired) {
        const buttonIcon = document.createElement('span');
        buttonIcon.className = 'material-symbols-outlined';
        buttonIcon.textContent = 'grade'
        buttonIcon.style.verticalAlign = 'initial';
        buttonIcon.style.fontSize = 'initial';
        buttonIcon.style.marginInline = '5px';
        if (params.iconPos === 'L') {
            myButton.appendChild(buttonIcon);
        } 

        myButton.appendChild(buttonText);
        
        if (params.iconPos === 'R') {
            myButton.appendChild(buttonIcon);
        }
    } else {
        myButton.appendChild(buttonText);
    }
    myButton.className = `btn ${params.className}`;
    myButton.onclick = () => clickHandler(params.text);
    if (params.boxShadow) {
        myButton.style.boxShadow = params.boxShadow;
    }
    myButton.disabled = params.isDisabled;

    const element = document.getElementById(params.elementId);
    element.appendChild(myButton);
}