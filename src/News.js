import { Link } from 'react-router-dom'

function News() {
  return (
    <>
      <h1>Noticias</h1>
      <h2><Link to="/noticias/noticia-1">Noticia 1</Link></h2>
      <h2><Link to="/noticias/noticia-2">Noticia 2</Link></h2>
    </>
  )
}

export default News