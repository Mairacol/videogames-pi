import { defineConfig } from 'vite'; // Importa la función defineConfig desde Vite
import react from '@vitejs/plugin-react'; // Importa el plugin react desde @vitejs/plugin-react

// Exporta la configuración de tu proyecto
export default defineConfig({
  plugins: [react()], // Configura los plugins que deseas utilizar. En este caso, solo estás utilizando el plugin react() que importaste anteriormente.
});
