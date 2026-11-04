function hitung(operasi) {
      const a = parseFloat(document.getElementById('angka1').value);
      const b = parseFloat(document.getElementById('angka2').value);
      const hasilEl = document.getElementById('hasil');
 
      if (isNaN(a) || isNaN(b)) {
        hasilEl.textContent = 'Isi kedua angka dulu!';
        return;
      }
 
      let hasil;
      if (operasi === '+') hasil = a + b;
      else if (operasi === '-') hasil = a - b;
      else if (operasi === '*') hasil = a * b;
      else if (operasi === '/') {
        if (b === 0) {
          hasilEl.textContent = 'Tidak bisa dibagi 0!';
          return;
        }
        hasil = a / b;
      }
 
      hasilEl.textContent = 'Hasil: ' + hasil;
    }