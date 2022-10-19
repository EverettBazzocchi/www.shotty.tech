import { useEffect, useState } from 'react'
import api from '../../api'

import './Servers.css'

import ServerLayout from './Components/ServerLayout'

const Servers = () => {
    const [servers, setServers] = useState([])

    useEffect(() => {
        api.listDocuments('62bf0ad0c976f6074871').then((response) => {
            setServers(response.documents)
        })
    }, [])


    return (
        <div id="Card-Div">{servers.map((server) => {
            return <ServerLayout key={server.$id} status={server.status} name={server.name} count={server.count} players={server.players} />
        })}</div>
    )
}

export default Servers