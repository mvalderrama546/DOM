function calculate() {
    var juanaSales = {
        aqua: parseInt(document.getElementById("juanaAqua").value),
        emotion: parseInt(document.getElementById("juanaEmotion").value),
        joy: parseInt(document.getElementById("juanaJoy").value),
        freshness: parseInt(document.getElementById("juanaFreshness").value)
    };

    var pedroSales = {
        aqua: parseInt(document.getElementById("pedroAqua").value),
        emotion: parseInt(document.getElementById("pedroEmotion").value),
        joy: parseInt(document.getElementById("pedroJoy").value),
        freshness: parseInt(document.getElementById("pedroFreshness").value)
    };

    var juanaTotal = juanaSales.aqua * 200 + juanaSales.emotion * 180 + juanaSales.joy * 160 + juanaSales.freshness * 150;
    var pedroTotal = pedroSales.aqua * 200 + pedroSales.emotion * 180 + pedroSales.joy * 160 + pedroSales.freshness * 150;

    var employeeOfTheMonth;
    if (juanaTotal > pedroTotal) {
        employeeOfTheMonth = "Juan";
    } else if (pedroTotal > juanaTotal) {
        employeeOfTheMonth = "Pedro";
    } else {
        employeeOfTheMonth = "Dos";
    }

    document.getElementById("result").innerHTML = `
    Empleado del mes: ${employeeOfTheMonth}`;
    
    document.getElementById("result2").innerHTML = `
    Total de Ventas Juan: ${juanaTotal}`;

    document.getElementById("result3").innerHTML = `
    Total de Ventas Pedro: ${pedroTotal}`;

}