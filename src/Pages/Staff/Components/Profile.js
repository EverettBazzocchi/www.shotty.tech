function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " year";
        } else {
            return Math.floor(interval) + " years";
        }
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " month";
        } else {
            return Math.floor(interval) + " months";
        }
    }
    interval = seconds / 86400;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " day";
        } else {
            return Math.floor(interval) + " days";
        }
    }
    interval = seconds / 3600;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " hour";
        } else {
            return Math.floor(interval) + " hours";
        }
    }
    interval = seconds / 60;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " minute";
        } else {
            return Math.floor(interval) + " minutes";
        }
    }
    if (Math.floor(seconds) === 1) {
        return Math.floor(seconds) + " second";
    } else {
        return Math.floor(seconds) + " seconds";
    }
} 

const Profile = ({ staff }) => {

    let newDate = new Date(staff.timeAsStaff);
    let time = timeSince(newDate);

    staff.image = "https://mc-heads.net/body/" + staff.username;

    return (
        <article className="Staff-Profile">
            <h3>{staff.username}</h3>
            <aside>
                <img src={staff.image} alt={staff.username} />
            </aside>
            <section>
                <section className="Staff-Stats">
                    <section className="Staff-Stat-Card Stats-One">
                        <h4>Favorite Server</h4>
                        <p className="Stat-Counter">{staff.server}</p>
                    </section>
                    <section className="Staff-Stat-Card Stats-One">
                        <h4>Rank</h4>
                        <p className="Stat-Counter">{staff.rank}</p>
                    </section>
                    <section className="Staff-Stat-Card Stats-One">
                        <h4>Time As Staff</h4>
                        <p className="Stat-Counter">{time}</p>
                    </section>

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