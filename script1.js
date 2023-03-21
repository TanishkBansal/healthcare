const cameraBtn = document.getElementById('cameraBtn');
const cameraFeed = document.getElementById('cameraFeed');
const photoCanvas = document.getElementById('photoCanvas');
const prescriptionForm = document.getElementById('prescriptionForm');

cameraBtn.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      cameraFeed.style.display = 'block';
      cameraFeed.srcObject = stream;
      cameraFeed.play();
    })
    .catch(error => {
      console.log('Error accessing camera:', error);
    });
});

cameraFeed.addEventListener('canplay', () => {
  photoCanvas.width = cameraFeed.videoWidth;
  photoCanvas.height = cameraFeed.videoHeight;
photoCanvas.getContext('2d').drawImage(cameraFeed, 0, 0, photoCanvas.width, photoCanvas.height);
cameraFeed.style.display = 'none';
prescriptionForm.style.display = 'none';
photoCanvas.style.display = 'block';
});

photoCanvas.addEventListener('click', () => {
const dataUrl = photoCanvas.toDataURL();
const img = document.createElement('img');
img.src = dataUrl;
document.body.appendChild(img);
prescriptionForm.style.display = 'block';
photoCanvas.style.display = 'none';
});

prescriptionForm.addEventListener('submit', event => {
event.preventDefault();
// Handle form submission here
});