function print(i){
    document.write(i);
}

for (i = 1; i < 100; i++) {
    let line = "";
    if (i % 3 === 0){
        line += "FIZZ";
    }
    if (i % 5 === 0){
        line += "BUZZ";
    }
    if (line === ""){
        line += i;
    }
    line += "<br>";
    print(line);
}