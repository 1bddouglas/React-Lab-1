import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkTheme, setDarkTheme] = useState(true);
  const [fontSize, setFontSize] = useState(44);
  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad${darkTheme === true ? " dark-theme" : ""}`}>
        <p>Vote for:</p>
        <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
      </div>
      <div className="flavor-container">
        <p>What to support</p>
        <div>
          <button
            onClick={() => {
              setFlavor("Chocolate");
            }}
          >
            Chocolate
          </button>
          <button
            onClick={() => {
              setFlavor("Vanilla");
            }}
          >
            Vanilla
          </button>
          <button
            onClick={() => {
              setFlavor("Strawberry");
            }}
          >
            Strawberry
          </button>
        </div>
        <div className="color-theme-container">
          <p>Color Theme</p>
          <div>
            <button
              onClick={() => {
                setDarkTheme(false);
              }}
            >
              Light
            </button>
            <button
              onClick={() => {
                setDarkTheme(true);
              }}
            >
              Dark
            </button>
          </div>
        </div>
        <div className="font-size-container">
          <p>Font Size</p>
          <div>
            <button
              onClick={() => {
                setFontSize(fontSize - 1);
              }}
            >
              Down
            </button>
            <p>{fontSize}</p>
            <button
              onClick={() => {
                setFontSize(fontSize + 1);
              }}
            >
              Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdDesigner;
