function trimCodeElements(className) {
    // This script is designed to format code blocks on a webpage by removing unnecessary leading spaces while preserving the intended indentation. Here's a step-by-step explanation of how it works:

    // 1. Element Selection: The script selects all elements with a specific class name, typically elements with the class name "trim-code," found on the webpage.

    // 2. Text Content Retrieval: For each selected element, which is expected to contain code blocks, the script retrieves the text content. This content may include code with uneven indentation.

    // 3. Line Separation: The code content is split into individual lines based on newline characters (newline character `\n`). This operation transforms the code into an array where each element represents a line of code.

    // 4. Minimum Indentation Calculation: To maintain consistent indentation, the script calculates the minimum indentation level. It does so by examining each line within the code block, excluding the first and last lines. For each non-empty line, the script determines the number of leading spaces and keeps track of the smallest number of leading spaces.

    // 5. Indentation Removal: The script processes each line in the code block, including the first line, and removes the minimum indentation from each line. This ensures that the code's indentation remains uniform while eliminating unnecessary leading spaces.

    // 6. Text Content Update: After completing the cleaning process, the script updates the text content of the element with the formatted code, making it more readable and visually consistent.

    // This script is useful for enhancing the display of code on webpages, improving its readability by aligning indentation while preserving code structure.

    let elements = document.querySelectorAll("." + className);
    for (let i = 0; i < elements.length; i++) {
        let codeElement = elements[i];
        let codeContent = codeElement.textContent;

        // Split the code content into lines
        let codeLines = codeContent.split('\n');
        let minIndent = Number.MAX_SAFE_INTEGER;

        // Find the minimum indentation level
        for (let j = 0; j < codeLines.length - 1; j++) {
            let line = codeLines[j];
            if (line.trim() !== "") {
                let leadingSpaces = line.length - line.trim().length;
                minIndent = Math.min(minIndent, leadingSpaces);
            }
        }

        let cleanedCode = "";

        // Remove the minimum indentation from each line, including the last line
        for (let j = 0; j < codeLines.length; j++) {
            let line = codeLines[j];
            cleanedCode += line.slice(minIndent) + (j === codeLines.length - 1 ? '' : "\n");
        }

        codeElement.innerHTML = "<code>" + cleanedCode + "</code>";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let preElements = document.querySelectorAll("pre");

    // Loop through the selected elements and add the class
    preElements.forEach(function (preElement) {
        preElement.classList.add("trim-code");
    });
    trimCodeElements("trim-code");
});