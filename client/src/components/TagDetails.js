import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Songs from './Songs'
import Tags from './Tags'

const TagDetails = () => {
  let { id } = useParams()
  const navigate = useNavigate()
  const [songState, setSongState] = useState({
    name: '',
    url: '',
    composer: '',
    tag: ''
  })

  useEffect(() => {
    const getSong = async () => {
      let response = await axios.get(`http://localhost:3001/tag/${id}`)
      setSongState(response.data)
    }
    getSong()
  }, [])

  return (
    <div className="details" key={songState._id}>
      {/* <h2>{songState.tag.name}</h2> */}
      <h2>{songState.name}</h2>
    </div>
  )
}

export default TagDetails
