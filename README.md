# 🚀 Portfolio Espacial - Versión HTML/CSS/JavaScript

Esta es la versión convertida del portfolio original de TypeScript + Vite a **HTML, CSS y JavaScript puro**, manteniendo exactamente la misma funcionalidad y apariencia.

## ✨ Características Mantenidas

### 🎨 **Diseño Futurista**
- ✅ Temática espacial con efectos de estrellas animadas
- ✅ Gradientes dinámicos y efectos de blur
- ✅ Animaciones suaves y transiciones fluidas
- ✅ Hexágonos interactivos para habilidades técnicas
- ✅ Robot espacial con datos curiosos de tecnologías

### 📱 **Completamente Responsive**
- ✅ Diseño adaptativo para móvil, tablet y desktop
- ✅ Grid flexible que se reorganiza según el dispositivo
- ✅ Timeline educativa que se convierte en tarjetas en móvil
- ✅ Navegación optimizada para pantallas táctiles

### 🌐 **Sistema Bilingüe**
- ✅ Cambio dinámico entre Español e Inglés
- ✅ Contenido traducido en tiempo real
- ✅ Datos curiosos del robot en ambos idiomas
- ✅ Animaciones de código que se adaptan al idioma

### 🛠️ **Tecnologías Utilizadas**
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Sin dependencias**: No requiere Node.js, npm, ni build tools
- **Animaciones**: CSS Keyframes + JavaScript nativo
- **Responsive**: Mobile-first approach con CSS Grid y Flexbox

## 📁 Estructura de Archivos

```
portfolio-html/
├── index.html          # Página principal
├── styles.css          # Todos los estilos
├── script.js           # Toda la funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🚀 Instalación y Uso

### **Opción 1: Servidor Local Simple**
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si lo tienes instalado)
npx serve .

# Con PHP
php -S localhost:8000
```

### **Opción 2: Abrir Directamente**
Simplemente abre `index.html` en tu navegador web favorito.

### **Opción 3: Live Server (VS Code)**
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 📋 Configuración de Contenido

### 🖼️ **Imágenes Requeridas**
Asegúrate de que las imágenes estén en estas rutas relativas:

```
../assets/images/
├── profile-photo-1.jpg        # Foto personal 1
├── profile-photo-2.jpg        # Foto personal 2
└── projects/
    ├── ibaeduca.jpg          # Proyecto IbaEduca
    ├── cazapalabras.jpg      # Proyecto CazaPalabras
    ├── ingles-divertido.jpg  # Proyecto Inglés Divertido
    ├── organiza-tu-dia.jpg   # Proyecto Organiza tu día
    └── warded.jpg            # Proyecto Warded
```

### 📄 **Documentos PDF**
```
../assets/documents/
├── CV-Santiago-Fleitas.pdf              # Tu CV
└── Certificado-Holberton-School.pdf     # Certificado
```

### 🔗 **Enlaces de Proyectos**
En el archivo `index.html`, busca estos comentarios y reemplaza `#` con tus enlaces:

```html
<!-- Busca las líneas con href="#" y reemplázalas -->
<a href="#" target="_blank">  <!-- Cambiar por tu enlace -->
```

## 🎯 Funcionalidades Implementadas

### ✅ **Navegación**
- Scroll suave entre secciones
- Menú responsive para móvil
- Indicadores visuales de hover

### ✅ **Animaciones**
- Código dinámico con efecto de escritura
- Partículas flotantes de fondo
- Efectos de parallax en scroll
- Transiciones suaves en hover

### ✅ **Interactividad**
- Modal de tecnologías con datos curiosos
- Cambio de idioma en tiempo real
- Contador de tiempo de trabajo dinámico
- Efectos 3D en elementos interactivos

### ✅ **Responsive Design**
- Breakpoints: móvil (<768px), tablet (768-1024px), desktop (>1024px)
- Grid hexagonal se convierte en grid simple en móvil
- Timeline se convierte en cards apiladas en móvil
- Navegación se convierte en menú hamburguesa

## 🌟 Diferencias con la Versión Original

### **Lo que se mantiene igual:**
- ✅ Diseño visual idéntico
- ✅ Todas las animaciones y efectos
- ✅ Funcionalidad completa del modal de tecnologías
- ✅ Sistema bilingüe completo
- ✅ Responsive design exacto
- ✅ Efectos de hover y transiciones

### **Lo que cambió:**
- ❌ No requiere build process (Vite)
- ❌ No requiere TypeScript compilation
- ❌ No requiere npm install
- ❌ No requiere servidor de desarrollo
- ✅ Funciona directamente en cualquier navegador
- ✅ Más fácil de deployar en cualquier hosting

## 🚀 Deployment

### **GitHub Pages**
1. Sube todos los archivos a tu repositorio
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará en `https://tu-usuario.github.io/nombre-repositorio/`

### **Netlify**
1. Arrastra la carpeta `portfolio-html` a Netlify
2. ¡Listo! Se despliega automáticamente

### **Vercel**
1. Conecta tu repositorio
2. Configura la carpeta `portfolio-html` como root
3. Deploy automático

### **Cualquier Hosting Web**
1. Sube los archivos por FTP
2. Asegúrate de que `index.html` esté en la raíz
3. ¡Funciona inmediatamente!

## 🔧 Personalización

### **Cambiar Colores**
Edita las variables CSS en `styles.css`:
```css
/* Busca estas clases para cambiar colores */
.text-gradient { background: linear-gradient(135deg, #22d3ee, #3b82f6); }
.btn-primary { background: linear-gradient(135deg, #22d3ee, #3b82f6); }
```

### **Modificar Contenido**
1. **Textos**: Edita los atributos `data-es` y `data-en` en `index.html`
2. **Imágenes**: Reemplaza las imágenes en las carpetas correspondientes
3. **Enlaces**: Cambia los `href="#"` por tus enlaces reales

### **Agregar Nuevas Tecnologías**
En `script.js`, busca `techDataES` y `techDataEN` para agregar nuevas tecnologías al modal.

## 📱 Compatibilidad

### **Navegadores Soportados:**
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

### **Características Modernas Utilizadas:**
- CSS Grid y Flexbox
- CSS Custom Properties (variables)
- Intersection Observer API
- ES6+ JavaScript (const, let, arrow functions, etc.)

## 🐛 Solución de Problemas

### **Las imágenes no se cargan:**
- Verifica que las rutas en `index.html` coincidan con la ubicación real de las imágenes
- Si usas un servidor local, asegúrate de que las rutas relativas sean correctas

### **El modal de tecnologías no funciona:**
- Abre la consola del navegador (F12) para ver errores de JavaScript
- Verifica que `script.js` se esté cargando correctamente

### **El cambio de idioma no funciona:**
- Asegúrate de que todos los elementos tengan los atributos `data-es` y `data-en`
- Verifica que no haya errores de JavaScript en la consola

## 📞 Soporte

Si encuentras algún problema o necesitas ayuda:

1. Revisa la consola del navegador (F12) para errores
2. Verifica que todas las rutas de archivos sean correctas
3. Asegúrate de que estés usando un servidor local si es necesario

## 🎉 ¡Listo para Usar!

Esta versión HTML/CSS/JavaScript es completamente funcional y mantiene todas las características del portfolio original. ¡Solo necesitas personalizar el contenido con tu información y estará listo para impresionar!

---

**Nota**: Esta conversión mantiene el 100% de la funcionalidad original mientras elimina la complejidad de las herramientas de build modernas, haciéndolo más accesible y fácil de deployar.