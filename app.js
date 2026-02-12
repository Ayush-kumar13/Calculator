let number = "";
let buttons = document.querySelectorAll("button");
let inpt = document.querySelector("input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (evt) => {
        let buttonText = evt.target.innerText;

        switch (buttonText) {
            case "=":
                try {
                    number = eval(number);
                    inpt.value = number;
                } catch {
                    inpt.value = "Error";
                    number = "";
                }
                break;

            case "C":
                number = "";
                inpt.value = "";
                break;

            case "+/-":
                if (number !== "") {
                    number = String(parseFloat(number) * -1);
                    inpt.value = number;
                }
                break;

            case "%":
                if (number !== "") {
                    number = String(parseFloat(number) / 100);
                    inpt.value = number;
                }
                break;

            default:
                number += buttonText;
                inpt.value = number;
                break;
        }
    });
});
