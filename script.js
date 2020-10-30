function copyCode() {
    const text = document.getElementById("code");

    const fakeText = document.createElement("textarea");
    fakeText.innerHTML = text.innerHTML;
    document.body.appendChild(fakeText);
    
    fakeText.select();
    document.execCommand("copy");
    document.body.removeChild(fakeText);
    alert("Copied");
}