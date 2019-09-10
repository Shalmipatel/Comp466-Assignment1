function convert_temp(source, value) {
    let numberVal = parseFloat(value);
    let inputC = document.getElementById("C");
    let inputF = document.getElementById("F");
    let inputK = document.getElementById("K");


    if (source === "C"){
        inputF.value = (numberVal*(9/5) +32).toFixed(2);
        inputK.value = (numberVal + 273.15).toFixed(2);

    }
    if (source === "F"){
        inputC.value = ((numberVal - 32)*(5/9)).toFixed(2);
        inputK.value = ((numberVal - 32)*(5/9) + 273.15).toFixed(2);

    }
    if (source === "K"){
        inputC.value = (numberVal - 273.15).toFixed(2);
        inputF.value = ((numberVal -273.15)*(9/5) +32).toFixed(2);

    }
}