<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Gestión de Estudiantes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial; margin: 40px; }
        h1 { color: #333; }
        form input { margin: 5px; padding: 5px; }
        button { padding: 5px 10px; margin: 5px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 8px; }
        th { background-color: #f0f0f0; }
    </style>
</head>
<body>

    <h1>Gestión de Estudiantes</h1>

    <form id="estudianteForm">
        <input type="hidden" id="id">
        <input type="text" id="nombre" placeholder="Nombre" required>
        <input type="text" id="apellidos" placeholder="Apellidos" required>
        <input type="email" id="email" placeholder="Correo electrónico" required>
        <input type="text" id="lenguaje" placeholder="lenguaje" required>
        <button type="submit">Guardar</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>ID</th><th>Nombre</th><th>Apellidos</th><th>Email</th><th>Lenguaje</th><th>Acciones</th>
            </tr>
        </thead>
        <tbody id="tablaEstudiantes"></tbody>
    </table>

    <script>
        const API_URL = '/api/estudiantes';

        const form = document.getElementById('estudianteForm');
        const tabla = document.getElementById('tablaEstudiantes');

        async function cargarEstudiantes() {
            const res = await fetch(API_URL);
            const datos = await res.json();
            tabla.innerHTML = '';
            datos.forEach(est => {
                tabla.innerHTML += `
                    <tr>
                        <td>${est.id}</td>
                        <td>${est.nombre}</td>
                        <td>${est.apellidos}</td>
                        <td>${est.email}</td>
                        <td>${est.lenguaje}</td>
                        <td>
                            <button onclick="editar(${est.id}, '${est.nombre}', '${est.apellidos}', '${est.email}', '${est.lenguaje}')">Editar</button>
                            <button onclick="eliminar(${est.id})">Eliminar</button>
                        </td>
                    </tr>`;
            });
        }

        function editar(id, nombre, apellidos, email, lenguaje) {
            document.getElementById('id').value = id;
            document.getElementById('nombre').value = nombre;
            document.getElementById('apellidos').value = apellidos;
            document.getElementById('email').value = email;
            document.getElementById('lenguaje').value = lenguaje;
        }

        async function eliminar(id) {
            if (!confirm('¿Estás seguro de eliminar este estudiante?')) return;
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            cargarEstudiantes();
        }

        form.addEventListener('submit', async e => {
            e.preventDefault();
            const id = document.getElementById('id').value;
            const estudiante = {
                nombre: document.getElementById('nombre').value,
                apellidos: document.getElementById('apellidos').value,
                email: document.getElementById('email').value,
                lenguaje: document.getElementById('lenguaje').value
            };

            const metodo = id ? 'PUT' : 'POST';
            const url = id ? `${API_URL}/${id}` : API_URL;

            await fetch(url, {
                method: metodo,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(estudiante)
            });

            form.reset();
            cargarEstudiantes();
        });

        cargarEstudiantes();
    </script>

</body>
</html>
