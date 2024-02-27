const stickySections = [...document.querySelectorAll('.sticky')];
let images = [
'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1598935888738-cd2622bcd437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1dGUlMjBjYXR8ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1dGUlMjBjYXR8ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGN1dGUlMjBjYXR8ZW58MHx8MHx8fDA%3D'
]

images.forEach(img => {
    stickySections.forEach(section => {
       let image = document.createElement('img');
       image.src = img;
       section.querySelector('.scroll_section').appendChild(image);  
    })
})

window.addEventListener('scroll', (e) => {
for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
}
})

function transform(section) {
const offsetTop = section.parentElement.offsetTop;
const scrollSection = section.querySelector('.scroll_section');
let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
percentage = percentage < 0 ? 0 : percentage > 150 ? 150 : percentage;
scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}