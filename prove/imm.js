// Seleziona gli elementi HTML
const previewModal = document.getElementById('preview-modal');
const previewImage = document.getElementById('preview-image');
const galleryImages = document.querySelectorAll('.gallery-image');

// Funzione per visualizzare l'immagine in modalità di anteprima
function showPreview(imageUrl) {
  previewImage.src = imageUrl;
  previewModal.classList.add('show');
}

// Funzione per chiudere la modalità di anteprima
function closePreview() {
  previewModal.classList.remove('show');
}

// Aggiungi event listener per mostrare l'anteprima delle immagini
galleryImages.forEach(function(image) {
  image.addEventListener('click', function() {
    const imageUrl = this.getAttribute('src');
    showPreview(imageUrl);
  });
});

// Aggiungi event listener per chiudere l'anteprima
previewModal.addEventListener('click', function(event) {
  if (event.target === this) {
    closePreview();
  }
});
