import styles from './actions.module.css'

export function Actions() {
    return (
        <div className={styles.actions}>
            <button className={styles.action_route}>
                <img width={22} src={'/actionIcons/route.svg'} alt="Route" className={styles.button_image} />
                Route
            </button>
            <button className={styles.action_follow}>
                <img width={22} src={'/actionIcons/follow.svg'} alt="Follow" className={styles.button_image} />
                Follow
            </button>
            <button className={styles.action_share}>
                <img width={22} src={'/actionIcons/share.svg'} alt="Share" className={styles.button_image} />
                Share
            </button>
            <button className={styles.action_more}>
                <img width={22} src={'/actionIcons/more.svg'} alt="More" className={styles.button_image} />
                More
            </button>
        </div>
    )
}