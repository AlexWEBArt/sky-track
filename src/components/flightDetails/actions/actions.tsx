import styles from './actions.module.css'

export function Actions() {
    return (
        <div className={styles.actions}>
            <button className={styles.action_route}>
                <img width={22} src={'/actionIcons/route.svg'} alt="Route" className={styles.contry_flag} />
                Route
            </button>
            <button className={styles.action_follow}>
                <img width={22} src={'/actionIcons/follow.svg'} alt="Follow" className={styles.contry_flag} />
                Follow
            </button>
            <button className={styles.action_share}>
                <img width={22} src={'/actionIcons/share.svg'} alt="Share" className={styles.contry_flag} />
                Share
            </button>
            <button className={styles.action_more}>
                <img width={22} src={'/actionIcons/more.svg'} alt="More" className={styles.contry_flag} />
                More
            </button>
        </div>
    )
}