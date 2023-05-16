import grapesjs from "grapesjs";
import presetWebpage from 'grapesjs-preset-webpage';
import './App.css';

function App() {
  const editor = grapesjs.init({
    plugins: [presetWebpage],
    pluginsOpts: {
      [presetWebpage]: { /* options */ }
    },
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: 'auto',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    // Avoid any default panel
    panels: { defaults: [] },
  });

  return <div id="gjs"></div>;
}

export default App;
