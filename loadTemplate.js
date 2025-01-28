function loadTemplate(contentFile, navFile, footerFile) {
    fetch('./contents/head.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('head-placeholder').innerHTML = data;
        });

    fetch(navFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });

    fetch(footerFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-placeholder').innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const contentFile = document.body.getAttribute('data-content-file');
    const navFile = document.body.getAttribute('data-nav-file');
    const footerFile = document.body.getAttribute('data-footer-file');
    loadTemplate(contentFile, navFile, footerFile);
});