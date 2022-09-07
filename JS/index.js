let namee = document.getElementById("name");
let lastname = document.getElementById("lastname");
let phone = document.getElementById("phone");
let email = document.getElementById("Email");
let nerden = document.getElementById("frome");
let nereye = document.getElementById("to");
let busnamme = document.getElementById("bus");
let kursi = document.getElementById("buskursi");
let fyyat = document.getElementById("fiat");

let tabdil = document.getElementById("Switch");
let create = document.getElementById("create");
let Veiw = document.getElementById("Veiw");
let Rmove = document.getElementById("Rmmove");

console.log(
  namee,
  lastname,
  email,
  nerden,
  nereye,
  busnamme,
  kursi,
  fyyat,
  phone
);
let arr;

if (localStorage.person != null) {
  arr = JSON.parse(localStorage.person);
} else {
  arr = [];
}

tabdil.onclick = function () {
  if (nereye.value != "" && nerden.value != "") {
    let t1 = nereye.value;
    nereye.value = nerden.value;
    nerden.value = t1;
  } else {
  }
};

create.onclick = function () {
  if (
    namee.value != "" &&
    lastname.value != "" &&
    email.value != "" &&
    phone.value != "" &&
    nerden.value != "" &&
    nereye.value != "" &&
    busnamme.value != "" &&
    kursi.value != "" &&
    fyyat.value != ""
  ) {
    if (kursi.value > 45 || kursi.value <= 0) {
      window.alert("The seat number is not available");
    } else {
      let newperson = {
        name: namee.value,
        lastname: lastname.value,
        phone: phone.value,
        email: email.value,
        nerden: nerden.value,
        nereye: nereye.value,
        busnamme: busnamme.value,
        kursi: kursi.value,
        fyyat: fyyat.value,
      };
      arr.push(newperson);
      namee.value = "";
      lastname.value = "";
      email.value = "";
      phone.value = "";
      nerden.value = "";
      nereye.value = "";
      busnamme.value = "";
      kursi.value = "";
      fyyat.value = "";
      localStorage.setItem("person", JSON.stringify(arr));
      showdata();
    }
  } else {
    showdata();
  }
};

function deleteall() {
  arr.splice(0, arr.length);
  localStorage.person = JSON.stringify(arr);
  showdata();
}

function showdata() {
  let table = "";
  for (let i = 0; i < arr.length; i++) {
    table += `
        <tr>
        <td>${i + 1}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].lastname}</td>
        <td>${arr[i].phone}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].busnamme}</td>
        <td>${arr[i].kursi}</td>
        <td>${arr[i].fyyat}</td>
        <td><button>update</button></td>
        <td><button onclick="deletedata(${i})">delete</button></td>
      </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;

  let redsil = document.getElementById("redsil");
  if (arr.length > 0) {
    redsil.innerHTML = `      <button style="width: 450%;" id="Veiw">Veiw</button>
    <button onclick="deleteall()" style="width: 450%;" id="Rmmove">Rmove All </button>`;
  } else {
    redsil.innerHTML = `<button style="width: 450%;" id="Veiw">Veiw</button>`;
  }
}

showdata();

function deletedata(i) {
  arr.splice(i, 1);
  localStorage.person = JSON.stringify(arr);
  showdata();
}

Rmove.onclick = function () {
  arr.splice(0, arr.length);
  localStorage.person = JSON.stringify(arr);
  showdata();
};
