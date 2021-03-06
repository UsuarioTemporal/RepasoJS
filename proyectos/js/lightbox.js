
const getImages = container => [...container.querySelectorAll('img')]


const getLargeImages = gallery => gallery.map(el=>el.src)
                                        .map(el=>el.replace('thumb','large'))

const getDescription =gallery =>gallery.map(el=>el.alt)

const openLightBoxEvent = (container,gallery,large,description)=>{
    container.addEventListener('click',(e)=>{
        let el = e.target,
            index = gallery.indexOf(el)
        if(el.tagName==='IMG'){
            openLightBox(gallery,index,large,description)
        }
    })
}

const closeModalFunction = modalElement =>{
    let closeModal = modalElement.querySelector('.close-modal')
    closeModal.addEventListener('click',(e)=>{
        e.preventDefault()
        document.body.removeChild(modalElement)
    })
}
const navigateLightbox=(lightboxElement,larges,descriptions,index)=>{
    let prevButton = lightboxElement.querySelector('.prev'),
        nextButton = lightboxElement.querySelector('.next'),
        image = lightboxElement.querySelector('img'),
        description = lightboxElement.querySelector('p'),
        counter = lightboxElement.querySelector('span'),
        closeButton = lightboxElement.querySelector('.close-modal')

    window.addEventListener('keyup',e=>{
        if(e.key==='ArrowRight') nextButton.click()
        if(e.key==='ArrowLeft') prevButton.click()
        if(e.key==='Escape') closeButton.click()
    })
    
    lightboxElement.addEventListener('click',e=>{
        e.preventDefault()
        let target = e.target 
        if (target===prevButton){
            index= index===0 ? larges.length-1 : index-1
        }else if(target==nextButton){
            index= index===larges.length-1 ? 0 : index+1
        }
        description.textContent=descriptions[index]
        counter.textContent = `Imagen ${index+1} de ${descriptions.length}`
        image.src =larges[index]
    })
}
const openLightBox = (gallery,index,larges,description)=>{
    let lightboxElement = document.createElement('div')
    lightboxElement.innerHTML = `
        <div class="lightbox-overlay">
            <figure class="lightbox-container">
                <div class="close-modal">X</div>
                <img src="${larges[index]}" class="lightbox-image">
                <figcaption>
                    <p class="lightbox-description">${description[index]}</p>
                    <nav class ="lightbox-navigator">
                        <a href="#" class="lightbox-navigation__button prev">
                        ◀
                        </a>
                        <span class="lightbox-navigation__counter">Imagen ${index+1} de ${gallery.length}</span>
                        <a href="#" class="lightbox-navigation__button next">
                        ▶
                        </a>
                    </nav>
                </figcaption>
            </figure>
        </div>
    `
    lightboxElement.id = 'lightbox'
    document.body.appendChild(lightboxElement)

    closeModalFunction(lightboxElement)
    navigateLightbox(lightboxElement,larges,description,index)
}
const lightbox = container =>{
    let images = getImages(container),
    larges = getLargeImages(images),
    description = getDescription(images)
    openLightBoxEvent(container,images,larges,description)
}
lightbox(document.getElementById('gallery-container'))