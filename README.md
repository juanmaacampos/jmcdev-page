# JMCdev Webpage

Sitio web profesional para servicios de desarrollo web, realizado en React con Vite y CSS Modules.

---

## Índice

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Flujo y Orden de las Secciones](#flujo-y-orden-de-las-secciones)
- [Componentes Globales](#componentes-globales)
  - [CoolTitle](#cooltitle)
  - [MachineTypeTitle](#machinetypetitle)
  - [Button](#button)
  - [ServicioCard](#serviciocard)
  - [CardModal](#cardmodal)
  - [Svg](#svg)
  - [IconLink](#iconlink)
  - [LoaderDiagonal](#loaderdiagonal)
  - [Logo](#logo)
  - [ParallaxMouseImage](#parallaxmouseimage)
- [Secciones Principales](#secciones-principales)
  - [Navbar](#navbar)
  - [Header](#header)
  - [Servicios](#servicios)
  - [Proceso](#proceso)
  - [Planes](#planes)
  - [Portafolio](#portafolio)
  - [Testimonios](#testimonios)
  - [Contacto](#contacto)
  - [Footer](#footer)
- [Estilos y Responsividad](#estilos-y-responsividad)
- [Animaciones](#animaciones)
- [Recursos y Assets](#recursos-y-assets)

---

## Estructura del Proyecto

```
src/
  components/
    Button/
    CardModal/
    CoolTitle/
    IconLink/
    Loader/
    Logo/
    MachineTypeTitle/
    ServicioCard/
    Svg/
  websections/
    Contacto/
    Header/
    Navbar/
    Planes/
    Portafolio/
    Proceso/
    Servicios/
    Testimonios/
    footer/
  assets/
    images/
    videos/
  App.jsx
  App.css
  main.jsx
  index.css
```

---

## Flujo y Orden de las Secciones

El orden de renderizado en `App.jsx` es:

1. **LoaderDiagonal** (pantalla de carga)
2. **Navbar** (barra de navegación fija)
3. **Header** (hero principal, pantalla completa)
4. **Servicios** (parallax con cards y modales)
5. **Proceso** (pasos de trabajo)
6. **Planes** (tarjetas de planes)
7. **Portafolio** (proyectos recientes)
8. **Testimonios** (opiniones de clientes)
9. **Contacto** (formulario y datos)
10. **Footer** (pie de página)

---

## Componentes Globales

### CoolTitle

**Función:**  
Título grande con gradiente y animaciones de fuente al hacer hover o scroll.

**Props:**
- `children`: string | ReactNode. Contenido del título.
- `className`: string. Clases CSS adicionales.
- `animation`: string. Tipo de animación (`'none'`, `'glitch'`, `'neon'`, `'slide'`, `'bounce'`, `'fade'`, `'typewriter'`).
- `hoverFonts`: array de string. Fuentes a alternar en hover/scroll.
- `fontTransition`: string. Duración de la transición de fuente.

**Uso:**
```jsx
<CoolTitle
  animation="glitch"
  hoverFonts={["'Orbitron', sans-serif", "'Rajdhani', sans-serif"]}
>
  ¡Bienvenido!
</CoolTitle>
```

---

### MachineTypeTitle

**Función:**  
Animación de máquina de escribir para palabras clave.

**Props:**
- `words`: array de string. Palabras a animar.
- `typingSpeed`: number. ms por letra (default 90).
- `deletingSpeed`: number. ms por letra (default 40).
- `pause`: number. ms de pausa entre palabras (default 1200).
- `className`: string.
- `color`: string. Gradiente o color CSS.
- `fonts`: array de string. Fuentes a alternar.

**Uso:**
```jsx
<MachineTypeTitle
  words={['conectan', 'sorprenden']}
  color="#B687F7"
/>
```

---

### Button

**Función:**  
Botón reutilizable con variantes de color, tamaño, forma, icono y efectos.

**Props:**
- `label`: string. Texto del botón.
- `onClick`: función.
- `to`: string. Link interno o externo.
- `color`: string. Color principal.
- `effect`: string. `'normal'`, `'neon'`, `'primary'`.
- `size`: string. `'small'`, `'medium'`, `'big'`.
- `shape`: string. `'normal'`, `'square'`.
- `icon`: ReactNode. Icono opcional.
- `scrollTarget`: string. ID de sección para scroll suave.

**Uso:**
```jsx
<Button label="Ver más" effect="neon" size="big" icon={<FaEye />} />
<Button label="Contacto" to="#contacto" effect="primary" />
```

---

### ServicioCard

**Función:**  
Tarjeta de servicio con icono, título, descripción y modal detallado.

**Props:**
- `icon`: ReactNode. Icono o animación.
- `svg`: ReactNode. Alternativa a icon.
- `titulo`: string.
- `descripcion`: string.
- `modalData`: objeto con datos del modal (ver CardModal).

**Uso:**
```jsx
<ServicioCard
  icon={<Svg route="src/assets/images/modals_assets/world.json" />}
  titulo="Desarrollo Web"
  descripcion="Sitios web modernos, rápidos y personalizados."
  modalData={{ ... }}
/>
```

---

### CardModal

**Función:**  
Modal informativo con tabs, imagen, título, descripción y animaciones.

**Props:**
- `open`: boolean. Si el modal está abierto.
- `onClose`: función. Cierra el modal.
- `title`: string.
- `subtitle`: string.
- `description`: string.
- `image`: objeto `{src, alt}`.
- `tabs`: array de `{label, icon, content}`.
- `headerAnimation`, `contentAnimation`, `tabsAnimation`: string. Animaciones AOS.
- `animationDelay`: number.

**Uso:**
```jsx
<CardModal
  open={open}
  onClose={() => setOpen(false)}
  title="Desarrollo Web"
  description="Creamos sitios web modernos..."
  image={{ src: "...", alt: "..." }}
  tabs={[
    { label: "¿Qué incluye?", content: <ul>...</ul> },
    { label: "Tecnologías", content: <div>...</div> }
  ]}
/>
```

---

### Svg

**Función:**  
Carga y muestra animaciones Lottie desde un archivo `.json`.

**Props:**
- `route`: string. Ruta al archivo Lottie.

**Uso:**
```jsx
<Svg route="src/assets/images/modals_assets/world.json" />
```

---

### IconLink

**Función:**  
Enlace con icono, efectos de hover y soporte para links internos/externos.

**Props:**
- `icon`: componente de react-icons.
- `to`: string. URL o ruta interna.
- `label`: string. Descripción accesible.
- `size`: string. `'small'`, `'medium'`, `'large'`.
- `effect`: string. `'fade'`, `'scale'`, `'pulse'`.
- `color`: string.
- `external`: boolean.

**Uso:**
```jsx
<IconLink icon={FaGithub} to="https://github.com" label="GitHub" external />
```

---

### LoaderDiagonal

**Función:**  
Pantalla de carga animada con franjas diagonales.

**Props:**
- `isVisible`: boolean.

**Uso:**
```jsx
<LoaderDiagonal isVisible={loading} />
```

---

### Logo

**Función:**  
Logo de la marca, clickeable.

**Props:**
- `onClick`: función.

**Uso:**
```jsx
<Logo onClick={() => window.scrollTo(0,0)} />
```

---

### ParallaxMouseImage

**Función:**  
Componente que aplica un efecto de parallax al movimiento del mouse sobre una imagen.

**Props:**
- `src`: string. Ruta de la imagen.
- `alt`: string. Texto alternativo de la imagen.
- `className`: string. Clases CSS adicionales.
- `draggable`: boolean. Indica si la imagen es arrastrable.

**Uso:**
```jsx
<ParallaxMouseImage
  src="/src/assets/images/header_img.png"
  alt="Desarrollo web"
  className={styles.headerImage}
  draggable={false}
/>
```

---

## Secciones Principales

### Navbar

- Barra de navegación fija superior.
- Botones para scroll a secciones: Servicios, Planes, Proyectos, Contacto.
- Menú hamburguesa en mobile.

### Header

- Hero principal, ocupa toda la pantalla.
- Título animado (`CoolTitle` + `MachineTypeTitle`).
- Imagen ilustrativa.
- Descripción y posibles botones de acción.

### Servicios

- Fondo parallax (video en desktop, imagen en mobile).
- Cards de servicios (`ServicioCard`), cada una abre un `CardModal` con detalles.
- Efecto especial: el cursor revela el video de fondo en un círculo (desktop).

### Proceso

- Explica los pasos de trabajo.
- Grid de pasos con título y descripción.

### Planes

- Tarjetas de planes de servicio.
- Destaca el plan recomendado.
- Botón para contactar.

### Portafolio

- Muestra proyectos recientes.
- Imagen, título, subtítulo, descripción y acciones.

### Testimonios

- Opiniones de clientes.
- Grid de tarjetas con nombre y texto.

### Contacto

- Formulario de contacto.
- Datos de contacto directo (email, WhatsApp).

### Footer

- Pie de página con información legal, links y redes.

---

## Estilos y Responsividad

- **CSS Modules**: Cada componente/sección tiene su propio archivo de estilos.
- **Breakpoints**: Adaptado para desktop, tablet y mobile.
- **Parallax y efectos**: El fondo de Servicios usa video solo en desktop, imagen en mobile.
- **Animaciones**: Uso de AOS para animaciones de entrada, transiciones suaves y efectos visuales.

### Manejo de Imágenes y SVGs

- **Fondo Parallax**: 
  - Desktop: Video con efecto reveal en hover
  - Mobile: Imagen estática como fallback
  - Implementación con `videoRevealMask` y `parallaxImage`

- **SVGs y Lottie**:
  - Tamaño controlado: 48x48px para iconos de servicios
  - Contenedor con dimensiones fijas
  - Prevención de desbordamiento con `overflow: hidden`
  - Centrado con flexbox en `.iconSvgWrapper`

### Media Queries Clave

```css
@media (max-width: 900px) {
  .parallaxVideo { display: none; }
  .parallaxImage { display: block; }
  .videoRevealMask {
    -webkit-mask-image: none !important;
    mask-image: none !important;
  }
}
```

---

## Animaciones

- **AOS**: Animaciones de entrada en cards, modales y secciones.
- **CoolTitle**: Animaciones de fuente y gradiente.
- **MachineTypeTitle**: Efecto máquina de escribir.
- **LoaderDiagonal**: Franjas animadas en pantalla de carga.
- **ServicioCard**: Hover y apertura de modal.
- **Servicios**: Efecto reveal del video con el cursor (desktop).

---

## Recursos y Assets

- **Imágenes**: `/src/assets/images/`
- **Videos**: `/src/assets/videos/`
- **Lottie JSON**: Animaciones para iconos y cards.
- **Fuentes**: Google Fonts (`Geologica`, `DM Sans`, `Orbitron`, etc).

---

## Ejemplo de Uso en App.jsx

```jsx
import LoaderDiagonal from "./components/Loader/Loader";
import Navbar from "./websections/Navbar/Navbar";
import Header from "./websections/Header/Header";
import Servicios from "./websections/Servicios/Servicios";
import Proceso from "./websections/Proceso/Proceso";
import Planes from "./websections/Planes/Planes";
import Portafolio from "./websections/Portafolio/Portafolio";
import Testimonios from "./websections/Testimonios/Testimonios";
import Contacto from "./websections/Contacto/Contacto";
import Footer from "./websections/footer/Footer";

function App() {
  // ...loading logic...
  return (
    <>
      <LoaderDiagonal isVisible={loading} />
      <div className={`contenido ${contentVisible ? 'visible' : ''}`}>
        <Navbar />
        <Header />
        <Servicios />
        <Proceso />
        <Planes />
        <Portafolio />
        <Testimonios />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}
```

---

## Notas Finales

- **Personalización**: Puedes modificar los assets, colores y textos fácilmente.
- **Extensibilidad**: Agrega más servicios, proyectos o testimonios editando los arrays correspondientes.
- **Accesibilidad**: Se recomienda revisar los textos alternativos y roles para mejorar la accesibilidad.

---

¿Dudas o sugerencias?  
Contacta a [hola@jmcdev.com](mailto:hola@jmcdev.com)

