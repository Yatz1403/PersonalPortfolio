

let links = document.querySelectorAll('.links')


let projects = document.querySelectorAll('.project-card');
projects.forEach((card, index) => {
    let closeBtn = card.querySelector('.close-btn');

    closeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        card.classList.remove('active');
        projects.forEach(item => item.classList.remove('blur'));
    });
    card.addEventListener('click', (event) => {
        if (!event.composedPath().includes(closeBtn)) {
            projects.forEach((item, i) => {
                item.classList.remove('active');
                if (i !== index) {
                    item.classList.add('blur');
                } else {
                    item.classList.remove('blur');
                }
            });
            card.classList.add('active');
        }
    });
});

function sendEmail(){
    window.location.href = "mailto:reddyyatishprof@gmail.com?subject=Job%20Opportunity&body=Hello%20Yatish,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.";
}

const tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn => {
    btn.addEventListener('click', () => {
        let filterText = btn.innerHTML.trim().toLowerCase(); // Trim spaces and convert to lowercase

        projects.forEach(card => {
            let cardTags = card.getAttribute('data-tags').toLowerCase(); // Convert to lowercase

            if (filterText === 'all') {
                card.style.display = 'block';
            } else {
                if (cardTags.includes(filterText)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
        tags.forEach(item=>item.classList.remove('active'));
        btn.classList.add('active');
    });
});

