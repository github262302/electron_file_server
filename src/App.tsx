import { useState, useEffect } from "react";

import "./App.css";
import AppBar from "./components/AppBar";
import IsRun from "./components/isRun";
import QRCode from "./components/QRCode";
import SavePath from "./components/SavePath";

function App() {
    const [show, setShow] = useState(true);
    return (
        <div className="">
            <AppBar />
            <div className={"buttons"}>
                <button active={show && "active"} onClick={() => setShow(true)}>
                    接受
                </button>
                <button
                    active={!show && "active"}
                    onClick={() => setShow(false)}>
                    发送
                </button>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
                <div
                    style={{
                        minHeight: "245px",
                        width: "245px",

                        // border: "1px solid red",
                        display: "grid",
                        placeItems: "center",
                    }}>
                    {show ? <QRCode /> : <div>开发中</div>}
                </div>
            </div>

            <footer>
                <div
                    className=""
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}>
                    <IsRun />
                    <SavePath />
                </div>
            </footer>
        </div>
    );
}

export default App;
