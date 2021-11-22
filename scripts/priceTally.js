const sizeOptions = document.querySelectorAll('.sizeOption');
const fadeOptions = document.querySelectorAll('.autoFadeOption');
const colourOptions = document.querySelectorAll('.colourOption');

const tally = document.getElementById('tally');
const tallyControls = document.querySelector('.tallyControls');
const tallyIcons = document.querySelectorAll('.iconContainer');
const tallyContent = document.querySelector('.tallyContent');
const tallyQuantity = document.querySelector('.pquantity');
const quantity = document.getElementById('amount');
const costText = document.querySelector('.cost');
const cancelButton = document.querySelector('.cancelButton');

let part1 = 4999.99, part2 = 0.00, part3 = 0.00, num = 1, total = 4999.99;

function eventListeners(obj) {
    obj.forEach(element => {
        element.addEventListener('click', ()=> {
            obj.forEach(element2 => {
                if (element2.classList.contains('optionActive')) {
                    element2.classList.remove('optionActive');
                }
            });
            element.classList.add('optionActive');
            if (obj == sizeOptions) {
                part1 = parseFloat(element.childNodes[3].innerText.replace(',','').replace('+','').substring(1));
            } else if (obj == fadeOptions) {
                part2 = parseFloat(element.childNodes[3].innerText.replace(',','').replace('+','').substring(1));
            } else if (obj == colourOptions) {
                part3 = parseFloat(element.childNodes[3].innerText.replace(',','').replace('+','').substring(1));
            }
            total = ((part1 + part2 + part3) * num);
            costText.innerText = "$".concat(total.toFixed(2));
        });
    });
}

quantity.addEventListener('change', () => {
    tallyQuantity.innerText = " \u2715 ".concat(quantity.options[quantity.selectedIndex].value);
    num = parseInt(quantity.options[quantity.selectedIndex].value);
    total = ((part1 + part2 + part3) * num);
    costText.innerText = "$".concat(total.toFixed(2));
});

eventListeners(sizeOptions);
eventListeners(fadeOptions);
eventListeners(colourOptions);

tally.addEventListener('click', () => {
    tallyIcons.forEach(element => {
        element.classList.toggle('tallyIconToggled');
    });
    tallyQuantity.innerText = " \u2715 ".concat(quantity.options[quantity.selectedIndex].value);
    costText.innerText = "$".concat(total);
    if (tallyControls.style.backgroundColor == "rgb(200, 200, 200)") {
        tallyControls.style.backgroundColor = "rgb(221, 221, 221)";
    } else {
        tallyControls.style.backgroundColor = "rgb(200, 200, 200)";
    }
    tallyControls.style.borderRadius = "0px 10px 0px 0px";
    tallyContent.classList.toggle('tallyToggled');
});

// cancelButton.addEventListener('click', () => {
//     sizeOptions.forEach(element => {
//         if (element.classList.contains('optionActive')) {
//             element.classList.remove('optionActive');
//         }
//     });
//     sizeOptions[0].classList.add('optionActive');

//     fadeOptions.forEach(element => {
//         if (element.classList.contains('optionActive')) {
//             element.classList.remove('optionActive');
//         }
//     });
//     fadeOptions[0].classList.add('optionActive');

//     colourOptions.forEach(element => {
//         if (element.classList.contains('optionActive')) {
//             element.classList.remove('optionActive');
//         }
//     });
//     colourOptions[0].classList.add('optionActive');
//     part1 = 4999.99;
//     part2 = 0.00;
//     part3 = 0.00;
//     num = 1;
//     total = 4999.99;
//     costText.innerText = "$".concat(total);
// });