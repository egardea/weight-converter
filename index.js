let formSubmit = document.querySelector(".main-container_form");

if(formSubmit){
    formSubmit.addEventListener("submit", massType);

    function massType(e) {
        e.preventDefault();
        let inputNumber = document.querySelector(".form-input_input").value;
        console.log(inputNumber);
        let massOption = document.querySelector(".form-input_select").value;
        console.log(toString(massOption));

        let massOutput = document.querySelector('.form-output');

        if(massOption === 'Pounds'){
            massOutput.innerHTML = '';
            massOutput.insertAdjacentHTML("afterbegin", `
                <h4>Kilos: ${inputNumber/2.205}</h4>
                <h4>Grams: ${inputNumber*453.59}</h4>
                <h4>Ounces: ${inputNumber*16}</h4>
            `);
        } else if(massOption === 'Kilos'){
            massOutput.innerHTML = '';
            massOutput.insertAdjacentHTML("afterbegin", `
                <h4>Pounds: ${inputNumber*2.205}</h4>
                <h4>Grams: ${inputNumber*1000}</h4>
                <h4>Ounces: ${inputNumber*35.27}</h4>
            `);
        } else if(massOption === 'Grams'){
            massOutput.innerHTML = '';
            massOutput.insertAdjacentHTML("afterbegin", `
                <h4>Kilos: ${inputNumber/1000}</h4>
                <h4>Pounds: ${inputNumber/453.59}</h4>
                <h4>Ounces: ${inputNumber/28.35}</h4>
            `);
        } else if(massOption === 'Ounces'){
            massOutput.innerHTML = '';
            massOutput.insertAdjacentHTML("afterbegin", `
                <h4>Kilos: ${inputNumber/35.27}</h4>
                <h4>Grams: ${inputNumber*28.35}</h4>
                <h4>Pounds: ${inputNumber/16}</h4>
            `);
        }
        return;
    }
}