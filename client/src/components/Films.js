import { Link } from 'react-router-dom'

const Films = () => {
  return (
    <div className="FilmPage">
      <h1>Pair our music with a classic movie scene...</h1>
      <div className="filmDiv">
        <Link to="/action">
          <img
            src="https://www.illustratedfiction.com/files/media/53796/matrixlobby.jpg"
            class="film-img"
          ></img>
          <h4>
            Action - <i>The Matrix</i>
          </h4>
        </Link>
      </div>
    </div>
  )
}

export default Films
