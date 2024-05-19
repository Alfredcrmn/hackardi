document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Verifica si el email y la contraseña son correctos
            if (email === "nose@gmail.com" && password === "nose") {
                // Redirige a la página index.html si son correctos
                window.location.href = 'index.html';
            } else {
                // Muestra un mensaje de error si el email o la contraseña son incorrectos
                const loginResult = document.getElementById('loginResult');
                loginResult.innerText = 'Volver a intentar';
            }
        });
    }
});
