
import { Route, Routes } from "react-router-dom";
import Date from "./Date";






const AppRoutes = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Date/>}></Route>
      <Route path="/Date" element={<Date/>}></Route>


    </Routes>
    
  );

//   function start() {
//     let { setStart } = useParams();

// }
};

export default AppRoutes;




// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     useParams
//   } from "react-router-dom";
   
//    <Router>
//       <Route path="/user/:username">
//         <User />
//       </Route>
   
//       <Link to="/user/john">John</Link>
   
//       function User() {
//         let { username } = useParams();
   
//         return (
//           <div>{username}</div>   // renders 'john' when the link is clicked. 
//         );  
//       }    
   
//    </Router>