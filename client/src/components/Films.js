import { Link } from 'react-router-dom'

const Films = () => {
  return (
    <div className="page">
      <div className="films-header">
        <h1>Pair Our Music</h1>
        <p style={{ color: 'var(--text-muted)' }}>Match a song from our library to a classic movie scene</p>
      </div>
      <div className="film-grid">
        <Link to="/action" className="film-card">
          <img
            src="https://www.illustratedfiction.com/files/media/53796/matrixlobby.jpg"
            alt="The Matrix"
          />
          <div className="film-card-overlay">
            <div className="film-card-genre">Action</div>
            <div className="film-card-title">The Matrix</div>
          </div>
        </Link>
        <Link to="/dance" className="film-card">
          <img
            src="https://i.ytimg.com/vi/0aIR2oe6h-Y/maxresdefault.jpg"
            alt="Spider-Man"
          />
          <div className="film-card-overlay">
            <div className="film-card-genre">Dance</div>
            <div className="film-card-title">Spider-Man</div>
          </div>
        </Link>
        <Link to="/romance" className="film-card">
          <img
            src="https://www.gannett-cdn.com/authoring/2016/06/10/NBCC/ghows-PA-22917d02-381c-43f1-8441-503d7f6a58c1-b7312b74.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
            alt="Eternal Sunshine of the Spotless Mind"
          />
          <div className="film-card-overlay">
            <div className="film-card-genre">Romance</div>
            <div className="film-card-title">Eternal Sunshine of the Spotless Mind</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Films
