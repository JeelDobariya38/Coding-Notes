function trimCodeElements(className) {
    var elements = document.querySelectorAll("." + className);
    for (var i = 0; i < elements.length; i++) {
        var codeElement = elements[i];
        var codeContent = codeElement.textContent;
        
        var semiCleanedCode = codeContent.split('\n').map((line) => line.trim());
        var cleanedCode = "";
        for (var j=1; j < semiCleanedCode.length-1; j++)
        {
            cleanedCode = cleanedCode + semiCleanedCode[j] + "\n";
        }
        codeElement.textContent = cleanedCode;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    trimCodeElements("trim-code");
});
