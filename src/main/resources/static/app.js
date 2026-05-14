async function loadMessage() {

    const response = await fetch('/api/hello');

    const data = await response.text();

    document.getElementById('result').innerText = data;
}