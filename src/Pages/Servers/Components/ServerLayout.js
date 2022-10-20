import { useState, useEffect } from 'react'

import api from '../../../api'

const ServerLayout = ({ name, players, count, status }) => {
    const [classes, setClasses] = useState('')
    const [playerJson, setPlayerJson] = useState([])

    let player_count
    if (!status) {
        player_count = 'Offline'
    } else {
        player_count = `${count}/ 50`
    }

    useEffect(() => {

        players.map((player) => {
            console.log(player)
            api.listDocumentsWithQuery('staffStats', 'name', player)
                .then((response) => {
                    console.log(response)
                    setPlayerJson(() => [...playerJson, { "player" : player, "rank" : response.documents[0].rank }])
                }).catch((error) => {
                    if (error == "AppwriteException: Query not valid: Attribute not found in schema: name") {
                        setPlayerJson(() => [...playerJson, { "player" : player, "rank" : "Player Member" }])
                    }
                })
        })

    }, [players])

    useEffect(() => {
        if (status) {
            setClasses('Dark-Card online')
        } else {
            setClasses('Dark-Card offline')
        }
    }, [status])


    return (
        <article className='Server-Card'>
            <section className={classes} ><h3>{name}</h3></section>
            <section className="Light-Card">{player_count}</section>
            <section className="Dark-Card">Staff Online</section>
            <section className="Light-Card Player-List">{playerJson.map((player) => {
                console.log(player)
                return <span className={player.rank}>{player.player}</span>
            })}</section>
        </article>
    )
}

export default ServerLayout