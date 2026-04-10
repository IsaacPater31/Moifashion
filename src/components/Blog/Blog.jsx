import InstagramPost from './InstagramPost'
import './Blog.css'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Historia de MOI Fashion",
      excerpt: "Descubre la historia detrás de nuestra marca y cómo hemos evolucionado para convertirnos en referente de elegancia.",
      image: "https://picsum.photos/seed/blog1/600/400",
      date: "15 Mar 2024",
      category: "Historia",
      likes: 423,
      comments: 52,
      type: "blog"
    },
    {
      id: 2,
      title: "Cuidado de Prendas Premium",
      excerpt: "Consejos expertos para mantener tus prendas premium en perfecto estado por más tiempo.",
      image: "https://picsum.photos/seed/blog2/600/400",
      date: "12 Mar 2024",
      category: "Cuidado",
      likes: 267,
      comments: 38,
      type: "blog"
    },
    {
      id: 3,
      title: "Guía de Estilo: Combinando Colores",
      excerpt: "Aprende los secretos para crear combinaciones de colores perfectas que reflejen tu personalidad y elegancia natural.",
      image: "https://picsum.photos/seed/blog3/600/400",
      date: "10 Mar 2024",
      category: "Estilo",
      likes: 156,
      comments: 18,
      type: "blog"
    }
  ]

  // Posts de Instagram reales (reemplaza con URLs reales de tu cuenta)
  const instagramPosts = [
    {
      id: 4,
      url: "https://www.instagram.com/reel/DHt9VAKRorR/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==", // Reemplaza con URL real
      caption: "Nueva colección primavera 2024 🌸 #MOIFashion #Primavera2024",
      type: "instagram",
      category: "Colección",
      contentType: "Reel"
    },
    {
      id: 5,
      url: "https://www.instagram.com/reel/DHd8zv1MMrx/", // Reemplaza con URL real
      caption: "Tendencias de moda para esta temporada ✨ #Tendencias #Moda",
      type: "instagram",
      category: "Tendencias",
      contentType: "Reel"
    },
    {
      id: 6,
      url: "https://www.instagram.com/p/DE0EKSdRDGa/?img_index=1", // Reemplaza con URL real
      caption: "Behind the scenes de nuestra sesión de fotos 📸 #BehindTheScenes",
      type: "instagram",
      category: "Behind the Scenes",
      contentType: "Post"
    }
  ]

  // Combinar posts del blog y de Instagram
  const allPosts = [...blogPosts, ...instagramPosts].sort((a, b) => {
    if (a.type === 'instagram' && b.type === 'instagram') return 0
    if (a.type === 'instagram') return -1
    if (b.type === 'instagram') return 1
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <section className="blog">
      <div className="blog-header">
        <h1 className="blog-title">Blog MOI Fashion</h1>
        <p className="blog-subtitle">Descubre las últimas tendencias, consejos de estilo y novedades de nuestra marca</p>
      </div>
      
      <div className="blog-grid">
        {allPosts.map((post) => (
          <article key={post.id} className="blog-card">
                        {post.type === 'instagram' ? (
                          <div className="instagram-elegant-card">
                            <div className="instagram-header">
                              <span className="instagram-badge">📸 Instagram</span>
                              <div className="instagram-meta">
                                <span className="instagram-category">{post.category}</span>
                                <span className="instagram-content-type">{post.contentType}</span>
                              </div>
                            </div>
                            <div className="instagram-embed-container">
                              <InstagramPost url={post.url} />
                            </div>
                          </div>
                        ) : (
              <>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-card-overlay">
                    <span className="blog-category">{post.category}</span>
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-date">{post.date}</span>
                    <div className="blog-stats">
                      <span className="blog-likes">❤️ {post.likes}</span>
                      <span className="blog-comments">💬 {post.comments}</span>
                    </div>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <button className="blog-read-more">Leer más</button>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog

