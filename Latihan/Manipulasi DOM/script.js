const outputDiv = document.getElementById("output3");
const statusText = document.createElement("p");
statusText.id = "status";
statusText.setAttribute("aria-live", "polite");

let fontSize = 16;
let textColorIndex = 0;

const backgrounds = ["#f1f5f9", "#e8f4fc", "#fff1f2", "#f0fdf4"];
const textColors = ["#333333", "#2563eb", "#b91c1c", "#166534"];
let backgroundIndex = 0;

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

function updateStatus(message) {
    statusText.textContent = `${message} | Ukuran teks: ${fontSize}px`;
}

const btnBackground = createButton("Ubah Latar Belakang", function () {
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundColor = backgrounds[backgroundIndex];
    updateStatus("Latar belakang diperbarui");
});

const btnTextColor = createButton("Ubah Warna Teks", function () {
    textColorIndex = (textColorIndex + 1) % textColors.length;
    document.querySelector(".container").style.color = textColors[textColorIndex];
    updateStatus("Warna teks diperbarui");
});

const btnIncreaseFont = createButton("Perbesar Font", function () {
    fontSize = Math.min(fontSize + 2, 24);
    document.body.style.fontSize = fontSize + "px";
    updateStatus(fontSize === 24 ? "Ukuran teks sudah maksimal" : "Teks diperbesar");
});

const btnDecreaseFont = createButton("Perkecil Font", function () {
    fontSize = Math.max(fontSize - 2, 12);
    document.body.style.fontSize = fontSize + "px";
    updateStatus(fontSize === 12 ? "Ukuran teks sudah minimal" : "Teks diperkecil");
});

const btnReset = createButton("Reset Tampilan", function () {
    fontSize = 16;
    textColorIndex = 0;
    backgroundIndex = 0;
    document.body.style.fontSize = "";
    document.body.style.backgroundColor = "";
    document.querySelector(".container").style.color = "";
    updateStatus("Tampilan dikembalikan");
});

outputDiv.append(
    btnBackground,
    btnTextColor,
    btnIncreaseFont,
    btnDecreaseFont,
    btnReset,
    statusText
);

updateStatus("Tampilan awal");