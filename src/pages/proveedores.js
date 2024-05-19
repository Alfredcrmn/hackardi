// Inicialización de Supabase
const supabaseUrl = 'https://ozovcfyeirqbckegbkxd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96b3ZjZnllaXJxYmNrZWdia3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNjQ3NTEsImV4cCI6MjAzMTY0MDc1MX0.-mX_4K34E1kx73QyOEVyMwR9pFLuG-vjZLVK4jAAi_0';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function fetchData() {
    try {
        console.log("Fetching data from Supabase...");

        let { data: proveedores, error } = await supabase
            .from('Proveedores')
            .select('*');

        if (error) {
            console.error("Error fetching Proveedores:", error);
            return null;
        }

        console.log("Datos obtenidos de Proveedores:", proveedores);
        return proveedores;
    } catch (error) {
        console.error("Error en fetchData:", error);
        return null;
    }
}

async function displayData() {
    const tableBody = document.querySelector('#proveedores-table tbody');
    tableBody.innerHTML = '<tr><td colspan="9">Cargando...</td></tr>'; // Estado de carga

    const data = await fetchData();
    tableBody.innerHTML = ''; // Limpiar el estado de carga

    if (data && data.length > 0) {
        console.log("Mostrando datos en la tabla...");
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.contacto_principal}</td>
                <td>${item.telefono}</td>
                <td>${item.correo}</td>
                <td>${item.direccion}</td>
                <td>${item.codigo_postal}</td>
                <td>${item.pais}</td>
                <td>${item.tipo_proveedor}</td>
                <td>${item.estado_proveedor}</td>
                <td>${item.metodo_pago_preferido}</td>
                <td>${item.nombre}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.log("No se encontraron datos.");
        tableBody.innerHTML = '<tr><td colspan="9">No se encontraron datos.</td></tr>';
    }
}

document.addEventListener('DOMContentLoaded', displayData);
