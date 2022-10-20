

const Profile = ({ staff }) => {

    staff.image = "https://mc-heads.net/body/" + staff.username;

    return (
        <article className="Staff-Profile">
            <h3>{staff.username}</h3>
            <aside>
                <img src={staff.image} alt={staff.username} />
            </aside>
            <section>

                <section className="Staff-Stats">
                    <section className="Staff-Stat-Card fav-server">
                        <h4>Favorite Server</h4>
                        <p className="Stat-Counter">{staff.server}</p>
                    </section>
                </section>
                <section className="Staff-Stats">

                    <section className="Staff-Stat-Card">
                        <h4>Bans</h4>
                        <p className="Stat-Counter">{staff.bans}</p>
                    </section>
                    <section className="Staff-Stat-Card">
                        <h4>Mutes</h4>
                        <p className="Stat-Counter">{staff.mutes}</p>
                    </section>
                    <section className="Staff-Stat-Card">
                        <h4>Kicks</h4>
                        <p className="Stat-Counter">{staff.kicks}</p>
                    </section>
                </section>

                <p>{staff.about}</p>
            </section>


        </article>
    )
}

export default Profile