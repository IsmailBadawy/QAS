// color modes
const orangeMode = {
    mainColorBody: '#FFF8F0',
    fontColor: '#D97706',
    seconderyColor: '#4b3723',
    btnColor: '#F97316',
    hoverColor: '#f59958',
    borderColor: '#FFEDD5',
    backgroundImage: 'url(./images/background-orange.svg)'

};

const greenMode = {
    mainColorBody: '#F0FFF4',
    fontColor: '#2D6A4F',
    seconderyColor: '#34473d',
    btnColor: '#52B788',
    hoverColor: '#78d1a9c7',
    borderColor: '#A3E635',
    backgroundImage: 'url(./images/background-green.svg)'

};

const navyMode = {
    mainColorBody: '#F8FAFC',
    fontColor: '#1E293B',
    seconderyColor: '#034eb8',
    btnColor: '#334155',
    hoverColor: '#4e6380',
    borderColor: '#CBD5E1',
    backgroundImage: 'url(./images/background-navy.svg)'

};

// Get elements
const orangeBtn = document.getElementById('orange-mode');
const greenBtn = document.getElementById('green-mode');
const navyBtn = document.getElementById('navy-mode');

function applyTheme(theme) {
    Object.keys(theme).forEach(key => {
        if (key === 'backgroundImage') {
            document.body.style.backgroundImage = theme[key];
        } else {
            document.documentElement.style.setProperty(`--${key}`, theme[key]);
        }
    });
    localStorage.setItem('selectedTheme', JSON.stringify(theme));
}


const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme) {
    applyTheme(JSON.parse(savedTheme));
}

// Event Listeners for buttons
orangeBtn.addEventListener('click', () => applyTheme(orangeMode));
greenBtn.addEventListener('click', () => applyTheme(greenMode));
navyBtn.addEventListener('click', () => applyTheme(navyMode));
