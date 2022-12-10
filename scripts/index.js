function loginlogout() {
    if (!localStorage.getItem("user")) {
        // login here
        location.href = "login.html";

    } else {
        //logout here
        localStorage.setItem("user", "")
        location.reload();
    }
}


// when clicked on "جستجوی پروازها"
function gototickets() {
    from = document.getElementById("from-city").value
    to = document.getElementById("to-city").value
    date = document.getElementById("form-date").value
    number = document.getElementById("inp-number").value

    localStorage.setItem("from", from)
    localStorage.setItem("to", to)
    localStorage.setItem("date", date)
    localStorage.setItem("number", number)
    localStorage.setItem("searched", 1)

    location.href = "tickets.html";
}
// for welcome text
if (localStorage.getItem("user")) {
    username = localStorage.getItem("user")

    welcome = document.getElementById("welcometext")
    welcome.innerHTML = "برای خروج"

    welcome2 = document.getElementById("welcometext2")
    welcome2.innerHTML = "خوش آمدید, " + username + "! "

}

// store tickets manually to localstorage 
if(!localStorage.getItem("ticket1")){
    localStorage.setItem('ticket1', JSON.stringify({ 'from': "تهران", 'to': "شیراز", 'date': "2022-12-13" , 'price':"1,150,000" , 'id':'#1'}));
    localStorage.setItem('ticket2', JSON.stringify({ 'from': "تهران", 'to': "سیرجان", 'date': "2022-12-14" , 'price':"1,250,000" , 'id':'#2'}));
    localStorage.setItem('ticket3', JSON.stringify({ 'from': "تهران", 'to': "اصفهان", 'date': "2022-12-13" , 'price':"1,350,000" , 'id':'#3'}));
    localStorage.setItem('ticket4', JSON.stringify({ 'from': "شیراز", 'to': "اصفهان", 'date': "2022-12-14" , 'price':"1,450,000" , 'id':'#4'}));
    localStorage.setItem('ticket5', JSON.stringify({ 'from': "شیراز", 'to': "سیرجان", 'date': "2022-12-14" , 'price':"1,550,000" , 'id':'#5'}));
    localStorage.setItem('ticket6', JSON.stringify({ 'from': "شیراز", 'to': "سیرجان", 'date': "2022-12-15" , 'price':"1,650,000" , 'id':'#6'}));
    localStorage.setItem('ticket7', JSON.stringify({ 'from': "مشهد", 'to': "شیراز", 'date': "2022-12-15" , 'price':"1,750,000" , 'id':'#7'}));
    localStorage.setItem('ticket8', JSON.stringify({ 'from': "مشهد", 'to': "اصفهان", 'date': "2022-12-15" , 'price':"1,850,000" , 'id':'#8'}));
    localStorage.setItem('ticket9', JSON.stringify({ 'from': "نیویورک", 'to': "سیرجان", 'date': "2022-12-15" , 'price':"1,950,000" , 'id':'#9'}));
}
