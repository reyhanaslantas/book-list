let kitaplar = [];

const kitapForm = document.getElementById('kitapForm');
const kitapAdiInput = document.getElementById('kitapAdi');
const yazarAdiInput = document.getElementById('yazarAdi');
const eklenenKitaplarListesiUl = document.getElementById('eklenenKitaplarListesiUl');
const kitaplarListesiUl = document.getElementById('kitaplarListesiUl');

function kitapEkle(event) {
    event.preventDefault(); 

    // Kullanıcıdan alınan değerleri alalım
    const kitapAdi = kitapAdiInput.value;
    const yazarAdi = yazarAdiInput.value;

    kitapAdiInput.value = '';
    yazarAdiInput.value = '';

    kitaplar.push({ kitapAdi, yazarAdi });

    eklenenKitaplarGuncelle(kitapAdi, yazarAdi);
    kitapListesiniGuncelle();
    kitapAdiInput.focus();
}
function eklenenKitaplarGuncelle(kitapAdi, yazarAdi) {
    const li = document.createElement('li');
    li.textContent = `${kitapAdi} - ${yazarAdi}`;

    eklenenKitaplarListesiUl.appendChild(li);
}

// Tüm kitapları göster
function kitapListesiniGuncelle() {
    kitaplarListesiUl.innerHTML = ''; 
    kitaplar.forEach((kitap, index) => {
        const li = document.createElement('li');
        li.textContent = `${kitap.kitapAdi} - ${kitap.yazarAdi}`;

        const silButton = document.createElement('button');
        silButton.textContent = 'Sil';
        silButton.classList.add('silButton');
        silButton.addEventListener('click', () => kitapSil(index));

        li.appendChild(silButton);
        kitaplarListesiUl.appendChild(li);
    });
}

// Kitap silme 
function kitapSil(index) {
    kitaplar.splice(index, 1); 

    const eklenenKitaplarListesi = eklenenKitaplarListesiUl.querySelectorAll('li');
    eklenenKitaplarListesi[index].remove();

    
    kitapListesiniGuncelle();
}

kitapForm.addEventListener('submit', kitapEkle);

kitapListesiniGuncelle();
