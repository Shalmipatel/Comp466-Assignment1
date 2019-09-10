function convert_lengths(source, value) {
    let numberVal = parseFloat(value);
    let feet = document.getElementById("feet");
    let meters = document.getElementById("meters");
    let inches = document.getElementById("inches");
    let centi = document.getElementById("centimeters");
    let yards = document.getElementById("yards");
    let kilo = document.getElementById("kilo");
    let miles = document.getElementById("miles");

    if (source === "feet"){
        meters.value = (numberVal/3.2808).toFixed(2);
        inches.value = (numberVal*12).toFixed(2);
        centi.value = (numberVal/0.032808).toFixed(2);
        yards.value = (numberVal*.33333).toFixed(2);
        kilo.value = (numberVal/3280.8).toFixed(2);
        miles.value = (numberVal*0.00018939).toFixed(2);
    }
    if (source === "meters"){
        feet.value = (numberVal*3.2808).toFixed(2);
        inches.value = (numberVal*39.370).toFixed(2);
        centi.value = (numberVal/0.01).toFixed(2);
        yards.value = (numberVal*1.0936).toFixed(2);
        kilo.value = (numberVal/1000).toFixed(2);
        miles.value = (numberVal/0.00062137).toFixed(2);
    }
    if (source === "inches"){
        meters.value = (numberVal/39.370).toFixed(2);
        feet.value = (numberVal*0.083333).toFixed(2);
        centi.value = (numberVal/0.39370).toFixed(2);
        yards.value = (numberVal*.02778).toFixed(2);
        kilo.value = (numberVal/39370).toFixed(2);
        miles.value = (numberVal/0.000015783).toFixed(2);
    }
    if (source === "centimeters"){
        meters.value = (numberVal/100).toFixed(2);
        inches.value = (numberVal*0.39370).toFixed(2);
        feet.value = (numberVal*0.032808).toFixed(2);
        yards.value = (numberVal*0.010936).toFixed(2);
        kilo.value = (numberVal/100000).toFixed(2);
        miles.value = (numberVal*0.0000062137).toFixed(2);
    }
    if (source === "yards"){
        meters.value = (numberVal/1.0936).toFixed(2);
        inches.value = (numberVal*36).toFixed(2);
        centi.value = (numberVal/0.010936).toFixed(2);
        feet.value = (numberVal*3).toFixed(2);
        kilo.value = (numberVal/1093.6).toFixed(2);
        miles.value = (numberVal/0.00056818).toFixed(2);
    }
    if (source === "kilo"){
        meters.value = (numberVal*1000).toFixed(2);
        inches.value = (numberVal*39370).toFixed(2);
        centi.value = (numberVal*100000).toFixed(2);
        yards.value = (numberVal*1093.6).toFixed(2);
        feet.value = (numberVal*3280.8).toFixed(2);
        miles.value = (numberVal*0.62137).toFixed(2);
    }
    if (source === "miles"){
        meters.value = (numberVal/0.00062137).toFixed(2);
        inches.value = (numberVal*63360).toFixed(2);
        centi.value = (numberVal/0.0000062137).toFixed(2);
        yards.value = (numberVal*1760).toFixed(2);
        kilo.value = (numberVal*0.62137).toFixed(2);
        feet.value = (numberVal*5280).toFixed(2);
    }
}

function convert_weight(source, value) {
    let numberVal = parseFloat(value);
    let tons = document.getElementById("tons");
    let kilogram = document.getElementById("kilogram");
    let grams = document.getElementById("grams");
    let pounds = document.getElementById("pounds");
    let ounces = document.getElementById("ounces");
	
	
	if (source === "tons"){
		kilogram.value = (numberVal*1000).toFixed(2);
		grams.value = (numberVal*1000000).toFixed(2);
		pounds.value = (numberVal*2204.6).toFixed(2);
		ounces.value = (numberVal*32000).toFixed(2);
	}
	
	if (source === "kilogram"){
		tons.value = (numberVal*0.001).toFixed(2);
		grams.value = (numberVal*1000).toFixed(2);
		pounds.value = (numberVal*2.20462).toFixed(2);
		ounces.value = (numberVal*35.274).toFixed(2);
	}
	if (source === "grams"){
		kilogram.value = (numberVal*1000).toFixed(2);
		tons.value = (numberVal/1000000).toFixed(2);
		pounds.value = (numberVal*0.00220462).toFixed(2);
		ounces.value = (numberVal*0.035274).toFixed(2);
	}
	if (source === "pounds"){
		kilogram.value = (numberVal*0.453592).toFixed(2);
		grams.value = (numberVal*453.592).toFixed(2);
		tons.value = (numberVal*0.000453592).toFixed(2);
		ounces.value = (numberVal*16).toFixed(2);
	}
	if (source === "ounces"){
		kilogram.value = (numberVal*0.0283495).toFixed(2);
		grams.value = (numberVal*28.3495).toFixed(2);
		pounds.value = (numberVal*0.0625).toFixed(2);
		tons.value = (numberVal/35273.962).toFixed(2);
	}
}