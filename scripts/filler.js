const baseUrl = "https://raw.githubusercontent.com/JeelDobariya38/Coding-Notes/master/";


function isRealtiveUrl(url) {
    if (url.startsWith("http:") || url.startsWith("https:")) {
        return false
    }
    return true
}

function getUrl(element) {
    let url = element.getAttribute('codeFilePath');

    if (!url) {
        console.error("Url Not Found!!!");
        return undefined;
    }

    if (isRealtiveUrl(url)) {
        url = baseUrl + url;
    }

    return url;
}

function writeContent(element, content) {
    element.textContent = '';
    const textNode = document.createTextNode(content);
    element.appendChild(textNode);
}

document.addEventListener('DOMContentLoaded', function () {
    const codeElements = document.querySelectorAll(".fill-needed");

    codeElements.forEach(async (codeElem) => {
        let url = getUrl(codeElem);
        let content = undefined;

        if (url) {
            let res = await fetch(url);
            if (res.ok) {
                content = await res.text();
            }
        }

        if (!content) {
            content = `Error in fetching the code. please try later!!!`;
        }

        writeContent(codeElem, content);
        refreshprismjs()
    })
});