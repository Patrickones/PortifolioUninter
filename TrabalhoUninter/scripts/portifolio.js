let image = document.querySelectorAll('.img2-portifolio');
const imageLinks = [
    'https://github.com', 
    'https://linkedin.com', 
    'https://instagram.com' 
];

image.forEach((img, index) => {
    img.addEventListener('click', function() {
        window.location.href = imageLinks[index];
    })
})