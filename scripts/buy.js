// Retrieve the object from storage
var ticket = JSON.parse(localStorage.getItem('ticket'));

from = ticket["from"]
to = ticket["to"]
date = ticket["date"]

fromText = document.getElementById("from")
toText = document.getElementById("to")
dateText = document.getElementById("date")

fromText.textContent  = from
toText.textContent  = to
dateText.textContent = date
