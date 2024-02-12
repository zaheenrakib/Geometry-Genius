// function calculateParallelogramArea(){
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }


function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log("base value ",base);
    const height = getInputValueById('parallelogram-height');
    // console.log('height value',height);

    const area = base * height;
    console.log('area of the',area);

    setInnerTextById('parallelogram-area' , area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputvalue = parseFloat(inputValueText);
    return inputvalue;
}


function setInnerTextById(elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}