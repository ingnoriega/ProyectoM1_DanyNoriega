# Colorfly Palette Generator

## 📁 Estructura del proyecto

```text
ProyectoM1_DanyNoriega/
│
├── css/
│   └── style.css
│
├── img/
│   └── (Imágenes del proyecto)
│
├── js/
│   └── script.js
│
├── index.html
│
└── README.md
```

## Descripción

**Colorfly Palette Generator** es un MVP de aplicación web estática e interactiva para Colorfly Studio, una agencia de branding. Permite generar paletas de colores aleatorias de manera rápida y visualizar sus códigos HEX.

## Funcionalidades

- Selección de **6, 8 o 9 colores** por paleta.
- Generación aleatoria en formatos **HEX y HSL**.
- Visualización de cada color junto con su código **HEX**.
- Botón **Generar paleta** para actualizar los colores.
- Mensaje visible de confirmación al generar una paleta.
- Interfaz diseñada para escritorio.
- Elementos HTML semánticos, etiquetas asociadas a los controles y foco visible para navegación con teclado.

## Tecnologías

- **HTML5:** estructura semántica.
- **CSS3:** diseño y distribución de las tarjetas.
- **JavaScript:** generación de colores, eventos y actualización dinámica del DOM.
- **Git y GitHub:** control de versiones y repositorio.
- **GitHub Pages:** despliegue de la demo.

## Estructura del repositorio

`
ProyectoM1_NombreEstudiante/
├── Desarrollo/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── Documentación/
│ ├── README.md
│ ├── Uso_IA.md
│ └── capturas/
└── README.md

```

## Cómo ejecutar el proyecto

1. Descarga o clona el repositorio.
2. Abre la carpeta `ProyectoM1_NombreEstudiante` en Visual Studio Code.
3. Abre `Desarrollo/index.html` en un navegador.
4. No necesitas instalar dependencias.

## Cómo usar la aplicación

1. Selecciona la cantidad de colores: **6, 8 o 9**.
2. Elige el formato de generación: **HEX o HSL**.
3. Haz clic en **Generar paleta**.
4. Observa las tarjetas y sus códigos HEX.
5. Repite el proceso para obtener otra combinación.

## Decisiones técnicas

Se eligió **JavaScript puro**, sin frameworks, para mantener el MVP sencillo y practicar funciones, eventos, ciclos y manipulación del DOM. Las tarjetas se crean dinámicamente según el tamaño seleccionado. Los colores HSL se convierten a HEX para que todas las tarjetas muestren el código requerido.

La interfaz utiliza CSS Grid para distribuir las tarjetas. Los controles incluyen etiquetas HTML asociadas y estilos de foco visible. El mensaje de confirmación utiliza una región de estado accesible.

## Pruebas recomendadas

- [ ] El botón genera una paleta nueva.
- [ ] Se muestran exactamente 6, 8 o 9 tarjetas según la selección.
- [ ] Los formatos HEX y HSL funcionan.
- [ ] Todas las tarjetas muestran códigos HEX válidos.
- [ ] Aparece el mensaje de confirmación.
- [ ] Se puede navegar con el teclado y el foco es visible.
- [ ] El contenido se ve correctamente en desktop.
- [ ] No aparecen errores en la consola del navegador.

## Despliegue en GitHub Pages

1.publicacion del sitio web:

2.funcionamiento del sitio web en formato gif: https://drive.google.com/drive/folders/1HTKlXP7brMDTX6WX85VTMPfrI-8rQvIB?usp=sharing
```
