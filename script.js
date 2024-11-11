document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');

    // An array with 12 image objects
    const images = [
        { src: 'assets/pink-1.png', hdSrc: 'assets/pink-1.png', caption: 'Cloudy Bridge at Dusk' },
        { src: 'assets/blue-1.jpg', hdSrc: 'assets/blue-1.jpg', caption: 'Neon Street Motion Photography' },
        { src: 'assets/orange-1.png', hdSrc: 'assets/orange-1.png', caption: 'Sunset Street With Palm Trees' },
        { src: 'assets/pink-2.png', hdSrc: 'assets/pink-2.png', caption: 'Funky Pink Building' },
        { src: 'assets/blue-2.jpg', hdSrc: 'assets/blue-2.jpg', caption: 'Silhouette With Night Sky' },
        { src: 'assets/orange-2.png', hdSrc: 'assets/orange-2.png', caption: 'City Skyline at Dusk' },
        { src: 'assets/pink-3.png', hdSrc: 'assets/pink-3.png', caption: 'Misty Lake With Sunset' },
        { src: 'assets/blue-3.jpg', hdSrc: 'assets/blue-3.jpg', caption: 'Dark Blue Moon and Mountains' },
        { src: 'assets/orange-3.jpg', hdSrc: 'assets/orange-3.jpg', caption: 'Autumn Leaves With Sunshine' },
        { src: 'assets/pink-4.jpg', hdSrc: 'assets/pink-4.jpg', caption: 'Futuristic Interior Decor' },
        { src: 'assets/blue-4.png', hdSrc: 'assets/blue-4.png', caption: 'Halloween Bokeh Photography' },
        { src: 'assets/orange-4.png', hdSrc: 'assets/orange-4.png', caption: 'Neon Orange Wall Art' },
    ];

    // Dynamically add images to the gallery
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.setAttribute('data-hd-src', image.hdSrc);
        imgElement.setAttribute('data-caption', image.caption);
        imgElement.classList.add('gallery-item');
        galleryContainer.appendChild(imgElement);
    });

    // Event delegation for handling image clicks
    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modalImg.src = event.target.getAttribute('data-hd-src');
            modalCaption.textContent = event.target.getAttribute('data-caption');
            modal.classList.remove('hidden');
            modal.style.visibility = 'visible';
        }
    });

    // Close the modal when the HD image is clicked
    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.style.visibility = 'hidden';
    });
});