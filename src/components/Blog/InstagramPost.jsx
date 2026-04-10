import { useEffect } from 'react'

function InstagramPost({ url }) {
  useEffect(() => {
    // Procesar embeds cuando el componente se monta
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    // Procesar inmediatamente si el script ya está cargado
    processEmbeds()

    // También procesar después de un pequeño delay para asegurar que se cargue
    const timer = setTimeout(processEmbeds, 1000)
    
    return () => clearTimeout(timer)
  }, [url])

  return (
    <blockquote 
      className="instagram-media" 
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: '0',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        margin: '0',
        maxWidth: '100%',
        minWidth: '100%',
        padding: '0',
        width: '100%',
        height: 'auto',
        minHeight: '650px'
      }}
    >
    </blockquote>
  )
}

export default InstagramPost