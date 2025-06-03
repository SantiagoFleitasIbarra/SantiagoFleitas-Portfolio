
# Cosmic Portfolio - Santiago Fleitas

Este es un portafolio profesional dinámico y moderno construido con Next.js, React, ShadCN UI, Tailwind CSS y Genkit. Diseñado con una temática "cósmica", su objetivo es mostrar mis habilidades, experiencia y proyectos de una manera visualmente atractiva e interactiva.

## ¿Qué encontrarás aquí?

Este portafolio está estructurado en varias secciones clave, cada una diseñada para ofrecer una visión completa de mi perfil profesional:

*   **🌌 Sección de Inicio (Hero):** Una introducción impactante con mi nombre, títulos profesionales dinámicos y una frase que encapsula mi enfoque hacia el desarrollo.
*   **🧑‍💻 Sobre Mí:** Un resumen de mi trayectoria, mis pasiones y mis habilidades blandas clave, como la comunicación efectiva y la resolución de problemas.
*   **🎓 Educación:** Detalle de mi formación académica, incluyendo mi paso por Holberton School, mis estudios actuales en Ingeniería en Computación (UdelaR) y mi formación previa en Matemáticas (IPA). ¡Incluye resúmenes generados por IA para cada credencial!
*   **🛠️ Habilidades Técnicas:** Una exploración visual de mis competencias técnicas, presentadas con una temática "planetaria". Cubre Frontend, Backend, Bases de Datos, Herramientas y Desarrollo Móvil.
*   **🚀 Proyectos:** Una galería de mis trabajos más destacados, presentados en tarjetas interactivas con descripciones, tecnologías utilizadas y enlaces a repositorios o demos en vivo.
*   **📞 Contacto:** Información para ponerme en contacto, incluyendo email, teléfono, ubicación y enlaces a mis perfiles en redes sociales. Finaliza con una cita inspiradora.

## ✨ Características Destacadas

*   **Diseño Responsivo:** Totalmente adaptable a cualquier dispositivo (escritorio, tablet, móvil).
*   **Multi-idioma:** Soporte para Español e Inglés, con fácil selección.
*   **Temática Cósmica Atractiva:** Animaciones sutiles (como fondo de partículas y elementos interactivos) para una experiencia de usuario única.
*   **Componentes Modernos:** Uso de ShadCN UI para componentes de interfaz de usuario elegantes y personalizables.
*   **IA Integrada:** La sección de Educación utiliza Genkit y Google Gemini para generar resúmenes concisos de mis credenciales.
*   **Navegación Fluida:** Barra de navegación fija y pie de página con enlace para volver al inicio.

## 🛠️ Tech Stack

*   **Framework:** Next.js (con App Router)
*   **Lenguaje:** TypeScript
*   **Librería UI:** React
*   **Componentes UI:** ShadCN UI
*   **Estilos:** Tailwind CSS
*   **Inteligencia Artificial:** Genkit (con Google Gemini)
*   **Iconos:** Lucide React

## 🚀 Cómo Empezar (Desarrollo Local)

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```
3.  **Variables de Entorno (Opcional):**
    Si planeas usar Genkit para interactuar con modelos de IA, necesitarás configurar tus claves API de Google. Crea un archivo `.env.local` en la raíz del proyecto y añade tu `GOOGLE_API_KEY`:
    ```env
    GOOGLE_API_KEY=tu_api_key_aqui
    ```
4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```
    Abre [http://localhost:9002](http://localhost:9002) (o el puerto que tengas configurado) en tu navegador para ver la aplicación.

5.  **Para desarrollar con Genkit (opcional):**
    Si estás trabajando en las funcionalidades de IA, necesitarás ejecutar el servidor de desarrollo de Genkit en paralelo:
    ```bash
    npm run genkit:dev
    # o
    npm run genkit:watch # para recargar automáticamente con cambios
    ```

## ⬆️ Cómo Subirlo a tu GitHub

Aquí tienes los pasos básicos para subir este proyecto a un nuevo repositorio en GitHub:

1.  **Crea un nuevo repositorio en GitHub:**
    *   Ve a [GitHub](https://github.com) y haz clic en "New repository".
    *   Dale un nombre a tu repositorio (por ejemplo, `mi-portafolio-cosmico`).
    *   Puedes dejarlo público o privado.
    *   **Importante:** No inicialices el nuevo repositorio con un `README`, `.gitignore` o licencia si ya tienes estos archivos en tu proyecto local.

2.  **Inicializa Git en tu carpeta local (si aún no lo has hecho):**
    Abre una terminal en la carpeta raíz de tu proyecto y ejecuta:
    ```bash
    git init -b main
    ```

3.  **Añade el repositorio remoto de GitHub:**
    Reemplaza `<TU_USUARIO_DE_GITHUB>` y `<NOMBRE_DE_TU_REPOSITORIO>` con tus datos:
    ```bash
    git remote add origin https://github.com/<TU_USUARIO_DE_GITHUB>/<NOMBRE_DE_TU_REPOSITORIO>.git
    ```

4.  **Añade todos los archivos al área de preparación (staging):**
    ```bash
    git add .
    ```

5.  **Haz tu primer commit:**
    ```bash
    git commit -m "Initial commit del portafolio cósmico"
    ```

6.  **Sube (push) tus archivos a GitHub:**
    ```bash
    git push -u origin main
    ```

¡Y listo! Tu portafolio estará en tu repositorio de GitHub.

---

¡Espero que disfrutes explorando y personalizando este portafolio! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactarme.
