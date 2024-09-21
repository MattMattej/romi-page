const i18next = require('i18next');
const { initReactI18next } = require('react-i18next');

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          bio: 'Bio',
          planes: 'Plans',
          challenges: 'Challenges',
          contact: 'Contact',
          'All': 'All',
          'Film': 'Film',
          'Videogame': 'Videogame',
          'Theatre': 'Theatre',
          'Music': 'Music',
          'Various': 'Various',
          'Albums': 'Albums',
          'ES': 'ES',
          'EN': 'EN',

           // HomeSection
           'home_description': 'Original music soundtracks that transcend boundaries, reaching global audiences and elevating the art of visual storytelling to its fullest potential.',
           
          // PlanesSection
          'Plans': 'Plans',
          'Demo Teatro': 'Theater Demo',
          'Demo Audiovisual': 'Audiovisual Demo',


          // DesafuisSection
          'Challenges': 'Challenges',
          'Rutina Pecho': 'Rutina Pecho',
          'Rutina Abdominales': 'Rutina Abdominales',
          'Rutina Gluteos': 'Rutina Gluteos',

          // BioSection
          'About Paolo': 'About Paolo',
          'bio_text_1': 'I am a composer, musician, and sound designer born in Montevideo, Uruguay in 1989. I hold a Bachelors degree from the Universidad de la República (UDELAR) in Music, profile: Composition, where I studied with professors Osvaldo Budón, Leonardo Secco, and Luis Jure. Additionally, I studied composition with Coriún Aharonián and explored various musical genres such as Jazz, Swing, Classical, Indian Music, Candombe, Jazz Manouche, and Folk with teachers like Ariel Ameijenda, Ángel Varela, Ludmila Cavallaro, Fabián Almada, and Mario Piro, among others.',

            // Footer
        'contact_title': 'Contact',
        'contact_email': 'Email:',
        'contact_phone': 'Phone:',
        },
      },
      es: {
        translation: {
          // Navbar
          bio: 'Biografía',
          demos: 'Demos',
          listen: 'Escuchar',
          projects: 'Proyectos',
          news: 'Noticias',
          contact: 'Contacto',
          'All': 'Todo',
          'Film': 'Película',
          'Videogame': 'Videojuego',
          'Theatre': 'Teatro',
          'Music': 'Música',
          'Various': 'Varios',
          'Albums': 'Álbumes',
          'ES': 'ES',
          'EN': 'EN',

          // HomeSection
          'home_description': 'Bandas sonoras originales que trascienden fronteras, alcanzando audiencias globales y elevando el arte de la narración visual a su máximo potencial.',
        
          // PlanesSection
          'Demos': 'Demos',
          'Demo Teatro': 'Demo Teatro',
          'Demo Audiovisual': 'Demo Audiovisual',
          'Demo Otro': 'Otro Demo',

          // ClasesSection
          'Projects': 'Proyectos',
          'Pelicula1': 'Película 1',
          'Videojuego1': 'Videojuego 1',
          'Teatro1': 'Teatro 1',
          'Musica1': 'Música 1',
          'Album1': 'Álbum 1',
          'Varios1': 'Varios 1',

          // BioSection
          'About Ro': 'Sobre Ro',
          'bio_text_1': 'Gravida platea nullam Ipsum, laoreet praesent aenean. Hymenaeos Ornare orci ad placerat dignissim diam tempus curae; scelerisque rhoncus fringilla hendrerit id. Ipsum suspendisse molestie, vel dis purus nisl nisl dui hendrerit vestibulum non natoque. Sodales rutrum nulla sed.Phasellus dapibus montes Primis vel iaculis Consequat risus torquent parturient nullam netus, ac lorem. Sollicitudin nostra metus inceptos diam senectus eleifend aliquam adipiscing turpis quisque amet justo a. Pretium.Torquent dis. Semper, odio iaculis sagittis faucibus dapibus senectus cubilia morbi tellus sed dui, fusce elementum Imperdiet pede facilisi mus nec mattis praesent tincidunt eget non lorem faucibus. Adipiscing fusce, in eleifend parturient.',
          
         // Footer
         'contact_title': 'Contacto',
         'contact_email': 'Correo electrónico:',
         'contact_phone': 'Teléfono:',
       
        },
      },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva

    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
  });

module.exports = i18next;
