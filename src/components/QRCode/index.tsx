import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default () => {
    const canvas = useRef<any>();
    function GetCode() {
        QRCode.toCanvas(
            canvas.current,
            window.service.checkAddress(),
            function (error: any) {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log("success!");
            }
        );
    }
    useEffect(() => {
        GetCode();
        return () => {};
    }, []);
    return (
        <div>
            <canvas
                ref={canvas}
                style={{
                    height: "245px",
                    width: "245px",
                }}></canvas>

            <div>
                <a
                    style={{ fontSize: "12px" }}
                    target="_blank"
                    href={window.service.checkAddress()}>
                    {window.service.checkAddress()}
                </a>
            </div>
        </div>
    );
};
