document.addEventListener("DOMContentLoaded", function () {
    // Create and style elements
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.height = "100vh";
    container.style.fontFamily = "Arial, sans-serif";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter text";
    input.style.padding = "10px";
    input.style.fontSize = "16px";
    input.style.width = "250px";
    input.style.marginBottom = "10px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";
    input.style.textAlign = "center";

    const button = document.createElement("button");
    button.textContent = "Reverse String";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    const resultContainer = document.createElement("div");
    resultContainer.style.marginTop = "20px";
    resultContainer.style.padding = "10px";
    resultContainer.style.backgroundColor = "#f0f0f0";
    resultContainer.style.borderRadius = "5px";
    resultContainer.style.minWidth = "250px";
    resultContainer.style.textAlign = "center";
    resultContainer.style.fontSize = "18px";

    // Reverse string function
    function reverseString() {
        const text = input.value;
        const reversedText = text.split("").reverse().join("");
        resultContainer.textContent = reversedText;
    }

    // Button click event
    button.addEventListener("click", reverseString);

    // Enter key event
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            reverseString();
        }
    });

    // Append elements to container and body
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(resultContainer);
    document.body.appendChild(container);
});
