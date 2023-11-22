

import { useState, useEffect } from "react"
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react"
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { useNavigate } from "react-router-dom";

function Date() {



    





    const [start, setStart] = useState("");
    const [checked, setChecked] = useState("");

    const [finish, setFinish] = useState("");
// const navigate = useNavigate()
    const [date, setdate] = useState([])
    const handleChange = () => {
        setChecked(!checked);
      };
    const a = async () => {
        try {
    const res = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${finish}`)

    const data = await res.json()
            setdate(data)
            console.log(date)

        }
        catch (err) {
            console.log(err, "error")
        }
    }

    // const a =  () => {
        
    //     const res =  fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${finish}`)
    
    //     .then((response) => response.json())
    //     .then(result => {
    //         setdate(result)
    //     console.log(date);})
    
    // .catch(error => console.log('error', error));
    //     }
    
    

    useEffect(() => {
        a()
    }, [])
    // const res = await fetch('https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=2023-06-25&end=2023-08-06?start=${start}')

    // function start() {
    //     let { setStart } = useParams();

    // }
    const getDate=(start)=>{

    }
      


// return (

//     <div >
  

// <table>
//   <thead>
//     <tr>
//       <th>title</th>
//       <th>start</th>
//       <th>allDay</th>
//       <th>parashat</th>
//     </tr>
//   </thead>
//   <tbody>
//   {date && date.map(item => {
//       return (
//         <tr key={item.title}>
//           <td>{ item.title }</td>
//           <td>{ item.start }</td>
//           <td>{ item.allDay }</td>
//           <td>{ item.className.parashat }</td>

//           {/* <button onClick={()=>sendTsk(item.id)}></button> */}
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
  
//         </div>)

 // const a =  () => {
        
    //     const res =  fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${finish}`)
    
    //     .then((response) => response.json())
    //     .then(result => {
    //         setdate(result)
    //     console.log(date);})
    
    // .catch(error => console.log('error', error));
    //     }

return (
    <div >
      <input
        placeholder="start"
        // type="date"

        onBlur={(e) => setStart(e.target.value)}
      />
      <input
        placeholder="finish"
        // type="date"
        onBlur={(e) => setFinish(e.target.value)}
                  

       /> 
                <button onClick={()=>a(start)}>הצג תאריכים</button>

                <label>
                <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        פרשת שבוע
      </label>



      <table>
  <thead>
    <tr>
      <th>title</th>
      <th>start</th>
      <th>allDay</th>
      <th>parashat</th>
    </tr>
  </thead>
  <tbody>
  {date && date?.map(item => {
      return (
        <tr key={item.title}>
          <td>{ item.title }</td>
          <td>{ item.start }</td>
          <td>{ item.allDay }</td>
          <td>{ item.className.parashat }</td>

          {/* <button onClick={()=>sendTsk(item.id)}></button> */}
        </tr>
      );
    })}
  </tbody>
</table>
          <button onClick={()=>setdate(data.filter(p=>p==='parashat'))}>הצג פרשת שבוע</button>

  
    </div>

  


)
  

 
}
export default Date;








