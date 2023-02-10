const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

const btnSubmitInfo = document.getElementById("btnSubmitInfo");
btnSubmitInfo.addEventListener("click", showInformationEntries);

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	console.log("Made it to checkSame");
	if (kp1.value !== kp2.value) {
		message.textContent = "Passwords DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#aa3333";
		kp2.style.color = "#fff";
		kp1.focus();
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";

	}
}

function showInformationEntries() {
	var confirmTableId = document.querySelector(".confirmtableoff");
	confirmTableId.classList.add("confirmtable");
	confirmTableId.classList.remove("confirmtableoff");
	var confirmFullName = document.getElementById("joinfullname").value;
	var confirmEmail = document.getElementById("joinemail").value;
	var confirmRating = document.getElementById("r").value;
	var confirmPassword = document.getElementById("keyphrase").value;
	document.getElementById("confirmfullname").innerHTML = confirmFullName;
	document.getElementById("confirmemail").innerHTML = confirmEmail;
	document.getElementById("confirmrating").innerHTML = confirmRating;
	document.getElementById("confirmusername").innerHTML = confirmPassword;
}
