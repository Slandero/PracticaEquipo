# Sneaker Store Project

Proyecto de práctica para el desarrollo de una tienda de tenis estática en equipo.

## Descripción del Proyecto

SNEAKER DRIP es una tienda en línea estática que presenta una colección exclusiva de 9 modelos de tenis de edición limitada. El sitio web incluye una página principal con catálogo de productos y una página de contacto para atención al cliente.

## Estructura del Proyecto

### Archivos HTML

**index.html**
- Página principal del sitio
- Barra de navegación con logo y enlaces
- Sección de catálogo con 9 tarjetas de productos
- Grid responsivo que muestra tenis de marcas como Jordan, Nike, Adidas, New Balance, Vans
- Cada producto incluye: imagen, marca, nombre, precio y botón de agregar al carrito
- Footer con información de copyright

**contacto.html**
- Página de contacto con formulario
- Formulario incluye campos para: nombre completo, correo electrónico y mensaje
- Botón de envío con estilos premium
- Navegación de regreso a la tienda principal

### Archivos CSS

**design.css**
- Estilos principales del layout y componentes
- Variables CSS para colores (neon verde, rosa, fondos oscuros)
- Grid de productos con sistema de 3 columnas
- Estilos de tarjetas de productos con efectos hover
- Efectos de transformación en imágenes de tenis
- Diseño responsivo con breakpoints para tablets (2 columnas) y móviles (1 columna)
- Estilos para etiquetas de precio y botones de agregar al carrito

**styles.css**
- Estilos de navegación superior (navbar sticky)
- Estilos del formulario de contacto
- Estilos de botones premium con efectos de sombra neon
- Animaciones y transiciones en hover y active states
- Layout centrado para la página de contacto

### Archivo JavaScript

**scripts.js**
- Manejo de eventos DOM cuando la página carga
- Selección de todos los botones con clase `.btn-add`
- Event listeners para cada botón de compra
- Funcionalidad de alerta que muestra el nombre del producto agregado al carrito
- Logs en consola para debugging

### Recursos Multimedia

**assets/img/**
- Carpeta que contiene imágenes de los 9 productos:
  - Jordan1.png
  - Jordan4.png
  - DunkLow.png
  - Yeezy.png
  - 550.png
  - AirMax.png
  - Forum.png
  - OldSkool.png
  - Travis.png

## Características Técnicas

- Diseño completamente responsivo usando CSS Grid y Media Queries
- Esquema de colores oscuro (dark mode) con acentos neón
- Tipografías de Google Fonts: Archivo Black e Inter
- Efectos visuales modernos: drop shadows, transformaciones 3D, transiciones suaves
- Navegación sticky que permanece fija al hacer scroll
- Sistema de alertas para simular funcionalidad de carrito de compras

## Integrantes y Roles

- **Milo**: Estructura HTML principal
- **Suarez**: Diseño CSS y estilos globales
- **Espinoza**: Interactividad con JavaScript
- **Frias**: Gestión de activos multimedia (imágenes)
- **Saldivar**: Documentación técnica
- **Chico**: Página de contacto y navegación secundaria

## Instrucciones de Ejecución

1. Clona este repositorio en tu máquina local
2. Navega a la carpeta del proyecto
3. Abre el archivo `index.html` en tu navegador web preferido
4. No se requiere instalación de dependencias ni servidor local

## Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6+)
- Google Fonts API