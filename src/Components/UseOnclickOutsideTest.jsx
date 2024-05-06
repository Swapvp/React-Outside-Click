import { useRef, useState } from "react";
import useOutsideClick from "./UseOutsideClick";
import "./Styles.css";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div className="info-container" ref={ref}>
          <h1 className="shine">Swapnesh Pawar </h1>
          <h3>Front End Developer</h3>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button className="Content-btn" onClick={() => setShowContent(true)}>
          Show Content
        </button>
      )}
    </div>
  );
}
