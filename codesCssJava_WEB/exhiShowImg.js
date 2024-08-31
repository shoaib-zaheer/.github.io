let attached = false;
let imageContainer = document.querySelector("#image");

const followMouse = (event) => {
    const offset = 10; // Adjust this as needed
    // Use event.pageX and event.pageY for positioning
    imageContainer.style.left = event.pageX + offset + "px";
    imageContainer.style.top = event.pageY + offset + "px";
}

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