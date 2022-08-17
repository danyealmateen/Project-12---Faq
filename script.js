const faq = document.querySelectorAll('.faq');

faq.forEach(faqs => {
    faqs.addEventListener('click', () =>{
        removeActiveClass()
        faqs.classList.add('active');
    })
});

function removeActiveClass() {
    faq.forEach(faqs => {
        faqs.classList.remove('active')
    });
}


