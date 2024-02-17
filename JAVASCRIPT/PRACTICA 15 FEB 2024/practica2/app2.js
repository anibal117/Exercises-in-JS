const nombreAlumnoInput = document.getElementById('nombre-alumno');
const agregarAlumnoBtn = document.getElementById('agregar-alumno');
const listaAlumnos = document.getElementById('lista-alumnos');
const ordenarAlfabeticamenteBtn = document.getElementById('ordenar-alfabeticamente');

let alumnos = [];

agregarAlumnoBtn.addEventListener('click', function() {
  const nombre = nombreAlumnoInput.value.trim();
  if (nombre) {
    alumnos.push(nombre);
    mostrarAlumnos();
    nombreAlumnoInput.value = '';
  }
});

ordenarAlfabeticamenteBtn.addEventListener('click', function() {
  alumnos.sort();
  mostrarAlumnos();
});

function mostrarAlumnos() {
  listaAlumnos.innerHTML = '';
  for (const alumno of alumnos) {
    const li = document.createElement('li');
    li.textContent = alumno;
    listaAlumnos.appendChild(li);
  }
}