let attached = false;
let imageContainer = document.querySelector("#image");
let albumModal = document.getElementById('albumModal');
let currentImageIndex = 0;
let albumImages = [];

const followMouse = (event) => {
    const offset = 10; // Adjust this as needed
    imageContainer.style.left = event.pageX + offset + "px";
    imageContainer.style.top = event.pageY + offset + "px";
};

function showImage(imageSrcs) {
    if (!attached) {
        attached = true;
        imageContainer.innerHTML = ''; // Clear any previous images
        imageContainer.style.display = "block";
        
        // Dynamically create image containers based on the number of images
        imageSrcs.forEach(src => {
            let imgDiv = document.createElement('div');
            imgDiv.className = 'image-item';
            imgDiv.style.backgroundImage = `url(${src})`;
            imageContainer.appendChild(imgDiv);
        });

        document.addEventListener("pointermove", followMouse);
    }
}

function hideImage() {
    attached = false;
    imageContainer.style.display = "none";
    document.removeEventListener("pointermove", followMouse);
}

function openAlbum(images) {
    albumImages = images;
    currentImageIndex = 0; // Ensure the album starts from the first image
    displayCurrentImage();
    updateThumbnailPreview();
    updateButtonVisibility(); // Update the visibility of navigation buttons
    
    albumModal.style.display = 'flex';
    document.body.classList.add('blur-background');

    // Ensure that the click handler for closing the album doesn't interfere with navigation buttons
    albumModal.addEventListener('click', function(event) {
        if (event.target === albumModal) {
            closeAlbum();
        }
    });
}

function closeAlbum() {
    albumModal.style.display = 'none';
    document.body.classList.remove('blur-background');
}

function nextImage(event) {
    event.stopPropagation(); // Prevents closing the album when clicking the button
    currentImageIndex = (currentImageIndex + 1) % albumImages.length;
    displayCurrentImage();
    updateThumbnailPreview();
    updateButtonVisibility();
}

function prevImage(event) {
    event.stopPropagation(); // Prevents closing the album when clicking the button
    currentImageIndex = (currentImageIndex - 1 + albumImages.length) % albumImages.length;
    displayCurrentImage();
    updateThumbnailPreview();
    updateButtonVisibility();
}

function displayCurrentImage() {
    document.getElementById('albumImage').src = albumImages[currentImageIndex];
}

function updateThumbnailPreview() {
    const thumbnailContainer = document.getElementById('thumbnailPreview');
    thumbnailContainer.innerHTML = ''; // Clear previous thumbnails

    // Show the next three images
    for (let i = 1; i <= 3; i++) {
        const index = (currentImageIndex + i) % albumImages.length;
        const thumbnail = document.createElement('img');
        thumbnail.src = albumImages[index];
        thumbnail.className = 'thumbnail';
        thumbnailContainer.appendChild(thumbnail);
    }
}

function updateButtonVisibility() {
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    
    // Show/hide buttons based on current image index
    nextButton.style.display = currentImageIndex === albumImages.length - 1 ? 'none' : 'block';
    prevButton.style.display = currentImageIndex === 0 ? 'none' : 'block';
}

// let attached = false;
// let imageContainer = document.querySelector("#image");

// const followMouse = (event) => {
//     const offset = 10; // Adjust this as needed
//     // Use event.pageX and event.pageY for positioning
//     imageContainer.style.left = event.pageX + offset + "px";
//     imageContainer.style.top = event.pageY + offset + "px";
// }

// function showImage(imageSrcs) {
//     if (!attached) {
//         attached = true;
//         imageContainer.innerHTML = ''; // Clear any previous images
//         imageContainer.style.display = "block";
        
//         // Dynamically create image containers based on the number of images
//         imageSrcs.forEach(src => {
//             let imgDiv = document.createElement('div');
//             imgDiv.className = 'image-item';
//             imgDiv.style.backgroundImage = `url(${src})`;
//             imageContainer.appendChild(imgDiv);
//         });

//         document.addEventListener("pointermove", followMouse);
//     }
// }

// function hideImage() {
//     attached = false;
//     imageContainer.style.display = "none";
//     document.removeEventListener("pointermove", followMouse);
// }