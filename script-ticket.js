function search() {
    var inputName,
        inputCountry,
        inputDate,
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

    filterName = inputName.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();
    filterDate = inputDate.value.toUpperCase();

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