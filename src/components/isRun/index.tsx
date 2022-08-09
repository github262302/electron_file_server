import { useState } from "react";
import styles from "./index.module.scss";
export default () => {
    const [isRun, setIsRun] = useState(true);
    const FnSwitch = function () {
        if (isRun) {
            setIsRun(false);
            window.service.close();
        } else {
            setIsRun(true);
            window.service.start();
        }
    };
    return (
        <div
            onClick={FnSwitch}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
            }}>
            <div
                style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    backgroundColor: isRun ? "green" : "red",
                    color: "#FFFFEE",
                }}></div>
            <div className={styles.isRun}>run</div>
        </div>
    );
};
