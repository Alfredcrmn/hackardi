// Configuración de Supabase
const SUPABASE_URL = 'https://ozovcfyeirqbckegbkxd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96b3ZjZnllaXJxYmNrZWdia3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNjQ3NTEsImV4cCI6MjAzMTY0MDc1MX0.-mX_4K34E1kx73QyOEVyMwR9pFLuG-vjZLVK4jAAi_0'; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Lógica de inicio de sesión
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Consulta a la tabla login
            let { data, error } = await supabase
                .from('login')
                .select('*')
                .eq('gmail', email)
                .eq('password', password)
                .single();

            const loginResult = document.getElementById('loginResult');

            if (error) {
                loginResult.innerText = 'Error: ' + error.message;
            } else if (data) {
                loginResult.innerText = 'Inicio de sesión exitoso. Redirigiendo...';
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirigir a la página principal
                }, 2000);
            } else {
                loginResult.innerText = 'Credenciales incorrectas. Inténtalo de nuevo.';
            }
        });
    }
});


