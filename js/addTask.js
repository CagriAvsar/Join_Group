function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  let allTasks = [];

  function addTask(){
    let title = document.getElementById('title-input').value; 
    let category = document.getElementById('category-dropdown').value;
    let description = document.getElementById('description-input').value;
    let duedate = document.getElementById('due-date-input').value;
    let urgency = document.getElementById('urgency-dropdown').value;
    let assignedto = document.getElementById('assigned-to').value; /* funktioniert noch nicht */



    console.log('The Title is ', title);
    console.log('The Category is ', category);
    console.log('The Description is ', description);
    console.log('The Due Date is ', duedate);
    console.log('The Urgency is ', urgency);
    console.log('The Assigned to is ', assignedto); /* funktioniert noch nicht */

    let task = {
      'title': title,
      'category': category,
      'description': description,
      'duedate': duedate,
      'urgency': urgency,
      'assigned to': assignedto, /* funktioniert noch nicht */
      'createdat': new Date().getTime()
    };

      

      allTasks.push(task);

      console.log(allTasks);

      let AllTasksAsString = JSON.stringify(allTasks);
      localStorage.setItem('allTasks', AllTasksAsString);
    
  }

  function pickDate(){
    const input = document.getElementById('due-date-input');
    const datepicker = new TheDatepicker.Datepicker(input);
    datepicker.render();
  }

  function showAssignedToPics(){
    document.getElementById('assigned-to-pics').classList.remove('d-none');
    document.getElementById('assigned-to-pics').classList.add('d-show');
  }


  function cancel(){
    document.getElementById('assigned-to-pics').classList.add('d-none');
    document.getElementById('assigned-to-pics').classList.remove('d-show');
  }

