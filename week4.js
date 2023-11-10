// Add your JavaScript here
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-container img');
  
    images.forEach((image, index) => {
      // Add tabindex attribute dynamically
      image.setAttribute('tabindex', index + 1);
  
      // Add focus event listener
      image.addEventListener('focus', function () {
        // Handle focus event (update image and alt text)
        this.src = `your_updated_image${index + 1}.jpg`;
        this.alt = `Updated description for Image ${index + 1}`;
        this.parentElement.querySelector('.overlay').style.opacity = 1;
      });
  
      // Add blur event listener
      image.addEventListener('blur', function () {
        // Handle blur event (return to original state)
        this.src = `your_image${index + 1}.jpg`;
        this.alt = `Description for Image ${index + 1}`;
        this.parentElement.querySelector('.overlay').style.opacity = 0;
      });
    });
  });
  