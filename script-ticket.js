function search() {
    var inputName,
        inputCountry,
        inputDate,
        inputNumber,
        filterName,
        filterCountry,
        filterDate,
        table,
        tr,
        td,
        i,
        name,
        country,
        date;
    inputName = document.getElementById("myInput");
    inputCountry = document.getElementById("myInput2");
    inputDate = document.getElementById("myInput3");
    inputNumber = document.getElementById("myInput4");

    filterName = inputName.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();
    filterDate = inputDate.value.toUpperCase();
    filterNumber = inputNumber.value.toUpperCase();

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];

        
        if (td && td1 && td2) {
            name = (td.textContent || td.innerText).toUpperCase();
            country = (td1.textContent || td1.innerText).toUpperCase();
            date = (td2.textContent || td2.innerText).toUpperCase();
            if (
                name.indexOf(filterName) > -1 &&
                country.indexOf(filterCountry) > -1 &&
                date.indexOf(filterDate) > -1
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



function buy(i) {
    //check if user logged in
    if(!localStorage.getItem("user")){
        alert("You need to login !")
        location.href = "login.html"
    }else{

        
        
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        
        from = td.textContent
        to = td1.textContent
        date = td2.textContent
        var ticket = { 'from': from, 'to': to, 'date': date };
        // Put the object into storage
        localStorage.setItem('ticket', JSON.stringify(ticket));
        location.href = "buy.html";
    }
}


// when searching from homepage to ticketpage
inputFrom = document.getElementById("myInput")
inputTo = document.getElementById("myInput2")
inputDate = document.getElementById("myInput3")
inputNumber = document.getElementById("myInput4")

if (localStorage.getItem("searched") == 1) {
    inputFrom.value = localStorage.getItem("from")
    inputTo.value = localStorage.getItem("to")
    inputDate.value = localStorage.getItem("date")
    inputNumber.value = localStorage.getItem("number")
    search()
}

