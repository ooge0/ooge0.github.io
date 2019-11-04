
function show(id, value) {
  document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
}

$(document).ready(function() {
    $("#header").load("/site/menu.html");
});

function magic(){
    setTimeout(function() {
        $('#magic_text p').css('color','green');
    },3000);
    setTimeout(function() {
        $('#magic_text p').text('What is this magic? It\'s dev magic~');
    },5000);
    setTimeout(function() {
        $('#magic_text p').css('color','#777');
    },7000);
}

function prepare_blue(){
    $('#green_and_blue_loader').hide();
    setTimeout(function() {
        $('#green_and_blue_loader').show();
    },1500);
}

$(function(){
  $('button#start_green').click(function(){
    $('#start_green').hide();
    $('#green_loader').append("<div id='loading_green'><img src='/site/img/green-loader.gif'> Loading <label style=\"color: green;\">green</label>...</div>");
    setTimeout(function() {
      $('#loading_green').hide();
      $('#green_loader').append("<h2 id=\"finish_green\"><i class=\"fa fa-tint\" style=\"font-size:30px;color:green\"></i> <label style=\"color: green;\">Green</label> Loaded</h2>");
    } , 4500 );
  });
});


$(function(){
  $('button#start_green_and_blue').click(function(){
    $('#start_green_and_blue').hide();
    $('#green_and_blue_loader').append("<div id='loading_green_without_blue'><img src='/site/img/green-loader.gif'> Loading <label style=\"color: green;\">green</label>...</div>");
    setTimeout(function() {
      $('#green_and_blue_loader').append("<div id='loading_green_with_blue'><img src='/site/img/blue-loader.gif'> Loading <label style=\"color: blue;\">blue</label>...</div>");
    } , 2000 );
    setTimeout(function() {
      $('#loading_green_without_blue').hide();
      $('#green_and_blue_loader').append("<div id='loading_blue_without_green'><i class=\"fa fa-tint\" style=\"font-size:24px;color:green\"></i> <label style=\"color: green;\">Green</label> finished waiting for <label style=\"color: blue;\">blue</label></div>");
    } , 4000 );
    setTimeout(function() {
      $('#loading_green_with_blue').hide();
      $('#loading_blue_without_green').hide();
      $('#green_and_blue_loader').append("<h2 id=\"finish_green_and_blue\"><i class=\"fa fa-tint\" style=\"font-size:30px;color:green\"></i> <label style=\"color: green;\">Green</label> and <label style=\"color: blue;\">Blue</label> <i class=\"fa fa-tint\" style=\"font-size:30px;color:blue\"></i>Loaded</h2>");
    } , 7000 );
  });
});


function showTextByClickingButton(is_seen) {
    show("show_me", is_seen);
    document.getElementById("show_text").disabled = is_seen;
    document.getElementsByName("hide_text")[0].disabled = (! is_seen);
}

function numberValidation() {
    var x, text, giveAnswer;

    x = document.getElementById("numb").value;
    document.getElementById("numb").className = "w3-input w3-border w3-pale-red required";

    if (!x || 0 === x.length || /^\s*$/.test(x)) {
        text = "You haven't entered anything";
    } else if (x == 'bug') {
        text = "Yes, this form has 6 <i>features</i>, which some people call <i>bugs</i> you just found 1";
    } else if (isNaN(x)) {
        text = "Please enter a number";
    } else if (x < 0) {
        text = ""
    } else if (x == 666) {
        text = "";
        document.getElementById("numb").className = "w3-input w3-border w3-light-grey required";
    } else if (x == 13) {
        text = "Number is too small";
        document.getElementById("numb").className = "w3-input w3-border w3-red required";
    } else if (x == 42) {
        text = ""
        alert("Sorry you have asked the wrong answer");
        document.getElementById("numb").value = null;
        document.getElementById("numb").className = "w3-input w3-border w3-light-grey required";
    } else if (x < 49) {
        text = "Number is too small";
    } else if (x > 100) {
        text = "Number is too big";
    } else {
        text = ""
        alert("Square root of " + x + " is " + Math.sqrt(x).toFixed(2));
        document.getElementById("numb").value = null;
        document.getElementById("numb").className = "w3-input w3-border w3-light-grey required";
    }
    document.getElementById("ch1_error").innerHTML = text;
}

function validateAge() {
    var age_group, error_message;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    if (!age || 0 === age.length || /^\s*$/.test(age)) {
        error_message = "You haven't entered anything in age field";
    } else if (!name || 0 === name.length || /^\s*$/.test(name) || name === "Enter name here" )  {
        error_message = "You haven't entered anything in name field";
    } else if (age < 0) {
        error_message = "Age cannot be less then 0";
    } else {
        return true;
    }
    document.getElementById("error").innerHTML = error_message;
    return false;
}


function alertSummoning() {
    show("textForAlerts", false);
    alert("I am an alert box!");
}

function conformationOrDenial() {
    show("textForAlerts", true);
    var x;
    if (confirm("Press a button!") == true) {
        x = "<i>Why on earth have you agreed to it?!</i>";
        document.getElementById("textForAlerts").className = "w3-slim";
    } else {
        x = "<b>You have dared to deny me!!!</b>";
        document.getElementById("textForAlerts").className = "w3-wide";
    }
    document.getElementById("textForAlerts").innerHTML = x;
}

function clickToEnterNumber() {
    show("textForAlerts", true);
    var text;
    var number = prompt("Please enter a number", "");
    var randomNumber = Math.random();

    if (number != null) {
        if (number == randomNumber) {
          text = "Yes, the number is indeed " + number + "! How are you today?";
        } else if (number == 42) {
          text = "Now that you know the answer, do you remeber the question?"
        } else {
          text = "Wrong! It is " + randomNumber + " instead of " + number
        }
        document.getElementById("textForAlerts").className = "";
        document.getElementById("textForAlerts").innerHTML = text;
    } else {
      show("textForAlerts", false);
    }
}

function goToAlertedPage() {
    if (confirm("Want to see an alerted page?!") == true) {
        window.location = 'alerted_page';
    } else {
        document.getElementById("textForAlerts").innerHTML = "So you desided to say? Good!";
    }
}

function openModalForAddPersonWithJob() {
    window.location = 'enter_a_new_person_with_a_job.html';
}

function openModalForAddPerson() {
    window.location = 'enter_a_new_person.html';
}

function openModalForEditPerson(index) {
    window.location = 'enter_a_new_person.html?id=' + index;
}

function openModalForEditPersonWithJob(index) {
    window.location = 'enter_a_new_person_with_a_job.html?id=' + index;
}

function getPersonWithJob() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
        document.getElementById("modal_button").innerHTML = "Edit";
        var id = searchParams.get("id");
        document.getElementById("modal_button").setAttribute("onclick", "editPersonWithJob(" + id + ")");
        document.getElementById("name").value = JSON.parse(localStorage.getItem("person" + id)).name;
        document.getElementById("job").value = JSON.parse(localStorage.getItem("person" + id)).job;
    } else {
        document.getElementById("modal_button").innerHTML = "Add";
        document.getElementsByClassName("clear-btn")[0].innerHTML = "<button class='w3-btn w3-white w3-border w3-left' onclick='openModalForAddPersonWithJob()' id='addPersonBtn'>Clear all fields</button>";
    }
}

function getPerson() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
        document.getElementById("modal_button").innerHTML = "Edit";
        var id = searchParams.get("id");
        document.getElementById("modal_button").setAttribute("onclick", "editPerson(" + id + ")");
        document.getElementById("name").value = JSON.parse(localStorage.getItem("person" + id)).name;
        document.getElementById("surname").value = JSON.parse(localStorage.getItem("person" + id)).surname;
        document.getElementById("job").value = JSON.parse(localStorage.getItem("person" + id)).job;
        document.getElementById("dob").value = JSON.parse(localStorage.getItem("person" + id)).dob;
        document.getElementById("status").value = JSON.parse(localStorage.getItem("person" + id)).status;
        if (JSON.parse(localStorage.getItem("person" + id)).language.includes("Spanish")) {
            document.getElementById("spanish").checked = true;
        } else {
            document.getElementById("spanish").checked = false;
        }
        if (JSON.parse(localStorage.getItem("person" + id)).language.includes("English")) {
            document.getElementById("english").checked = true;
        } else {
            document.getElementById("english").checked = false;
        }
        if (JSON.parse(localStorage.getItem("person" + id)).language.includes("French")) {
            document.getElementById("french").checked = true;
        } else {
            document.getElementById("french").checked = false;
        }
        if (JSON.parse(localStorage.getItem("person" + id)).gender.includes("female")) {
            document.getElementById("female").checked = true;
        } else {
            document.getElementById("male").checked = true;
        }
    } else {
        document.getElementById("modal_button").innerHTML = "Add";
        document.getElementsByClassName("clear-btn")[0].innerHTML = "<button class='w3-btn w3-white w3-border w3-left' onclick='openModalForAddPerson()' id='addPersonBtn'>Clear all fields</button>";
    }
}

function addPersonWithJobToList() {
    var pi = 0;
    for (var i = 0; i < localStorage.length - 1; i++) {
        while (localStorage.getItem("person" + pi) == null) {
            pi++;
        }
        pi++;
    }
    var p = {name:document.getElementById("name").value,
        job:document.getElementById("job").value
        };

    localStorage.setItem("person" + pi, JSON.stringify(p));
    window.location = 'list_of_people_with_jobs.html';
    console.log(pi)
}

function addPersonToList() {
    var pi = 0;
    for (var i = 0; i < localStorage.length - 1; i++) {
        while (localStorage.getItem("person" + pi) == null) {
            pi++;
        }
        pi++;
    }
    var language, gender;
    if (document.getElementById("english").checked) {
        language = "English, "
    }
    if (document.getElementById("french").checked) {
        language += "French, "
    }
    if (document.getElementById("spanish").checked) {
        language += "spanish, "
    }
    if (document.getElementById("male").checked) {
        gender = "male"
    } else if (document.getElementById("female").checked) {
        gender = "female"
    }

    var p = {name:document.getElementById("name").value, 
        surname:document.getElementById("surname").value,
        job:document.getElementById("job").value,
        dob:document.getElementById("dob").value,
        status:document.getElementById("status").value,
        language:language,
        gender:gender,
        };

    localStorage.setItem("person" + pi, JSON.stringify(p));
    window.location = 'list_of_people.html';
    console.log(pi)
}


function editPersonWithJob(index) {

    var p = {name:document.getElementById("name").value, 
        job:document.getElementById("job").value,
        };

    localStorage.setItem("person" + index, JSON.stringify(p));
    window.location = 'list_of_people_with_jobs.html';
}


function editPerson(index) {
    var language, gender;
    if (document.getElementById("english").checked) {
        language = "English, "
    }
    if (document.getElementById("french").checked) {
        language += "French, "
    }
    if (document.getElementById("spanish").checked) {
        language += "Spanish, "
    }
    if (language != null) {
        language = language.substring(0, language.length - 2);
    }
    if (document.getElementById("male").checked) {
        gender = "male"
    } else if (document.getElementById("female").checked) {
        gender = "female"
    }

    var p = {name:document.getElementById("name").value, 
        surname:document.getElementById("surname").value,
        job:document.getElementById("job").value,
        dob:document.getElementById("dob").value,
        status:document.getElementById("status").value,
        language:language,
        gender:gender,
        };

    localStorage.setItem("person" + index, JSON.stringify(p));
    window.location = 'list_of_people.html';
}

function deletePerson(index) {
    document.getElementById("person" + index).remove();
    localStorage.removeItem("person" + index);
    location.reload();
}

function setNewPeople() {
    resetListOfPeople();
    localStorage.setItem("reload", false);    
}

function resetListOfPeople() {
    localStorage.clear();
    var p1 = {name:"Mike", surname:"Kid", dob:"12/25/1986", job:"Web Designer", language:"English", gender:"male", status:"contractor"};
    var p2 = {name:"Jill", surname:"Watson", dob:"06/06/1966", job:"Support", language:"Spanish", gender:"female", status:"intern"};
    var p3 = {name:"Jane", surname:"Doe", dob:"04/01/2001", job:"Accountant", language:"English, French", gender:"female", status:"employee"};
    localStorage.setItem("person0", JSON.stringify(p1));
    localStorage.setItem("person1", JSON.stringify(p2));
    localStorage.setItem("person2", JSON.stringify(p3));
    localStorage.setItem("reload", true);
    location.reload()
}

function loadPeopleFromList() {
    var pi = 0;
    for (var i = 0; i < localStorage.length - 1; i++) {
        while (localStorage.getItem("person" + pi) == null) {
            pi++;
        }
        $("#listOfPeople").append(
            "<div class=\"w3-padding-16\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"> " +
            "<li draggable=\"true\" ondragstart=\"drag(event)\" id=\"person" + pi + "\">" +
            "<span onclick=\"deletePerson(" + pi + ")\"  class=\"w3-closebtn closebtn w3-padding w3-margin-right w3-medium\">&times;</span>" + 
            "<span onclick=\"openModalForEditPerson(" + pi + ")\"  class=\"w3-closebtn editbtn w3-padding w3-margin-right w3-medium\">" +
            "<i class=\"fa fa-pencil\"></i>" +
            "</span><div class=\"w3-xlarge \">" +
            "<span class=\"name\">" + JSON.parse(localStorage.getItem("person" + pi)).name + "</span> " +
            "<span class=\"surname\">" + JSON.parse(localStorage.getItem("person" + pi)).surname + "</span></div><br>" +
            "<b>Job:</b> <span class=\"job\">" + JSON.parse(localStorage.getItem("person" + pi)).job + "</span>; " +
            "<b>Date of birth:</b> <span class=\"dob\">" + JSON.parse(localStorage.getItem("person" + pi)).dob + "</span>; " +
            "<b>Knows language(s):</b> <span class=\"language\">" + JSON.parse(localStorage.getItem("person" + pi)).language + "</span>; " +
            "<b>Gender:</b> <span class=\"gender\">" + JSON.parse(localStorage.getItem("person" + pi)).gender + "</span>; " +
            "<b>Employee status:</b> <span class=\"status\">" + JSON.parse(localStorage.getItem("person" + pi)).status + "</span>" +
            "</li>" +
            "</div>"
            );
        pi++;
    }
}

function loadPeopleWithJobsFromList() {
    var pi = 0;
    for (var i = 0; i < localStorage.length - 1; i++) {
        while (localStorage.getItem("person" + pi) == null) {
            pi++;
        }
        $("#listOfPeople").append(
            "<div class=\"w3-padding-16\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"> " +
            "<li draggable=\"true\" ondragstart=\"drag(event)\" id=\"person" + pi + "\">" +
            "<span onclick=\"deletePerson(" + pi + ")\"  class=\"w3-closebtn closebtn w3-padding w3-margin-right w3-medium\">&times;</span>" + 
            "<span onclick=\"openModalForEditPersonWithJob(" + pi + ")\"  class=\"w3-closebtn editbtn w3-padding w3-margin-right w3-medium\">" +
            "<i class=\"fa fa-pencil\"></i>" +
            "</span>" +
            "<span class=\"w3-xlarge name\">" + JSON.parse(localStorage.getItem("person" + pi)).name + "</span></br>" +
            "<span class=\"job\">" + JSON.parse(localStorage.getItem("person" + pi)).job + "</span>" +
            "</li>" +
            "</div>"
            );
        pi++;
    }
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.id == "drag_box1") {
        document.getElementById(data).className = "orange";
        document.getElementById(data).innerHTML = "Orange box";
    } else if (ev.target.id == "drag_box2") {
        document.getElementById(data).className = "green";
        document.getElementById(data).innerHTML = "Green box";
    } 
    ev.target.appendChild(document.getElementById(data));
}

function getAge() {
    let searchParams = new URLSearchParams(window.location.search);
    var age = searchParams.get("age");
    var age_group = "";
    if (age < 14) {
        age_group = "a kid";
    } else if (age < 20) {
        age_group = "a teenager";
    } else if (age < 120) {
        age_group = "an adult";
    } else {
        age_group = "an immortal";
    }
    var name = searchParams.get("name");
    $("#message").text("Hello, " + name + ", you are " + age_group);
}

function getFeedbackSummary() {
    let searchParams = new URLSearchParams(window.location.search);
    $("#name").text(searchParams.get("name"));
    $("#age").text(searchParams.get("age"));
    $("#language").text(searchParams.getAll("language"));
    $("#gender").text(searchParams.get("gender"));
    $("#option").text(searchParams.get("option"));
    $("#comment").text(searchParams.get("comment"));
}

function getFeedback() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("name")) {
        $("#message").text("Thank you, " + searchParams.get("name") + ", for your feedback!");
    } else {
        $("#message").text("Thank you for your feedback!");
    }
}

function openFeedback() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("name") && searchParams.get("name") != "") {
        window.location = 'thank_you_for_feedback.html?name=' + searchParams.get("name");
    } else {
        window.location = 'thank_you_for_feedback.html';
    }
}

function actShowResult(type, clear = false) {
    if (type == "text" || type == "number" || type == "text_area") {
        if (clear) {
            document.getElementById("result_" + type).style.display = "none";
        } else {
            value = document.getElementById(type).value;
            document.getElementById('result_' + type).innerHTML = 'You entered ' + type.replace('_', ' ') + ': "' + value.replace(/\n|\r/g, '<br />')+ '"';
            document.getElementById("result_" + type).style.display = "block";
        }
        document.getElementById("clear_result_button_" + type).disabled = clear;
    } else {
        document.getElementById("result_" + type).style.display = "block";
        if (type == "checkbox") {
            // value = document.getElementById("vfb-10").value;
            var values = document.querySelectorAll("input[type=\"checkbox\"]:checked");
            var one_lang = false;
            var value = "";
            if (values != null) {
                for (var i = 0; i < values.length; i++) {
                    if (values[i].checked) {
                        if (one_lang) {
                            value += ", "
                        }
                        value += values[i].value;
                        one_lang = true;
                    }
                }
            }
            if (value == "") {
                document.getElementById('result_checkbox').innerHTML = "You had not selected anything";
            } else {
                document.getElementById('result_checkbox').innerHTML = "You selected value(s): " + value;
            }
        } else if (type == "select") {
            var selected = document.getElementById("vfb-12").options[document.getElementById("vfb-12").selectedIndex].text;
            if (selected == "Choose your option") {
                document.getElementById('result_select').innerHTML = "You had not selected anything";
            } else {
                document.getElementById('result_select').innerHTML = "You selected option: " + selected;
            }
        } else if (type == "radio") {
            var ratio = document.querySelector('input[name="vfb-7"]:checked');
            if (ratio === null) {
                document.getElementById('result_radio').innerHTML = "You had not selected anything";
            } else {
                document.getElementById('result_radio').innerHTML = "You selected option: " + ratio.value;
            }
        } else if (type == "date") {
            value = document.getElementById("vfb-8").value;
            if (value == "") {
                document.getElementById('result_date').innerHTML = "You had not entered any date";
            } else {
                document.getElementById('result_date').innerHTML = "You entered date: " + value;
            }
        }
    }
}

