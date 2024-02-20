let addbtn = document.getElementById("addbtn")
showNodes();

addbtn.addEventListener("click", (e) => {
    let addtxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj)

    showNodes();
})


function showNodes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }


    let html = ""
    notesObj.forEach((ele, ind) => {
        html += `   
        <div id="notes" class="cookie-card card">
            <span class="title">Note ${ind + 1}</span>
            <p class="description">${ele}</p>
            <div class="actions">
                <button id = "${ind}" onclick ="deleteNode(this.id)" class="accept">
                    Delete
                </button>
            </div>
        </div>
`
    });
    let nodeEle = document.getElementById("notes");

  
    if (notesObj.length != 0) {
        nodeEle.innerHTML = html;

    }
    else{

        nodeEle.innerHTML = `Nothing is Added `
    }

}

// Delete Note

function deleteNode(index) {
    let notes = localStorage.getItem("notes");
    console.log('I am delete' , index);
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNodes();
    
}


