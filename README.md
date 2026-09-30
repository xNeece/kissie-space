# Kissie Xatspace — updated

Cambios incluidos:
- Galería de fotos en 3 columnas x 2 filas.
- Calendario externo al cuadro principal, ubicado a la derecha en escritorio.
- Controles de ventana estilo macOS (rojo, amarillo y verde) en Login y perfil.
- Mini reproductor debajo de "see anything inappropriate? block or report".
- Portada individual para cada canción usando imágenes del proyecto como covers reemplazables.
- Efecto de marco iluminado al pasar el cursor sobre perfil, imágenes, videos y portadas.
- Botón inferior izquierdo cambiado de carrito a corazón.
- Panel de frases con 5 globos de chat como máximo; puedes editar o reemplazar manualmente las 5 entradas de `HEART_PHRASES` en `script.js`.
- Pantalla de bienvenida con fondo dinámico de partículas/círculos.
- Transición de bienvenida al perfil y reproducción de música al hacer LOGIN.

Para cambiar las portadas:
- Edita el cuarto valor de cada canción en `script.js`, por ejemplo:
  ["Lavender Dreams","Kissie","song-01.mp3","photo-01.png"]

Para agregar frases:
- Busca `HEART_PHRASES` en `script.js` y agrega:
  ["Autor","Tu frase aquí ♡"]

Nota:
- Los archivos de música del proyecto original son placeholders `.txt`; coloca los MP3 reales en `assets/music/` conservando los nombres `song-01.mp3` ... `song-10.mp3`.


## Rutas de recursos

### Foto de perfil
- Archivo: `assets/img/profile.png`
- Se usa en Login y en el perfil principal.

### Fotos de la galería
- Carpeta: `assets/img/`
- Rutas: `assets/img/photo-01.png` a `assets/img/photo-06.png`
- También hay categorías preparadas: `friend-01.png`…`friend-06.png`, `movie-01.png`…`movie-06.png` y `series-01.png`…`series-06.png`.

### Videos
- Miniatura: `assets/video/video-01.png` a `assets/video/video-06.png`
- Video real: `assets/video/video-01.mp4` a `assets/video/video-06.mp4`
- Los `.txt` incluidos son solo placeholders del proyecto; reemplázalos por los `.mp4` reales.

### Música
- Carpeta: `assets/music/`
- Canciones: `assets/music/song-01.mp3` a `assets/music/song-10.mp3`
- Los `.txt` incluidos son placeholders; reemplázalos por los `.mp3` reales.

### Portadas de canciones
- Las portadas se definen en `script.js`, dentro de `MUSIC_ITEMS`.
- Puedes usar una imagen existente, por ejemplo `assets/img/music.png`, o añadir una portada nueva a `assets/img/` y poner esa ruta en el cuarto campo de cada canción.

### Frases / Little Notes
- Se editan en `script.js`, dentro de `HEART_PHRASES`.
- Hay exactamente 5 entradas; no se generan frases adicionales automáticamente.
