initialNumber = "";
number = ""
Length = "";
number1 = "";
number2 = "";
number3 = "";
number4 = "";
number5 = "";
number6 = "";
number7 = "";
number8 = "";
number9 = "";
Fnumber1 = "";
Fnumber2 = "";
Fnumber3 = "";
Fnumber4 = "";
Fnumber5 = "";
Fnumber6 = "";
Fnumber7 = "";
Fnumber8 = "";
Fnumber9 = "";
final = "";

function check() {
    initialNumber = document.getElementById("input").value;
    console.log(initialNumber);
    number = Number(initialNumber);
    Length = initialNumber.length;
    console.log(Length);
    if(Length = 2) {
        number1 = initialNumber.charAt(0);
        Fnumber1 = Number(number1);
        number2 = initialNumber.charAt(1);
        Fnumber2 = Number(number2)
        final = number1 + number2;
    }

    if(Length = 3) {
        number1 = number.charAt(0);
        number2 = number.charAt(1);
        number3 = number.charAt(2);
        final = number1 + number2 + number3;
    }

    if(Length = 4) {
        number1 = number.charAt(0);
        number2 = number.charAt(1);
        number3 = number.charAt(2);
        number4 = number.charAt(3);
        final = number1 + number2 + number3 + number4;
    }

    if(Length = 5) {
        number1 = number.charAt(0);
        number2 = number.charAt(1);
        number3 = number.charAt(2);
        number4 = number.charAt(3);
        number5 = number.charAt(4);
        final = number1 + number2 + number3 + number4 + number5;
    }

    if(Length = 6) {
        number1 = number.charAt(0);
        number2 = number.charAt(1);
        number3 = number.charAt(2);
        number4 = number.charAt(3);
        number5 = number.charAt(4);
        number6 = number.charAt(5);
        final = number1 + number2 + number3 + number4 + number5 + number6;
    }

    if(Length = 7) {
        number1 = number.charAt(0);
        number2 = number.charAt(1);
        number3 = number.charAt(2);
        number4 = number.charAt(3);
        number5 = number.charAt(4);
        number6 = number.charAt(5);
        number7 = number.charAt(6);
        final = number1 + number2 + number3 + number4 + number5 + number6 + number7;
    }

    if(Length = 8) {
        number1 = number.charAt(0);
        number2 = number.charAt(1);
        number3 = number.charAt(2);
        number4 = number.charAt(3);
        number5 = number.charAt(4);
        number6 = number.charAt(5);
        number7 = number.charAt(6);
        number8 = number.charAt(7);
        final = number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8;
    }

    if(Length = 9) {
        number1 = number.charAt(0);
        number2 = number.charAt(1);
        number3 = number.charAt(2);
        number4 = number.charAt(3);
        number5 = number.charAt(4);
        number6 = number.charAt(5);
        number7 = number.charAt(6);
        number8 = number.charAt(7);
        number9 = number.charAt(8);
        final = number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9;
    }

    if(final = 9, 18, 27, 36, 45, 54, 63, 72, 81) {
        document.getElementById("response").innerHTML = number + " is divisible by 9";
    }
    else {
        document.getElementById("response").innerHTML = number + " is not divisible by 9";
    }
}