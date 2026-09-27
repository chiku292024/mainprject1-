// ============================================================
// data.js — shared storage for ALL admin pages
// ============================================================

const DEFAULT_DATA = {
    students:  0,
    teachers:  0,
    courses:   0,
    classes:   0,
    divisions: 0
};

// -------- Load or initialize the main counts object --------
let adminData = JSON.parse(localStorage.getItem('adminData')) || { ...DEFAULT_DATA };

// -------- Save helper --------
function saveData() {
    localStorage.setItem('adminData', JSON.stringify(adminData));
}

// -------- Count helpers --------
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

// ============================================================
// LIST STORAGE HELPERS
// Each list (courses, divisions, teachers, classes) is stored
// in localStorage under its own key.
// ============================================================

function loadList(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveList(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
    // Also update the counter in adminData
    adminData[key] = list.length;
    saveData();
}

// Small utility to safely escape HTML
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Simple unique ID generator
function makeId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}