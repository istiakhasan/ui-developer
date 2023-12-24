const activity_card = document.getElementById("activity_card");
const activityArray = [
  {
    date: "2020-12-27",
    fName: "Call Katie",
    nName: "Daniel",
  },
];
// common function for load the activity
const commonFunction = () => {
  activity_card.innerHTML = "";

  for (let i = 0; i < activityArray.length; i++) {
    const item = activityArray[i];
    const div = document.createElement("div");


    div.innerHTML = `
    <div class="d-flex align-items-center p-3 justify-content-between">
<div>
    <p class="mb-0">${item?.fName}</p>
    <p class="text-secondary "><small>${item?.date} |
        ${item?.nName}</small></p>
</div>
<div class="d-flex gap-3">
    <p class="done_btn_wrapper"></p>

    <div class="dropdown">
        <p
            class="three_dot d-flex flex-column gap-1 dropdown-toggle"
            href="#" role="button" id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </p>

        <ul class="dropdown-menu p-2"
            aria-labelledby="dropdownMenuLink">
            <li onclick="handleDone(${i})">Mark as Done</li>
            <li onclick="handleDelete(${i})">Delete</li>
        </ul>
    </div>
</div>
</div>
<hr class="m-0">
`;

    activity_card.appendChild(div);
  }
};

commonFunction();
// create activity 
const handleSubmit = () => {
  const date = document.getElementById("date_input");
  const fName = document.getElementById("fl_name");
  const nName = document.getElementById("nick_name");
  console.log(date.value,fName.value,nName.value); 
  if(!date.value){
   return  alert('Date field is required')
  }
  if(!fName.value){
   return  alert('Full Name is required')
  }
  if(!nName.value){
   return alert('Nick Name is required')
  }
  var inputDate = new Date(date.value);

  // Define options for formatting
  var options = { month: "short", day: "numeric", year: "numeric" };

  // Format the date using toLocaleDateString
  var formattedDate = inputDate.toLocaleDateString("en-US", options);
  activityArray.push({
    date: formattedDate,
    fName: fName.value,
    nName: nName.value,
  });

  commonFunction(activityArray);
  document.addEventListener('closeModal', () => {
    var modal = new bootstrap.Modal('#staticBackdrop');
    modal.hide();
});
};
// mark as done 
const handleDone = (i) => {
  const done_btn_wrapper = document.getElementsByClassName("done_btn_wrapper");
  const b = done_btn_wrapper[i];
  b.innerHTML = `<i class="fa-solid fa-check cm_checkbox"></i>`;
};
// delete activity
const handleDelete = (i) => {
  activityArray.splice(i, 1);
  commonFunction(activityArray);
  console.log(activityArray, "array");
};
