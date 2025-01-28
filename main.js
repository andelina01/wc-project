setLocalStorage = (key, value) => { // for language
    localStorage.setItem(key, value);
}

setLocalStorageJson = (key, value) => { // for form
    localStorage.setItem(key, JSON.stringify(value));
}


getLocalStorageJson = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return ""
    }
}

getLocalStorage = (key) => {
    return localStorage.getItem(key);
}

const changeLanguage = (language) => {
    setLocalStorage("language", language);
    // setActiveLanguage(language);
    loadLanguage();
}
const defaultLanguage = "en";

const loadLanguage = () => {
    let language = getLocalStorage("language");
    if (!language) {
        language = defaultLanguage;
        setLocalStorage("language", language);
    }
    const currentPath = window.location.pathname;
    let newPath;
    if (language === "sr") {
        if (!currentPath.includes("_sr.html")) {
            newPath = currentPath.replace(".html", "_sr.html");
        }
    } else {
        newPath = currentPath.replace("_sr.html", ".html");
    }
    if (newPath && currentPath !== newPath) {
        window.location.pathname = newPath;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadLanguage();
});