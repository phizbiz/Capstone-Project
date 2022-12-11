import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
      let response = await axios.get(`/songs/${id}`)
      setSongState(response.data)
    }
    getSong()
  }, [])

  return (
    <div className="details">
      <h2>{songState.tag.name}</h2>
      {/* <h2>{songState.name}</h2> */}
    </div>
  )
}

export default TagDetails
