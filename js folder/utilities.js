//input field er jonno (.value)
function getValueById(id){
    const getValue = document.getElementById(id).value;
    return getValue;
}
// text field er jonno (.innerText)
function getInnerTextById(id) {
    const getTextValue = document.getElementById(id).innerText;
    const getTextValueNumber = parseFloat(getTextValue);
    return getTextValueNumber;
}
