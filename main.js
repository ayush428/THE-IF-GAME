async function loadTextFileIntoArray(filePath) {
    try {
        const response = await fetch(filePath);
        const text = await response.text();
        const lines = text.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
        return lines;
    } catch (error) {
        console.error('Error loading file:', error);
    }
}

// Example usage
const filePath = 'TXTS.txt'; // Change this to the path of your text file
loadTextFileIntoArray(filePath).then(lines => {
    var arr = lines;
    const len = arr.length;

    document.getElementById("IFb").onclick = onClickifd;
    document.getElementById("THENb").onclick = onClickthend;

    function onClickthend() {
        var thendiv = document.getElementById('thend');
        var thenindex = getRandomInt(0, len - 1);
        thendiv.innerHTML = arr[thenindex];
    }

    function onClickifd() {
        var ifdiv = document.getElementById('ifd');
        var ifindex = getRandomInt(0, len - 1);
        ifdiv.innerHTML = arr[ifindex];
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
