function print(content) {
    document.write(content);
}

let line = "";
for (let i = 1; i < 10; i++) {
    line = "";

    // Print the current number
    print(i + "<br>");

    // Print the result of mod 3 and mod 5
    print(i + " mod 3 is " + i % 3 + " and mod 5 is " + i % 5 + "<br>");

    // Check for FIZZ and BUZZ conditions
    if (i % 3 === 0) {
        line += "FIZZ";
    }
    if (i % 5 === 0) {
        line += "BUZZ";
    }

    // If neither FIZZ nor BUZZ, append the current number
    if (line === "") {
        line += i;
    }

    // Print the final result for the current iteration
    line += "<br>";
    print(line);
}
