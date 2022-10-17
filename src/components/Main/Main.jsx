import mainStyle from "./Main.module.css";
import { Input } from "../Input/Input.jsx";
import { useState } from "react";


let denem2 = JSON.parse(localStorage.getItem("TODOS")) || [];

const Main = () => {
  const [showCloseBtn, setShowCloseBtn] = useState(true);
  
  
  
  return (
    <div className={mainStyle.main}>
      <div className={mainStyle.header}>
        <h2>Task Tracker</h2>
        <button onClick={() => setShowCloseBtn(!showCloseBtn)}>
          {showCloseBtn ? "Close" : "Open"} Input Bar
        </button>
      </div>

      <div>
        <div
          className={
            showCloseBtn
              ? mainStyle["input-field"]
              : mainStyle["input-field-hidden"]
          }
        > 
          <div>
        <Input />
        { denem2.length>0 ?
          <p  className="emptyy emptyy2">No task list</p> : <p  className="emptyy emptyy1">No task list</p>
        
        }
        
        
        </div>
          
          
        </div>
      </div>

     
    </div>

    
  );
};



export default Main;
