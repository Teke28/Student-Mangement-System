// function to handle form submission
function callvalue() {
    // prevent form submission from refreshing the page
    event.preventDefault();
  
    // get values from form inputs
    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const website = document.getElementById("inputWebsite").value;
    const imagelink = document.getElementById("inputImage").value;
    const gender = document.querySelector('input[name="radioGender"]:checked').value;
    
    // get values from checkboxes
    const skills = Array.from(document.getElementsByName("skills[]"))
      .filter((box) => box.checked)
      .map((box) => box.value);
  
    // get reference to display table
    const display = document.getElementById("viewDesc");
  
    // create new row in table
    const row = display.insertRow();
  
    // create cells for name, email, website, gender, and skills
    const cell1 = row.insertCell();
    cell1.innerHTML = `
      <tr>
        <td>
          <p id="nameView">${name}</p>
          <p>${gender}</p>
          <p>${email}</p>
          <p><a href="${website}" target="_blank">${name} Website</a></p>
          <p>${skills}</p>
        </td>
      </tr>
    `;
  
    // create cell for image
    const cell2 = row.insertCell();
    cell2.innerHTML = `
      <tr>
        <td>
          <img class="col-12" src="${imagelink}" alt="Image Not Found">
        </td>
      </tr>
    `;
  
    // append new row to display table
    display.appendChild(row);
  
    // reset form
    document.getElementById("enrollmentForm").reset();
  }