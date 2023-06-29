//This line gets the input box element by its ID and assigns it to the input variable.
let input = document.getElementById('inputBox');

// This line selects all the button elements on the page and assigns them to the buttons variable.
let buttons = document.querySelectorAll('button');


//This line initializes an empty string variable named string. It will store the current expression to be evaluated.
let string = "";

//This line converts the buttons NodeList into an array using Array.from(). This allows us to use array methods such as forEach().
let arr = Array.from(buttons);

//This code iterates over each button using the forEach() method.
arr.forEach(button => {
    // This line adds a click event listener to each button. The event listener is an arrow function that takes an event object (e) as a parameter.
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})

//If the innerHTML is '=' (equal sign), the expression stored in string is evaluated using eval() and assigned back to string. The result is then displayed in the input box using input.value = string.

//If the innerHTML is 'AC' (all clear), the string variable is reset to an empty string, and the input box is cleared.

//If the innerHTML is 'DEL' (delete), the last character is removed from string using substring(), and the updated string is displayed in the input box.

//For any other button, the innerHTML is appended to string, and the updated string is displayed in the input box.