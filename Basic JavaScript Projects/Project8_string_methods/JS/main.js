function Five_function() {
    let part_1 = "Let's ";
    let part_2 = "Volt ";
    let part_3 = "In! ";
    let VoltIn = part_1.concat(part_2, part_3);
    document.getElementById("VoltesFive").innerHTML = VoltIn;
}

function slice_function () {
    let slice = "Whatever you lose, you'll find it again. But what you throw away you'll never get back."
    let quote = slice.slice(13, 17);
    let X = 1991;
    document.getElementById("Kenshin").innerHTML = quote + " - " + X.toString();
    
}