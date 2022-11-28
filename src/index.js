import './index.css'
import MY_IMAGE from './assets/js.jpg'

console.log('Hello World!')

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript'
h1.classList.add('h1')
h1.classList.add('center')
document.body.append(h1)
const img = document.createElement('img')
img.src = MY_IMAGE
img.classList.add('center')
document.body.append(img)
