
const divContainsMoney = document.querySelectorAll('.day');
async function getDataFromJSON() {
    const url = 'data.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (erro) {
        console.log(erro)
    }
}

const div = document.createElement('div');
function addDivs() {
    divContainsMoney.forEach((element, index) => {
        element.addEventListener('mouseover', () => {
            div.classList.add('data-value');
            element.insertBefore(div, element.firstChild);
            spendingValues(index);
        });
    });
}

addDivs();

async function spendingValues(index) {
    const data = await getDataFromJSON();
    div.innerHTML = `$${data[index].amount}`
}

function removeDiv() {
    div.classList.remove('data-value');
    div.classList.remove('content-value');
    div.innerText = null;
}

divContainsMoney.forEach(days => {
    days.addEventListener("mouseout", removeDiv);
});
