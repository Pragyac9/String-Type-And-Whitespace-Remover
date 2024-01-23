function removeWhitespaces() {
    const remove = document.getElementById('inputText').value;
    const result = remove.replace(/\s+/g, '');
    document.getElementById('outputText').value = result;
}