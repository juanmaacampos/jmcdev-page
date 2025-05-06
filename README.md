# JMCdev Webpage

Este proyecto es una landing page moderna desarrollada en React. A continuación se describen todos los componentes principales, sus props y ejemplos de uso.

---

## Componentes

### 1. `Button`

Botón reutilizable con variantes de color, tamaño y efectos.

**Props:**
- `label` (string): Texto del botón.
- `onClick` (func): Función al hacer click.
- `to` (string): Ruta interna (`/ruta`) o externa (`https://...`).
- `color` (string): Color principal (hex o CSS).
- `effect` (string): `'normal' | 'neon' | 'primary'`.
- `size` (string): `'small' | 'medium' | 'big'`.
- `shape` (string): `'normal' | 'square'`.
- `className` (string): Clases CSS adicionales.
- `style` (object): Estilos en línea.

**Uso:**
```jsx
<Button label="Ver más" to="/proyectos" effect="neon" size="big" />
<Button label="GitHub" to="https://github.com/juanmaacampos" color="#B687F7" />
```

---

### 2. `Card`

Tarjeta informativa con imagen, título, subtítulo, contenido y acciones.

**Props:**
- `title` (string)
- `subtitle` (string)
- `content` (ReactNode)
- `image` ({ src, alt })
- `actions` (array de ReactNode)
- `variant` (string): `'default' | 'outlined' | 'elevated'`
- `hoverable` (bool)
- `className` (string)
- `onClick` (func)

**Uso:**
```jsx
<Card
  title="Proyecto"
  subtitle="Landing Page"
  content="Descripción breve del proyecto."
  image={{ src: "/img.png", alt: "Imagen" }}
  actions={[<Button label="Ver" to="/proyecto" />]}
/>
```

---

### 3. `CoolTitle`

Título grande con gradiente.

**Props:**
- `children` (string | ReactNode)
- `className` (string)

**Uso:**
```jsx
<CoolTitle>Texto llamativo</CoolTitle>
```

---

### 4. `MachineTypeTitle`

Título animado tipo máquina de escribir.

**Props:**
- `words` (array de string): Palabras a animar.
- `typingSpeed` (number): ms por letra (default 90).
- `deletingSpeed` (number): ms por letra (default 40).
- `pause` (number): ms de pausa entre palabras (default 1200).
- `className` (string)
- `color` (string): Gradiente o color CSS.

**Uso:**
```jsx
<MachineTypeTitle
  words={['conectan', 'sorprenden']}
  color="#B687F7"
/>
```

---

### 5. `Svg`

Animación SVG Lottie adaptable.

**Props:**
- `route` (string): Ruta al archivo JSON de la animación.

**Uso:**
```jsx
<Svg animationDataPath="/src/assets/animated/responsive_ani.json" />
```

---

### 6. `IconLink`

Enlace con ícono (usando react-icons).

**Props:**
- `icon` (React component): Ej. `FaGithub`
- `to` (string): URL o ruta interna.
- `label` (string): Accesibilidad.
- `size` (string): `'small' | 'medium' | 'large'`
- `effect` (string): `'fade' | 'scale'`
- `color` (string): Color del ícono.
- `className` (string)
- `external` (bool): Si es enlace externo.

**Uso:**
```jsx
<IconLink icon={FaGithub} to="https://github.com" label="GitHub" effect="scale" color="#181717" external />
```

---

### 7. `Logo`

Logo de la marca.

**Props:**
- `onClick` (func): Acción al clickear.

**Uso:**
```jsx
<Logo onClick={() => window.scrollTo(0,0)} />
```

---

### 8. `LoaderDiagonal`

Animación de carga diagonal.

**Props:**
- `isVisible` (bool): Si se muestra el loader.

**Uso:**
```jsx
<LoaderDiagonal isVisible={loading} />
```

---

### 9. `Section`

Contenedor de sección con espaciado y ancho configurable.

**Props:**
- `children` (ReactNode)
- `background` (string): Color o imagen de fondo.
- `spacing` (string): `'small' | 'medium' | 'large'`
- `width` (string): `'narrow' | 'default' | 'wide' | 'full'`
- `className` (string)
- `containerClassName` (string)
- `id` (string)

**Uso:**
```jsx
<Section spacing="large" width="wide" background="#222">
  <h2>Sección</h2>
</Section>
```

---

## Estructura de carpetas

- `src/components/`: Componentes reutilizables.
- `src/principalComponents/`: Componentes principales de la página (Header, Navbar, Footer, etc).
- `src/assets/images/`: Imágenes usadas.

---

## Notas

- Todos los estilos usan CSS Modules.
- Los íconos provienen de [react-icons](https://react-icons.github.io/react-icons/).
- Navegación con `react-router-dom`.

---
