import inputStyle from "./Input.module.css";
import { useState } from "react";
import Output from "../Output/Output";
import uuid from "../../../node_modules/uuid/dist/v1";




let denem2=JSON.parse(localStorage.getItem("TODOS")) || [];


let uuidValue;
export const Input = () => {
  const [showTask, setShowTask] = useState("");
  const [showDate, setShowDate] = useState("");

 
  
 

  return (
    <>
      <form
        className={inputStyle.form}
        onSubmit={(e) => {
          e.preventDefault();
          uuidValue=uuid();
          denem2.push([uuidValue,showTask,showDate,true]);
          
        
          
          localStorage.setItem("TODOS", JSON.stringify(denem2));
          setShowDate("");
          setShowTask("");
         
        }}
      >
        <div className={inputStyle["task-div"]}>
          <label htmlFor="task-input">Task: {showTask}</label>
          <input
            required
            id="task-input"
            type="text"
            placeholder="Add task"
            value={showTask}
            onChange={(e) => {
              setShowTask(e.target.value);
            }}
          ></input>
        </div>

        <div className={inputStyle["task-div"]}>
          <label htmlFor="dt-input">Day & Time: {showDate}</label>
          <input
            required
            id="dt-input"
            type="datetime-local"
            value={showDate}
            onChange={(e) => {
              setShowDate(e.target.value);
            }}
          ></input>
        </div>

        <div className={inputStyle["task-div"]}>
          <button className={inputStyle.button} onClick={()=>{ 
            document.querySelector(".emptyy").classList.add("emptyy2");
            document.querySelector(".emptyy").classList.remove("emptyy1");}
            } type="submit">
            Save Task
          </button>
        </div>
      </form>

            
            
            

      <div>
      {denem2.length ===0 ? ""  : denem2.map((item) => {
             
          return <Output cizgi={item[3]} id={item[0]} key={item[0]} task={item[1]} date={item[2]} />;
        })}
        
        
        
      </div>
    </>
  );
};

