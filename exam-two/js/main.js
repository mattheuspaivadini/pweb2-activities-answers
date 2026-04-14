import flags from './model/flags.js';

const mainContainer = document.querySelector('main.row');
function renderFlags() {
    flags.forEach(flag => {
        const flagElement = document.createElement('div');
        flagElement.classList.add('col-3', 'mb-4', 'col-lg-2', 'mb-4');
        flagElement.innerHTML = `
            <div class="card">
                <img src="${flag.image}" class="card-img-top border-bottom" alt="${flag.name}" style="height: 100px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${flag.name}</h5>
                </div>
            </div>
        `;
        mainContainer.appendChild(flagElement);
    });
} renderFlags();
