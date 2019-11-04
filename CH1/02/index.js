const calc = () => {
    return 4 * 4;
}

let aNumber = calc();

const prinCalc = (callbackFunction) => {
    console.log(callbackFunction);
}

prinCalc(aNumber);