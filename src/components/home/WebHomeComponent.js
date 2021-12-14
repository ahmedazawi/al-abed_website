import React, { useContext } from "react";
import earthImg from "../../assets/images/earth-png.png";
import CircleCenter from "../../components/home/CircleCenter";
import ContextApi from "../ContextApi";
const WebHomeComponent = () => {
  const lang = useContext(ContextApi);
  return (
    <>
      <div className="circle-home">
        <CircleCenter />
      </div>
      <div className="earth-img">
        <img src={earthImg} alt="earth" />
        <div>
          <div className="earth-title">
            <div>+11</div>

            <div>
              {lang.lang === "AR" ? (
                <p>
                  عاما من <br />
                  ألثقة
                </p>
              ) : (
                <p>
                  years of <br />
                  confidence
                </p>
              )}
            </div>
          </div>
          <div className="earth-title">
            <div>+5</div>
            <div>
              {lang.lang === "AR" ? (
                <p>وكالات عالمية</p>
              ) : (
                <p>
                  international <br />
                  agencies
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebHomeComponent;
