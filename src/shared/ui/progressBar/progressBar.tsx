import styles from './progressBar.module.css'

interface Props {
	progress: number
}

export function ProgressBar({ progress }: Props) {
	return (
		<div className={styles.progress_bar}>
			<div className={styles.common_path}></div>
			<div
				className={styles.progress_path}
				style={{ width: `${progress}%` }}
			>
				&#9992;
			</div>
		</div>
	)
}
