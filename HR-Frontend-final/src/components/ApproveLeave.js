// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import HrApprovalTable from "./HrApprovalTable";


// export default function ApproveLeave() {

//   const [isAdminLogged, setIsAdminLogged] = useState(
//     sessionStorage.getItem("adminAuth") === "true"
//   );

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   // Reset login if user switches tab / opens another site
//   useEffect(() => {

//     const handleVisibilityChange = () => {

//       if (document.hidden) {

//         sessionStorage.removeItem("adminAuth");

//         setIsAdminLogged(false);

//       }

//     };

//     document.addEventListener(
//       "visibilitychange",
//       handleVisibilityChange
//     );

//     return () => {

//       document.removeEventListener(
//         "visibilitychange",
//         handleVisibilityChange
//       );

//     };

//   }, []);


//   const handleLogin = (e) => {

//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "1234") {

//       sessionStorage.setItem("adminAuth", "true");

//       setIsAdminLogged(true);

//     } else {

//       alert("Invalid Admin Credentials");

//     }

//   };


//   return (

//     <div className="flex">

//       {/* Sidebar always visible */}
//       <Sidebar />

//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">

//         {!isAdminLogged ? (

//           <div className="flex justify-center items-center h-full">

//             <form
//               onSubmit={handleLogin}
//               className="bg-white shadow-md rounded-xl p-8 w-[350px]"
//             >

//               <h2 className="text-xl font-semibold mb-6 text-center">
//                 Admin Login Required
//               </h2>

//               <input
//                 type="email"
//                 placeholder="Admin Email"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="w-full bg-[#082a57] text-white py-2 rounded">
//                 Login
//               </button>

//             </form>

//           </div>

//         ) : (

//          

//   {/* 🔹 LEAVE APPROVAL (already) */}
//   <HrApprovalTable />

//  

// 

//         )}

//       </div>

//     </div>

//   );

// }


// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import HrApprovalTable from "./HrApprovalTable";
// import EmployeesList from "./EmployeesList";
// import CandidatesList from "./CandidatesList";


// export default function ApproveLeave() {

//   const [isAdminLogged, setIsAdminLogged] = useState(
//     sessionStorage.getItem("adminAuth") === "true"
//   );

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   // Reset login if user switches tab / opens another site
//   useEffect(() => {

//     const handleVisibilityChange = () => {

//       if (document.hidden) {

//         sessionStorage.removeItem("adminAuth");

//         setIsAdminLogged(false);

//       }

//     };

//     document.addEventListener(
//       "visibilitychange",
//       handleVisibilityChange
//     );

//     return () => {

//       document.removeEventListener(
//         "visibilitychange",
//         handleVisibilityChange
//       );

//     };

//   }, []);


//   const handleLogin = (e) => {

//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "1234") {

//       sessionStorage.setItem("adminAuth", "true");

//       setIsAdminLogged(true);

//     } else {

//       alert("Invalid Admin Credentials");

//     }

//   };


//   return (

//     <div className="flex">

//       {/* Sidebar always visible */}
//       <Sidebar />

//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">

//         {!isAdminLogged ? (

//           <div className="flex justify-center items-center h-full">

//             <form
//               onSubmit={handleLogin}
//               className="bg-white shadow-md rounded-xl p-8 w-[350px]"
//             >

//               <h2 className="text-xl font-semibold mb-6 text-center">
//                 Admin Login Required
//               </h2>

//               <input
//                 type="email"
//                 placeholder="Admin Email"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="w-full bg-[#082a57] text-white py-2 rounded">
//                 Login
//               </button>

//             </form>

//           </div>

//         ) : (

//           <div className="space-y-6">

//   {/* 🔹 LEAVE APPROVAL (already) */}
//   <HrApprovalTable />

//   {/* 🔹 EMPLOYEES */}
//   <EmployeesList />

//   {/* 🔹 ONBOARDING */}
//   <CandidatesList />

// </div>

//         )}

//       </div>

//     </div>

//   );

// }



// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import HrApprovalTable from "./HrApprovalTable";
// import EmployeesList from "./EmployeesList";
// import CandidatesList from "./CandidatesList";

// export default function ApproveLeave() {

//   const [isAdminLogged, setIsAdminLogged] = useState(
//     sessionStorage.getItem("adminAuth") === "true"
//   );

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // 🔥 NEW: Dashboard stats
//   const [stats, setStats] = useState({});

//   // 🔒 Auto logout when tab changes
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         sessionStorage.removeItem("adminAuth");
//         setIsAdminLogged(false);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   // 🔥 FETCH ADMIN DASHBOARD DATA
//   useEffect(() => {
//     if (isAdminLogged) {
//       const fetchData = () => {
//         fetch("http://127.0.0.1:8000/api/attendance/admin-dashboard/")
//           .then(res => res.json())
//           .then(data => setStats(data))
//           .catch(err => console.log(err));
//       };

//       fetchData();

//       const interval = setInterval(fetchData, 5000); // auto refresh every 5 sec

//       return () => clearInterval(interval);
//     }
//   }, [isAdminLogged]);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "1234") {
//       sessionStorage.setItem("adminAuth", "true");
//       setIsAdminLogged(true);
//     } else {
//       alert("Invalid Admin Credentials");
//     }
//   };

//   return (
//     <div className="flex">

//       {/* Sidebar */}
//       <Sidebar />

//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">

//         {!isAdminLogged ? (

//           // 🔐 LOGIN FORM
//           <div className="flex justify-center items-center h-full">

//             <form
//               onSubmit={handleLogin}
//               className="bg-white shadow-md rounded-xl p-8 w-[350px]"
//             >

//               <h2 className="text-xl font-semibold mb-6 text-center">
//                 Admin Login Required
//               </h2>

//               <input
//                 type="email"
//                 placeholder="Admin Email"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="w-full bg-[#082a57] text-white py-2 rounded">
//                 Login
//               </button>

//             </form>

//           </div>

//         ) : (

//           // 🔥 ADMIN DASHBOARD
//           <div className="space-y-6">

//             {/* 🔥 STATS CARDS */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

//               <div className="bg-white p-5 rounded-2xl shadow">
//                 <p className="text-gray-500">Total Employees</p>
//                 <h2 className="text-3xl font-bold">
//                   {stats.total || 0}
//                 </h2>
//               </div>

//               <div className="bg-green-100 p-5 rounded-2xl">
//                 <p>Present Today</p>
//                 <h2 className="text-3xl font-bold">
//                   {stats.present || 0}
//                 </h2>
//               </div>

//               <div className="bg-red-100 p-5 rounded-2xl">
//                 <p>Absent Today</p>
//                 <h2 className="text-3xl font-bold">
//                   {stats.absent || 0}
//                 </h2>
//               </div>

//               <div className="bg-yellow-100 p-5 rounded-2xl">
//                 <p>Half Day</p>
//                 <h2 className="text-3xl font-bold">
//                   {stats.half_day || 0}
//                 </h2>
//               </div>

//             </div>

//             {/* 🔹 Leave Approval */}
//             <HrApprovalTable />

//             {/* 🔹 Employees */}
//             <EmployeesList />

//             {/* 🔹 Onboarding */}
//             <CandidatesList />

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }






import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HrApprovalTable from "./HrApprovalTable";
import EmployeesList from "./EmployeesList";
import CandidatesList from "./CandidatesList";

export default function ApproveLeave() {

  const [isAdminLogged, setIsAdminLogged] = useState(
    sessionStorage.getItem("adminAuth") === "true"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 NEW: Dashboard stats
  const [stats, setStats] = useState({});

  // 🔒 Auto logout when tab changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        sessionStorage.removeItem("adminAuth");
        setIsAdminLogged(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // 🔥 FETCH ADMIN DASHBOARD DATA
  useEffect(() => {
    if (isAdminLogged) {
      const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/attendance/admin-dashboard/")
          .then(res => res.json())
          .then(data => setStats(data))
          .catch(err => console.log(err));
      };

      fetchData();

      const interval = setInterval(fetchData, 5000); // auto refresh every 5 sec

      return () => clearInterval(interval);
    }
  }, [isAdminLogged]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      sessionStorage.setItem("adminAuth", "true");
      setIsAdminLogged(true);
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        {!isAdminLogged ? (

          // 🔐 LOGIN FORM
          <div className="flex justify-center items-center h-full">

            <form
              onSubmit={handleLogin}
              className="bg-white shadow-md rounded-xl p-8 w-[350px]"
            >

              <h2 className="text-xl font-semibold mb-6 text-center">
                Admin Login Required
              </h2>

              <input
                type="email"
                placeholder="Admin Email"
                className="w-full mb-4 p-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="w-full bg-[#082a57] text-white py-2 rounded">
                Login
              </button>

            </form>

          </div>

        ) : (

          // 🔥 ADMIN DASHBOARD
          <div className="space-y-6">

            {/* 🔥 STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              <div className="bg-white p-5 rounded-2xl shadow">
                <p className="text-gray-500">Total Employees</p>
                <h2 className="text-3xl font-bold">
                  {stats.total || 0}
                </h2>
              </div>

              <div className="bg-green-100 p-5 rounded-2xl">
                <p>Present Today</p>
                <h2 className="text-3xl font-bold">
                  {stats.present || 0}
                </h2>
              </div>

              <div className="bg-red-100 p-5 rounded-2xl">
                <p>Absent Today</p>
                <h2 className="text-3xl font-bold">
                  {stats.absent || 0}
                </h2>
              </div>

              <div className="bg-yellow-100 p-5 rounded-2xl">
                <p>Half Day</p>
                <h2 className="text-3xl font-bold">
                  {stats.half_day || 0}
                </h2>
              </div>

            </div>

            {/* 🔹 Leave Approval */}
            <HrApprovalTable />

            {/* 🔹 Employees */}
            <EmployeesList />

            {/* 🔹 Onboarding */}
            <CandidatesList />

          </div>

        )}

      </div>

    </div>
  );
}