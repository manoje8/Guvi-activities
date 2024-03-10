let container = document.createElement("div");
container.className = "container";

let h1 = document.createElement("h1");
h1.id = "title";
h1.innerHTML = "Form";

let p = document.createElement("p");
p.id = "description";
p.innerHTML = "DOM Manipulation with Forms";

let form = document.createElement("form");
form.id =  "form";

let userName = createName();
let address = createAddress();
let country = createFormElements("Country", "text", "country");
let state = createFormElements("State", "text", "state");
let pincode = createFormElements("Pincode", "text", "pincode");
let gender = createGender();
let favFood = createMultiSelect();
let button = createButton();

//--------------------Table Container------------------------------

let tableContainer = document.createElement("div");
tableContainer.className = "table-container";

let table = document.createElement("table");
table.className = "table table-bordered";

let thread = document.createElement("thead");
thread.setAttribute("align", "center");
thread.className = "thead-dark";

let tableHeader = createTableHeader();

let tbody = document.createElement("tbody");
tbody.setAttribute("align", "center");
tbody.id = "tableBody";


thread.append(tableHeader);
table.append(thread, tbody);
tableContainer.append(table);
form.append(userName, address, gender,favFood, country, state, pincode, button);
container.append(h1,p,form);
document.body.append(container, tableContainer)


function createName()
{
    let formGroup = document.createElement("div");
    formGroup.className = "form-group";

    let label = document.createElement("label");
    label.innerHTML = "Name"
    let formRow = document.createElement("div");
    formRow.className = "form-row";

    let colOne = document.createElement("div");
    colOne.className = "col";
    let inputOne = document.createElement("input");
    inputOne.className = "form-control";
    inputOne.id = "first-name";
    inputOne.type = "text";
    inputOne.placeholder = "First Name";
    inputOne.required = true;

    let colTwo = document.createElement("div");
    colTwo.className = "col";
    let inputTwo = document.createElement("input");
    inputTwo.className = "form-control";
    inputTwo.id = "last-name";
    inputTwo.type = "text";
    inputTwo.placeholder = "Last Name";
    inputTwo.required = true;

    colOne.append(inputOne);
    colTwo.append(inputTwo);
    formRow.append(colOne,colTwo);
    formGroup.append(label,formRow);

    return formGroup;
}

function createAddress()
{
    let formGroup = document.createElement("div");
    formGroup.className = "form-group";

    let label = document.createElement("label");
    label.innerHTML = "Address";
    label.setAttribute("for", "address");

    let textArea = document.createElement("textarea");
    textArea.name = "address";
    textArea.id = "address";
    textArea.className = "formValue form-control";
    textArea.placeholder = "Enter your address";
    textArea.rows = 1;
    textArea.required = true;

    formGroup.append(label, textArea);
    return formGroup;
}

function createFormElements(name, type, id)
{
    let formGroup = document.createElement("div");
    formGroup.className = "form-group";

    let label = document.createElement("label");
    label.innerHTML = name;
    label.setAttribute("for", id);

    let input = document.createElement("input");
    input.type = type;
    input.className = "formValue form-control";
    input.id = id;
    input.placeholder = name;
    input.required = true;

    formGroup.append(label, input);
    return formGroup;
}

function createGender()
{
    let formGroup = document.createElement("div");
    formGroup.className = "form-group";

    let label = document.createElement("label");
    label.innerHTML = "Gender";
    label.setAttribute("for", "gender");

    let genderArr = ["male", "female", "others"];
    formGroup.append(label);

    for(let i=0; i<genderArr.length; i++)
    {
        let formCheck = document.createElement("div");
        formCheck.className = "form-check";

        let fLetter = genderArr[i].charAt(0).toLocaleUpperCase();
        let lLetter = genderArr[i].slice(1);
        let letter = fLetter + lLetter;

        let input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "radio";
        input.name = "gender";
        input.id = genderArr[i];
        input.value = letter;
        input.checked = true;

        let innerLabel = document.createElement("label");
        innerLabel.className = "form-check-label";
        innerLabel.setAttribute("for", genderArr[i]);
        innerLabel.innerHTML = letter;

        formCheck.append(input, innerLabel);
        formGroup.append(formCheck);
    }
    return formGroup;
}


function createMultiSelect()
{
    let formGroup = document.createElement("div");
    formGroup.className = "form-group";

    let label = document.createElement("label");
    label.innerHTML = "Choice of food";
    label.setAttribute("for", "food");

    let select = document.createElement("select");
    select.name = "food";
    select.className = "form-control";
    select.id = "food";
    select.multiple = true;
    select.required = true;

    let food = ["Pizza", "Burger", "Pancake", "Waffles", "Sandwich"];

    for(let i=0; i<food.length; i++)
    {
        let option = document.createElement("option");
        option.innerHTML = food[i];
        option.value = food[i];
        select.append(option);
    }
    formGroup.append(label, select);
    return formGroup;
}

function createButton()
{
    let formBtn = document.createElement("div");
    formBtn.className = "form-btn";

    let button = document.createElement("button");
    button.innerHTML = "Submit";
    button.type = "submit";
    button.id = "submit";
    button.className = "btn btn-primary";
    button.onclick = action;

    formBtn.append(button);
    return formBtn;
}

function createTableHeader()
{
    let tableHeader = ["S/No.", "Name", "Gender", "Food", "Address", "Country", "State", "Pincode"];
    let tableRow = document.createElement("tr");
    for(let i=0; i<tableHeader.length; i++)
    {
        let th = document.createElement("th");
        th.scope = "col";
        let text = document.innerHTML = tableHeader[i];
        th.append(text);
        tableRow.append(th);
    }

    return tableRow;
}

//Event Listener
form.addEventListener("submit",(event) => {
    
    event.preventDefault();

    //To clear form after submit
    let clearForm = document.querySelectorAll(".form-control");
    let formArr = Array.from(clearForm);
    formArr.forEach((form)=>{
        form.value = "";
    })

}); 

let count = 0;

function action()
{
    // Concat first and last Name
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let name = firstName+ ' ' + lastName;


     //Radio button
     let radioButton = document.querySelectorAll(".form-check-input");
     let radioButtonArr = Array.from(radioButton).find((radio)=>radio.checked);
     let radioButtonValue = radioButtonArr.value;

     //Multiple food
     let food = document.getElementById("food");
     let val = Array.from(food).filter((val)=>val.selected).map((opt) => opt.value);


    let address =  document.getElementById('address').value;
    let country =  document.getElementById('country').value;
    let state =  document.getElementById('state').value;
    let pincode =  document.getElementById('pincode').value;


    //Input Validation

    if(firstName == "" || lastName == "")
    {
        alert("Please fill the name!")
    }else if(address == "" )
    {
        alert("Please fill the address!")
    }
    else if(address == "" )
    {
        alert("Please fill the country!")
    }else if(val.length < 2 )
    {
        alert("Please select atleast 2 food");
    }else if(country == "")
    {
        alert("Please fill the country!");
    }else if(state == "")
    {
        alert("Please fill the state!");
    }else if(pincode == "")
    {
        alert("Please fill the pincode!");
    }else
    {
        let tableBody = document.querySelector("tbody");
        let trow = tableBody.insertRow(count++);
        let cell1 = trow.insertCell(0);
        let cell2 = trow.insertCell(1);
        let cell3 = trow.insertCell(2);
        let cell4 = trow.insertCell(3);
        let cell5 = trow.insertCell(4);
        let cell6 = trow.insertCell(5);
        let cell7 = trow.insertCell(6);
        let cell8 = trow.insertCell(7);
        
        cell1.innerHTML = count;
        cell2.innerHTML = name;
        cell3.innerHTML = radioButtonValue;
        cell4.innerHTML = val;
        cell5.innerHTML = address;
        cell6.innerHTML = country;
        cell7.innerHTML = state;
        cell8.innerHTML = pincode;

        alert("Thank you!!!")
    }
}
