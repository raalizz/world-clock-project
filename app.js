function ShowCurrentDateAndTime(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format(`dddd, MMMM DD, YYYY hh:mm:ss A`);
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}
let countriesSelect = document.querySelector("#cities");
countriesSelect.addEventListener("change", ShowCurrentDateAndTime);
