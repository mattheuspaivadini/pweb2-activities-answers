import flags from './model/flags.js';

const mainContainer = document.querySelector('main.row');
function renderFlags() {
    flags.forEach(flag => {
        const flagElement = document.createElement('div');
        flagElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
        flagElement.innerHTML = `
            <div class="card">
                <img src="${flag.image}" class="card-img-top border-bottom" alt="${flag.name}" style="height: 150px; object-fit: cover; background-color: #f8f9fa;">
                <div class="card-body d-flex align-items-center justify-content-center">
                    <h5 class="card-title">${flag.name}</h5>
                </div>
            </div>
        `;
        mainContainer.appendChild(flagElement);
    });
} renderFlags();
