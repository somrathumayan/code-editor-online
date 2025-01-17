
import { useEffect, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(()=>{

    const timeout = setTimeout(()=>{
       setSrcDoc (
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `
       ) 
    }, 250)

    return () => clearTimeout(timeout)
    
  }, [html, css, js])

  

  return (
    <>
      <Editor 
        language = 'xml' 
        displayName='HTML'
        value={html}
        onChange={setHtml}
      />
      <Editor 
        language = 'css' 
        displayName='CSS'
        value={css}
        onChange={setCss}
      />
      <Editor 
        language = 'javascript' 
        displayName='JS'
        value={js}
        onChange={setJs}
      />
      
      <div className="pane top-pane"></div>
      <div className="pane">
        <iframe 
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder=''
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
