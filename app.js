function updateTime() {
  // Hamburg
  let hamburgElement = document.querySelector("#hamburg");
  let hamburgDateElement = hamburgElement.querySelector(".date");
  let hamburgTimeElement = hamburgElement.querySelector(".time");
  let hamburgTime = moment();

  hamburgDateElement.innerHTML = hamburgTime.format("MMMM Do, YYYY");
  hamburgTimeElement.innerHTML = hamburgTime
    .tz("Europe/Berlin")
    .format("hh:mm:ss [<small>]A[</small>]");

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment();

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
