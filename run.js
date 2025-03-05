document.getElementById('run').addEventListener('click', function() {
    const code = window.editor.getValue();
    const outputFrame = document.getElementById('outputFrame');
    outputFrame.srcdoc = code;
    document.getElementById('output').style.display = 'block';
});

function saveCode() {
    const code = window.editor.getValue();
    localStorage.setItem('savedCode', code);
}

window.onload = function() {
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
        window.editor.setValue(savedCode);
    }
};

document.getElementById('savecode').addEventListener('click', saveCode);

document.getElementById('liblinks').addEventListener('click', function() {
    const divLinks = document.getElementById('divlinksels');
    divLinks.style.display = divLinks.style.display === 'none' || divLinks.style.display === '' ? 'block' : 'none';
});
