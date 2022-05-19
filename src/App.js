
import './App.css';
import Testimonio from './componentes/Testimonio'
function App() {
  return (
   
      <div className="App">
         <div className='contenedor-principal'>
           <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
           <Testimonio
           nombre='Emma Bostian'
           pais='Suecia'
           cargo='Ingeniero de software'
           empresa='Spotify'
           testimonio='Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'
           imagen='emma'
           />
        </div>
      </div>
   
  );
}

export default App;
