import styles from "./index.module.scss";
export default () => {
    return (
        <div className={styles.bar}>
            <a>logo</a>
            <div>settings</div>
            <div className={styles.close}>X</div>
        </div>
    );
};
