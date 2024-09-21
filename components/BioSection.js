import React from 'react';
import Image from 'next/image';
import styles from '../styles/BioSection.module.css';

const BioSection = () => {
  return (
    <section id='bio' className={`${styles.bioSection} section`}>
      <div className='container'>
        <h2 className={styles.title}>
          <span className='gradient-text'>About Paolo</span>
        </h2>
        <div className={styles.bioContent}>
          <div className={styles.bioText}>
            <p>
            Franco Paolo Grosso González

Soy un compositor, músico y diseñador sonoro nacido en Montevideo, Uruguay en 1989.   Poseo un título de grado de la Universidad de la República (UDELAR) en Música, opción: Composición, donde estudié con los profesores Osvaldo Budón, Leonardo Secco y Luis Jure. Además estudié composición con Coriún Aharonián y profundicé en varios géneros musicales como Jazz, Swing, Clásica, Música de la India, Candombe, Jazz Manouche y Folklore con profesores como Ariel Ameijenda, Angel Varela, Ludmila Cavallaro, Fabián Almada y Mario Piro, entre otros.

 Actualmente soy docente de sonido (postproducción, diseño sonoro) en la Licenciatura en Lenguajes y Medios Audiovisuales de la Universidad de la República (UDELAR) en el Centro Universitario Regional Este (CURE) y profesor de Producción Musical en el Conservatorio Rodó. Además he realizado cursos y clases magistrales de sonido y música para cine y teatro en varias instituciones públicas y privadas, y he ejercido tareas de docencia como asistente de cátedra en la EMAD (Escuela Multidisciplinaria de Arte Dramático) y ECU (Escuela de Cine del Uruguay).

 La composición musical ha llegado a convertirse en mi profesión de manera muy orgánica, primero estudiando y desarrollando mis habilidades en interpretación musical durante años, en diversos instrumentos y géneros (batería, guitarra, sitar, violín, clarinete y saxofón) y más adelante ingresé a la Universidad para estudiar composición formalmente. 
 Me caracterizo por ser un compositor increíblemente versátil y por lograr en mi música un producto sonoro de la más alta calidad. A lo largo de toda mi formación y carrera musical siempre me encontré a mí mismo inmerso en una ferviente búsqueda de nuevos horizontes musicales, lo que me mantiene en una constante exploración de los elementos, técnicas y lenguaje musical que caracterizan a la música de cualquier estilo y conjunto imaginable, abarcando desde la composición para orquesta o conjunto de cámara hasta música de las más variadas culturas y regiones geográficas alrededor del mundo. Mi particular sensibilidad y creatividad artística me han permitido lograr un sello musical único y propio que se imprime sonoramente en cada una de mis composiciones y la pasión que siento por el trabajo en equipo y colaborativo me ha llevado a componer música para una gran cantidad de medios y formatos audiovisuales, desde cortometrajes, largometrajes y documentales hasta obras de teatro y videojuegos realizados por personas con una asombrosa visión creativa.

 Durante años, estudié y trabajé en sonido para medios audiovisuales, generando una gran experiencia como diseñador sonoro, mezclador y postproductor de audio. 
 Como intérprete he colaborado en álbumes de varios artistas y me he presentado en incontables conciertos formando parte de conjuntos como “La Manush” y el “Ensamble de Jazz Gitano” o como músico invitado tocando sitar acompañando tanto a solistas como bandas.

 H obtenido premios, nominaciones, menciones y apoyos por mi trabajo como compositor y diseño sonoro en los Premios Florencio, Movida Joven, FONAM, SUDEI y en varios Festivales de cine.

            </p>
          
          </div>
          <div className={styles.bioImage}>
          <Image 
              src='/paolo1.png' 
              alt='Paolo Grosso' 
              width={300} // Ancho máximo
              height={300} // Alto máximo
              objectFit='cover' // Mantiene la proporción y recorta si es necesario
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;