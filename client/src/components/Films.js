import { Link } from 'react-router-dom'

const Films = () => {
  return (
    <div className="FilmPage">
      <h1>Pair our music</h1>
      <h2>with a classic movie scene...</h2>
      <div className="filmDiv">
        <Link to="/action" className="tagLinkyFilm">
          <img
            src="https://www.illustratedfiction.com/files/media/53796/matrixlobby.jpg"
            class="film-img"
          ></img>
          <h4>Action:</h4>
          <h4>
            <i>The Matrix</i>
          </h4>
        </Link>
        <Link to="/dance" className="tagLinkyFilm">
          <img
            src="https://i.ytimg.com/vi/0aIR2oe6h-Y/maxresdefault.jpg"
            class="film-img"
          ></img>
          <h4>Dance:</h4>
          <h4>
            <i>Spider-Man</i>
          </h4>
        </Link>
        <Link to="/romance" className="tagLinkyFilm">
          <img
            src="https://www.gannett-cdn.com/authoring/2016/06/10/NBCC/ghows-PA-22917d02-381c-43f1-8441-503d7f6a58c1-b7312b74.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
            class="film-img"
          ></img>
          <h4>Romance</h4>
          <h4>
            <i>Eternal Sunshine of the Spotless Mind</i>
          </h4>
        </Link>
      </div>
    </div>
  )
}

export default Films
