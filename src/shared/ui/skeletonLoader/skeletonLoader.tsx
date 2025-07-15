import styles from "./skeletonLoader.module.css";

interface Props {
  count: number;
}

export function SkeletonLoader({ count }: Props) {
  return (
    <div className={styles.skeleton_list}>
      <div className={styles.skeleton_filter}></div>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={styles.skeleton_card}></div>
      ))}
    </div>
  );
}
