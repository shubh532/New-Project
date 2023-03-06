let form = document.getElementById("form")
let showitem = document.getElementById("ul")

form.addEventListener("submit", addtoLocalStorage);
showitem.addEventListener("click",removeData)



function addtoLocalStorage(e) {
    e.preventDefault();

    let user_Details = {
        ExpenseAmount: document.getElementById("expenseamt").value,
        Description: document.getElementById("choosedescription").value,
        Category: document.getElementById("exampleFormControlSelect1").value,
    }
    localStorage.setItem("Tracke", JSON.stringify(user_Details))

    let ExpenseAmount = document.getElementById("expenseamt").value
    let Description = document.getElementById("choosedescription").value
    let Category = document.getElementById("exampleFormControlSelect1").value

    let details = `${ExpenseAmount} - ${Description} - ${Category}`



    let li = document.createElement("li")
    li.appendChild(document.createTextNode(details))
    showitem.appendChild(li)

    let delBtn = document.createElement("button")
    delBtn.className = "btn btn-danger"
    delBtn.appendChild(document.createTextNode("Delete Expense"))
    li.appendChild(delBtn)
    showitem.appendChild(li)

    let editBtn = document.createElement("button")
    editBtn.className = "btn btn-success"
    editBtn.appendChild(document.createTextNode("Edit Expense"))
    li.appendChild(editBtn)
    showitem.appendChild(li)


}

function removeData(e) {
    if (e.target.classList.contains("btn btn-danger")) {
        let li = e.target.parentElement;
        showData.removeChild(li);
        localStorage.removeItem("Tracke")
    }
}