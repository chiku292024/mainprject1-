const DEFAULT_DATA = {
    students: 0,
    teachers: 0,
    courses: 0,
    classes: 0,
    divisions: 0
};

let adminData = JSON.parse(localStorage.getItem('adminData')) || { ...DEFAULT_DATA };

function saveData() {
    localStorage.setItem('adminData', JSON.stringify(adminData));
}

function setCount(key, value) {
    adminData[key] = value;
    saveData();
}

function addOne(key) {
    adminData[key] = (adminData[key] || 0) + 1;
    saveData();
}

function removeOne(key) {
    adminData[key] = Math.max(0, (adminData[key] || 0) - 1);
    saveData();
}