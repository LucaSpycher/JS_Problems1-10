/* Luca Spycher
 * Javascript problems 1-10
 * September 29, 2017
 */

function sleep_in(weekday, vacation) {
    if (weekday && !vacation) {
        return false
    }else if(!weekday || vacation) {
        return true;
    }
}

function monkey_trouble(a_smile, b_smile) {
    if(typeof a_smile != "boolean" || typeof b_smile != "boolean") {
        return false;
    }
    if((a_smile && b_smile) || !(a_smile || b_smile)) {
        return true;
    }else{
        return false;
    }
}

function string_times(string, times) {
    var newString = "";
    for(var i = 0; i < times; i++) {
        newString += string;
    }
    return newString;
}

function front_times(string, times) {
    var newString = "";
    var first3 = string.substring(0, 3);
    for(var i = 0; i < times; i++) {
        newString += first3;
    }
    return newString;
}

function string_bits(string) {
    var newString = "";
    for(var i = 0; i < string.length; i += 2) {
        newString += string.substring(i, i + 1);
    }
    return newString;
}

function caughtSpeeding(speed, bday) {
    if (speed <= 60 || (speed <= 65 && bday)) {
        return 0;
    }else if(speed <= 80  || (speed <= 85 && bday)) {
        return 1;
    }else if(speed > 80 || (speed > 85 && bday) ) {
        return 2;
    }else{
    return 0;
    }
}

function fizz_buzz(num) {
    var string = String(num);
    if ((num % 3 == 0) && (num % 5 == 0)) {
        return "FizzBuzz";
    }else if(num % 3 == 0) {
        return "Fizz";
    }else if(num % 5 == 0) {
        return "Buzz";
    }else{
        return string + "!";
    }
}

function teaParty(tea, candy) {
    if(tea < 5 || candy < 5) {
        return 0;
    }else if(tea >= 2*candy || candy >= 2*tea) {
        return 2;
    }else{
        return 1;
    }
}

function blackjack(card1, card2) {
    if(card1 > 21 && card2 > 21) {
        return 0;
    }else if(card1 > 21) {
        return card2;
    }else if(card2 > 21) {
        return card1;
    }else if(card1 > card2) {
        return card1;
    }else if(card2 > card1) {
        return card2;
    }
}

function loneSum(a, b, c) {
    var sum = 0;
    if(a != b && a != c) {
        sum += a;
    }
    if(b != a && b != c) {
        sum += b;
    }
    if(c != a && c != b) {
        sum += c;
    }
    return sum;
}


/////////////////////////// TESTER ////////////////////////////////

function tester() {

    document.getElementById("output1").innerHTML = sleep_in(true, true);
    document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    document.getElementById("output3").innerHTML = string_times("string", 2);
    document.getElementById("output4").innerHTML = front_times("weaboo", 4);
    document.getElementById("output5").innerHTML = string_bits("yeah");
    document.getElementById("output6").innerHTML = caughtSpeeding(65, true);
    document.getElementById("output7").innerHTML = fizz_buzz(1);
    document.getElementById("output8").innerHTML = teaParty(5,4);
    document.getElementById("output9").innerHTML = blackjack(21,22);
    document.getElementById("output10").innerHTML = loneSum(1,2,2);


}
