var selectedRow = null;
// ----------------submit Data --------------------
function onFormSubmit(){
    var formData= readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    
    resetForm();
    document.getElementById('fullName').focus;
}

function readFormData(){
    var fromData = {};
    fromData["fullName"]=document.getElementById('fullName').value;
    fromData["email"]=document.getElementById('email').value;
    fromData["number"]=document.getElementById('number').value;
    return fromData;
}
// ----------------reset Data --------------------
function resetForm(){
    document.getElementById('fullName').value='';
    document.getElementById('email').value='';
    document.getElementById('number').value='';
}
// ----------------insert Data --------------------
function insertNewRecord(data){
    // var formData = {};
    var table= document.getElementById('employeelist').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<input type="button" value="Edit" onClick="onEdit(this)"> ||
    <input type="button" value="Delete" onClick="onDelete(this)">`;
}
// ----------------edit Data --------------------
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value=selectedRow.cells[0].innerHTML;

    document.getElementById('email').value=selectedRow.cells[1].innerHTML;

    document.getElementById('number').value=selectedRow.cells[2].innerHTML;
}
// ----------------update Data --------------------
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.email;
    selectedRow.cells[2].innerHTML=formData.number;
}

// ----------------delete Data --------------------
function onDelete(td){
    if(confirm("are u sure")){
        row = td.parentElement.parentElement;
        document.getElementById('employeelist').deleteRow(row.rowIndex);
    }
    resetForm();
   
}

// ----------------searching Data --------------------
function searchData(){
    var filter = document.getElementById('search').value.toLowerCase();
    var searchtr=document.getElementById('employeelist').getElementsByTagName('tr');

    for(i=0; i<searchtr.length; i++){
        searchtd=searchtr[i].getElementsByTagName('td')[0];
        if(searchtd){
            var textValue=searchtd.textcontent || searchtd.innerHTML;
            if(textValue.toLowerCase().indexOf(filter)> -1){
                searchtr[i].style.display="";   
            }
            else{
                searchtr[i].style.display="none";
            }
        }
    }
}