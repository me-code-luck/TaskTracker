import outputStyle from "./Output.module.css";
import { useState } from "react";






let denem2=JSON.parse(localStorage.getItem("TODOS")) || [];




const Output = ({ task, date ,id ,cizgi}) => {
  const [lineOver, setLineOver] = useState(cizgi);

 
  const handleDelete = (e) => {
    denem2=JSON.parse(localStorage.getItem("TODOS")) || [];
   
    e.target.parentElement.remove();
    let id = e.target.parentElement.id;
    denem2.map((item,index) => {
      if (item[0]===id) {
        denem2.splice(index,1);
      }
      
     return ""
    })
  localStorage.setItem("TODOS", JSON.stringify(denem2));
  
  if (denem2.length===0) {
   
    document.querySelector(".emptyy").classList.add("emptyy1");
    document.querySelector(".emptyy").classList.remove("emptyy2");
    }
  
 
 
}

  return (<>
  
    <div
      id={id}
      className={outputStyle["card"]}
      onClick={(e) => {
        let denem2=JSON.parse(localStorage.getItem("TODOS")) || [];
        setLineOver(!lineOver);
        let id = e.target.parentElement.id;
        denem2.map((item,index) => {
          if (item[0]===id) {
            item[3]=!item[3];
          }
         return ""
      })
      localStorage.setItem("TODOS", JSON.stringify(denem2));

      }}
    >
      <p
        className={
          !lineOver ? outputStyle["text-linethrough"] : outputStyle["desc"]
        }
      >
        {task}
      </p>
      <p
        className={
          !lineOver ? outputStyle["date-linethrough"] : outputStyle["date"]
        }
      >
        {date}
      </p>
      <i className={"fa-solid fa-xmark icon"} onClick={handleDelete}></i>
    </div></>
  );
};

export default Output;
