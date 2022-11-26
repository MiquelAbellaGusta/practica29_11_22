const patientList = document.querySelector('#patientList');

function printPatients(pPatientList, pDom) {
    pPatientList.forEach(patient => printOnePatient(patient, pDom));
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
printPatients(patient, patientList);