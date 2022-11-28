const patientList = document.querySelector('#patientList');
const ageMin = document.querySelector('#ageMin');
const ageMax = document.querySelector('#ageMax');
const btnAge = document.querySelector('#btnAge');
const DiagMenu = document.querySelector('#DiagMenu');
const btnUser = document.querySelector('#btnUser');
const user = document.querySelector('#user');


function printPatients(pPatientList, pDom) {
    pDom.innerHTML = "";

    if (pPatientList.length !== 0) {
        pPatientList.forEach(patient => printOnePatient(patient, pDom));
    } else {
        pDom.innerHTML = `<article id="empty" class="card p-2">
                    <h3>NO HAY PACIENTES</h3>
                    </article> `
    }
}

function printOnePatient(pPatient, pDom) {

    let article = document.createElement('article');
    article.classList.add('card', 'mb-3');
    let div = document.createElement('div');
    div.classList.add('cabecera', 'card-header');
    let ul = document.createElement('ul');
    ul.classList.add('list-group');

    let li1 = document.createElement('li');
    li1.classList.add('list-group-item', 'p-1');
    let div1 = document.createElement('div');

    let li2 = document.createElement('li');
    li2.classList.add('list-group-item', 'p-1');
    let div2 = document.createElement('div');

    let li3 = document.createElement('li');
    li3.classList.add('list-group-item', 'p-1');
    let div3 = document.createElement('div');


    div.innerText = pPatient.name + ' ' + pPatient.surname;

    li1.innerText = 'Edad: ';
    div1.innerText = pPatient.age + 'años';

    li2.innerText = 'Diagnóstico: ';
    div2.innerText = pPatient.diagnostic;

    li3.innerText = 'Nº SS: ';
    div3.innerText = pPatient.ssnum;

    article.appendChild(div);
    article.appendChild(ul);
    ul.appendChild(li1);
    li1.appendChild(div1);
    ul.appendChild(li2);
    li2.appendChild(div2);
    ul.appendChild(li3);
    li3.appendChild(div3);
    pDom.appendChild(article);

}
btnUser.addEventListener('click', getUser);
function getUser() {

    let paciente = user.value;

    console.log(paciente)


    if (paciente !== "") {
        let usuario = filterByUserValue(patient, paciente);

        printPatients(usuario, patientList);
    } else {
        printPatients(patient, patientList);
    }
}

function filterByUserValue(pPatientList, value) {
    return pPatientList.filter(user => user.name.toLowerCase().includes(value.toLowerCase()) || user.surname.toLowerCase().includes(value.toLowerCase()) || user.ssnum.toLowerCase().includes(value.toLowerCase())
    )
}



btnAge.addEventListener('click', getAge);
function getAge() {
    let min = ageMin.value;
    let max = ageMax.value;

    if (max !== "" && min !== "") {

        let filterPatient = filterByAge(patient, Number(min), Number(max))

        printPatients(filterPatient, patientList);
    } else {
        printPatients(patient, patientList)
    }
    ageMin.value = "";
    ageMax.value = "";

}

function filterByAge(pPatientList, pMin, pMax) {
    return pPatientList.filter(patient => patient.age >= pMin && patient.age <= pMax);
};
printPatients(patient, patientList);

let diagnosticos = [];

patient.forEach(function (item) {
    if (diagnosticos.indexOf(item.diagnostic) == -1) {
        diagnosticos.push(item.diagnostic);
    }
});

function printOneOption(pDiagnosis, pDom) {
    let valor = 0;
    let option = document.createElement('option', 'value');
    option.innerText = pDiagnosis;

    pDom.appendChild(option);

    valor++
}

function printAllOptions(pDiagnosisList, pDom) {
    pDiagnosisList.forEach(diagnosis => printOneOption(diagnosis, pDom))
}
printAllOptions(diagnosticos, DiagMenu);

function filterByDiagnostic(pPatientList, pDiagnostic) {
    return pPatientList.filter(user => user.diagnostic === pDiagnostic);
};

DiagMenu.addEventListener('change', getDiag);

function getDiag(e) {
    let diag = e.target.value;

    if (diag !== "DIAGNÓSTICOS") {
        let filterDiag = filterByDiagnostic(patient, diag);
        console.log(filterDiag)

        printPatients(filterDiag, patientList);
    } else {
        printPatients(patient, patientList)
    }
}



