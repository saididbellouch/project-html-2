document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let job = document.getElementById('job').value;
    let education = document.getElementById('education').value;
    let skills = document.getElementById('skills').value;
    let experience = document.getElementById('experience').value;

    let cvContent = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>${job}</h3>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
    `;

    let cvContainer = document.getElementById('cv-container');
    cvContainer.innerHTML = cvContent;
    cvContainer.style.display = 'block';
});