import styles from "./styles.module.scss";

interface SubsScribeButtonProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: SubsScribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}
