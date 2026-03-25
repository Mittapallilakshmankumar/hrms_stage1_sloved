
// import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import RoleCards from "./RoleCards";
// import EmployeeRequestForm from "./EmployeeRequestForm";
// import EmployeeRequestsTable from "./EmployeeRequestsTable";
// import HrApprovalTable from "./HrApprovalTable";
// import AddCandidateModal from "./AddCandidateModal";
// import CandidateTable from "./CandidateTable";

// function Layout({ title, children }) {
//   return (
//     <div className="flex min-h-screen bg-[#f4f7fb]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <div className="p-4 md:p-6">
//           <Navbar />
//           <main className="mt-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();

//   const user = {
//     name: "Geetha",
//     role: "HR Executive",
//     department: "Human Resources",
//     userId: "EMP001",
//   };

//   const hour = new Date().getHours();
//   let greeting = "Hello";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 18) greeting = "Good Afternoon";
//   else greeting = "Good Evening";

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   const companySchedule = [
//     {
//       day: "Monday",
//       short: "Mon",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Tuesday",
//       short: "Tue",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Wednesday",
//       short: "Wed",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Thursday",
//       short: "Thu",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Friday",
//       short: "Fri",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Saturday",
//       short: "Sat",
//       time: "09:00 AM - 01:00 PM",
//       status: "Half Day",
//       badge: "bg-yellow-100 text-yellow-700",
//       card: "bg-yellow-50 border-yellow-200",
//     },
//     {
//       day: "Sunday",
//       short: "Sun",
//       time: "Week Off",
//       status: "Holiday",
//       badge: "bg-red-100 text-red-700",
//       card: "bg-red-50 border-red-200",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {greeting}, {user.name}
//             </h1>
//             <p className="text-gray-500 mt-2 text-lg">
//               {user.role} • {user.department}
//             </p>
//             <p className="text-gray-400 mt-2">{today}</p>
//           </div>

//           <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
//             <p className="text-sm text-blue-600 font-medium">user ID</p>
//             <h2 className="text-2xl font-bold text-blue-800 mt-1">
//               {user.userId}
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Company Work Schedule
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Standard weekly shift timing for users
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <div className="bg-blue-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-blue-600 font-medium">Shift</p>
//               <p className="text-sm font-semibold text-blue-800">
//                 General Shift
//               </p>
//             </div>
//             <div className="bg-purple-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-purple-600 font-medium">Hours</p>
//               <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Working Days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Half Day</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Weekly Off</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
//           {companySchedule.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border p-4 ${item.card}`}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-gray-700">
//                   {item.short}
//                 </p>
//                 <span
//                   className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">{item.day}</p>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-800 leading-5">
//                   {item.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//         <div
//           onClick={() => navigate("/leave-balance")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Leave Balance</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Available this year</p>
//         </div>

//         <div
//           onClick={() => navigate("/pending-requests")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Pending Requests</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2>
//           <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
//         </div>

//         <div
//           onClick={() => navigate("/present-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Present Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>

//         <div
//           onClick={() => navigate("/absent-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Absent Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
//         <p className="text-gray-500 mt-1">
//           Access your frequently used HR actions quickly.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//           <div
//             onClick={() => navigate("/leave")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Submit a leave request quickly
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/attendance")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               View Attendance
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Check daily and monthly attendance
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/leave-requests")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Leave Requests
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               View applied leave requests status
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/shift-details")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Shift Details
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               See your work shift and timings
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveBalancePage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Casual Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Sick Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Earned Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PendingRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Casual Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Sick Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Permission Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PresentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Present</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Attendance Percentage</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
//           <p className="text-sm text-gray-400 mt-2">Current month</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function AbsentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Reason</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
//           <p className="text-sm text-gray-400 mt-2">As per records</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
//           <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
//           <p className="text-gray-500 mt-2">12 Mar 2026</p>
//           <p className="text-green-600 font-medium mt-2">Approved</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
//           <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
//           <p className="text-red-600 font-medium mt-2">Rejected</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function ShiftDetailsPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Shift Name</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">
//             General Shift
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Login Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Logout Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// function OnboardingPage() {
//   const [candidates, setCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const addCandidate = (data) => {
//     setCandidates((prev) => [data, ...prev]);
//   };

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-xl font-bold">Onboarding</h1>

//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Candidate
//           </button>
//         </div>

//         {showModal && (
//           <AddCandidateModal
//             closeModal={() => setShowModal(false)}
//             onSubmit={addCandidate}
//           />
//         )}

//         <CandidateTable candidates={candidates} />
//       </div>
//     </Layout>
//   );
// }
// function LeavePage() {
//   const [activeRole, setActiveRole] = useState("user");

//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       userName: "Geetha",
//       userId: "EMP001",
//       department: "IT",
//       leaveType: "Sick Leave",
//       fromDate: "2026-03-20",
//       toDate: "2026-03-21",
//       reason: "Fever and rest",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       userName: "Anjali",
//       userId: "EMP002",
//       department: "HR",
//       leaveType: "Casual Leave",
//       fromDate: "2026-03-25",
//       toDate: "2026-03-26",
//       reason: "Family function",
//       status: "Approved",
//     },
//   ]);

//   const addRequest = (newRequest) => {
//     setRequests((prev) => [newRequest, ...prev]);
//   };

//   const updateRequestStatus = (id, status) => {
//     setRequests((prev) =>
//       prev.map((request) =>
//         request.id === id ? { ...request, status } : request
//       )
//     );
//   };

//   return (
//     <Layout>
//       <div className="space-y-6">
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
//           <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>
//           <p className="text-gray-500 mt-2">
//             user can apply for leave and HR can approve or reject leave requests.
//           </p>
//         </div>

//         <RoleCards activeRole={activeRole} setActiveRole={setActiveRole} />

//         {activeRole === "user" && (
//           <>
//             <EmployeeRequestForm onAddRequest={addRequest} />
//             <EmployeeRequestsTable requests={requests} />
//           </>
//         )}

//         {activeRole === "hr" && (
//           <HrApprovalTable
//             requests={requests}
//             onUpdateStatus={updateRequestStatus}
//           />
//         )}
//       </div>
//     </Layout>
//   );
// }

// function AttendancePage() {
//   const navigate = useNavigate();

//   return (
//     <Layout>
//       <div>
//         <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Attendance Dashboard
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage check-in, check-out and attendance tracker
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             onClick={() => navigate("/attendance/check-in")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Login (Check-In)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Start your work day by marking attendance
//             </p>
//             <div className="mt-6 text-green-600 font-semibold">
//               Go to Check-In →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/check-out")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Logout (Check-Out)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               End your work day and submit summary
//             </p>
//             <div className="mt-6 text-red-600 font-semibold">
//               Go to Check-Out →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/tracker")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Attendance Tracker
//             </h2>
//             <p className="text-gray-500 mt-3">
//               View attendance timeline and reports
//             </p>
//             <div className="mt-6 text-blue-600 font-semibold">
//               View Tracker →
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function CheckInPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLastLoginName(name);
//     setSubmitted(true);
//     setName("");
//     setNotes("");
//     setTimeout(() => setSubmitted(false), 2500);
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-green-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Login (Check-In)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Notes</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work plan..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-green-600 text-xl font-semibold mb-2">
//                 Check-In Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function CheckOutPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLastLoginName(name);
//     setSubmitted(true);
//     setName("");
//     setSummary("");
//     setTimeout(() => setSubmitted(false), 2500);
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-red-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Logout (Check-Out)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 Work Summary
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work summary..."
//                 value={summary}
//                 onChange={(e) => setSummary(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-red-600 text-xl font-semibold mb-2">
//                 Check-Out Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
//                 <span className="text-red-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function TrackerPage() {
//   const SHIFT_START = 9;
//   const SHIFT_END = 20;

//   const [data] = useState([
//     {
//       date: "2026-03-16",
//       day: "Mon",
//       checkIn: "09:15",
//       checkOut: "18:45",
//       status: "Present",
//     },
//     {
//       date: "2026-03-17",
//       day: "Tue",
//       checkIn: null,
//       checkOut: null,
//       status: "Absent",
//     },
//     {
//       date: "2026-03-18",
//       day: "Wed",
//       checkIn: null,
//       checkOut: null,
//       status: "Absent",
//     },
//     {
//       date: "2026-03-19",
//       day: "Thu",
//       checkIn: "09:45",
//       checkOut: "20:00",
//       status: "Present",
//     },
//     {
//       date: "2026-03-20",
//       day: "Fri",
//       checkIn: "09:45",
//       checkOut: "17:30",
//       status: "Holiday",
//     },
//     {
//       date: "2026-03-21",
//       day: "Sat",
//       checkIn: "10:15",
//       checkOut: "14:00",
//       status: "Present",
//     },
//     {
//       date: "2026-03-22",
//       day: "Sun",
//       checkIn: null,
//       checkOut: null,
//       status: "Holiday",
//     },
//   ]);

//   const getPosition = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     const total = h * 60 + m - SHIFT_START * 60;
//     const range = (SHIFT_END - SHIFT_START) * 60;
//     return (total / range) * 100;
//   };

//   const getHours = (inTime, outTime) => {
//     if (!inTime || !outTime) return 0;
//     const [h1, m1] = inTime.split(":").map(Number);
//     const [h2, m2] = outTime.split(":").map(Number);
//     return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
//   };

//   return (
//     <Layout>
//       <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Attendance Tracker
//         </h2>

//         <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
//           <span>9 AM</span>
//           <span>11 AM</span>
//           <span>1 PM</span>
//           <span>3 PM</span>
//           <span>5 PM</span>
//           <span>7 PM</span>
//           <span>8 PM</span>
//         </div>

//         {data.map((item, i) => {
//           const start = getPosition(item.checkIn);
//           const end = getPosition(item.checkOut);
//           const hours = getHours(item.checkIn, item.checkOut);

//           return (
//             <div key={i} className="flex items-center mb-5 min-w-[700px]">
//               <div className="w-24">
//                 <p className="text-sm font-medium text-gray-700">{item.day}</p>
//                 <p className="text-xs text-gray-400">{item.date}</p>
//               </div>

//               <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
//                 <div className="absolute inset-0 flex justify-between">
//                   {Array.from({ length: 7 }).map((_, idx) => (
//                     <div key={idx} className="w-px bg-gray-200"></div>
//                   ))}
//                 </div>

//                 {item.status === "Present" && (
//                   <div
//                     className="absolute h-3 bg-green-500 rounded"
//                     style={{
//                       left: `${start}%`,
//                       width: `${end - start}%`,
//                     }}
//                   ></div>
//                 )}

//                 {item.status === "Absent" && (
//                   <div className="absolute inset-0 bg-red-100 flex items-center justify-center text-[10px] text-red-500 rounded">
//                     Absent
//                   </div>
//                 )}

//                 {item.status === "Holiday" && (
//                   <div className="absolute inset-0 bg-yellow-100 flex items-center justify-center text-[10px] text-yellow-600 rounded">
//                     Holiday
//                   </div>
//                 )}
//               </div>

//               <div className="w-36 text-right">
//                 <p
//                   className={`text-sm font-medium ${
//                     item.status === "Present"
//                       ? "text-green-600"
//                       : item.status === "Absent"
//                       ? "text-red-500"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {item.status}
//                 </p>

//                 {item.checkIn && item.checkOut && (
//                   <>
//                     <p className="text-xs text-gray-400">
//                       {item.checkIn} - {item.checkOut}
//                     </p>
//                     <p className="text-xs text-gray-600 font-medium">
//                       {hours} hrs
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// export default function Home() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/leave-balance" element={<LeaveBalancePage />} />
//         <Route path="/pending-requests" element={<PendingRequestsPage />} />
//         <Route path="/present-days" element={<PresentDaysPage />} />
//         <Route path="/absent-days" element={<AbsentDaysPage />} />
//         <Route path="/leave-requests" element={<LeaveRequestsPage />} />
//         <Route path="/shift-details" element={<ShiftDetailsPage />} />
//         <Route path="/onboarding" element={<OnboardingPage />} />
//         <Route path="/leave" element={<LeavePage />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/attendance/check-in" element={<CheckInPage />} />
//         <Route path="/attendance/check-out" element={<CheckOutPage />} />
//         <Route path="/attendance/tracker" element={<TrackerPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }




// import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import RoleCards from "./RoleCards";
// import EmployeeRequestForm from "./EmployeeRequestForm";
// import EmployeeRequestsTable from "./EmployeeRequestsTable";
// import HrApprovalTable from "./HrApprovalTable";
// import AddCandidateModal from "./AddCandidateModal";
// import CandidateTable from "./CandidateTable";

// function Layout({ title, children }) {
//   return (
//     <div className="flex min-h-screen bg-[#f4f7fb]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <div className="p-4 md:p-6">
//           <Navbar />
//           <main className="mt-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();

//   const user = {
//     name: "Geetha",
//     role: "HR Executive",
//     department: "Human Resources",
//     userId: "EMP001",
//   };

//   const hour = new Date().getHours();
//   let greeting = "Hello";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 18) greeting = "Good Afternoon";
//   else greeting = "Good Evening";

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   const companySchedule = [
//     {
//       day: "Monday",
//       short: "Mon",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Tuesday",
//       short: "Tue",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Wednesday",
//       short: "Wed",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Thursday",
//       short: "Thu",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Friday",
//       short: "Fri",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Saturday",
//       short: "Sat",
//       time: "09:00 AM - 01:00 PM",
//       status: "Half Day",
//       badge: "bg-yellow-100 text-yellow-700",
//       card: "bg-yellow-50 border-yellow-200",
//     },
//     {
//       day: "Sunday",
//       short: "Sun",
//       time: "Week Off",
//       status: "Holiday",
//       badge: "bg-red-100 text-red-700",
//       card: "bg-red-50 border-red-200",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {greeting}, {user.name}
//             </h1>
//             <p className="text-gray-500 mt-2 text-lg">
//               {user.role} • {user.department}
//             </p>
//             <p className="text-gray-400 mt-2">{today}</p>
//           </div>

//           <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
//             <p className="text-sm text-blue-600 font-medium">user ID</p>
//             <h2 className="text-2xl font-bold text-blue-800 mt-1">
//               {user.userId}
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Company Work Schedule
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Standard weekly shift timing for users
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <div className="bg-blue-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-blue-600 font-medium">Shift</p>
//               <p className="text-sm font-semibold text-blue-800">
//                 General Shift
//               </p>
//             </div>
//             <div className="bg-purple-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-purple-600 font-medium">Hours</p>
//               <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Working Days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Half Day</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Weekly Off</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
//           {companySchedule.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border p-4 ${item.card}`}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-gray-700">
//                   {item.short}
//                 </p>
//                 <span
//                   className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">{item.day}</p>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-800 leading-5">
//                   {item.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//         <div
//           onClick={() => navigate("/leave-balance")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Leave Balance</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Available this year</p>
//         </div>

//         <div
//           onClick={() => navigate("/pending-requests")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Pending Requests</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2>
//           <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
//         </div>

//         <div
//           onClick={() => navigate("/present-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Present Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>

//         <div
//           onClick={() => navigate("/absent-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Absent Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
//         <p className="text-gray-500 mt-1">
//           Access your frequently used HR actions quickly.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//           <div
//             onClick={() => navigate("/leave")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Submit a leave request quickly
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/attendance")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               View Attendance
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Check daily and monthly attendance
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/leave-requests")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Leave Requests
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               View applied leave requests status
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/shift-details")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Shift Details
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               See your work shift and timings
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveBalancePage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Casual Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Sick Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Earned Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PendingRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Casual Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Sick Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Permission Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PresentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Present</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Attendance Percentage</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
//           <p className="text-sm text-gray-400 mt-2">Current month</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function AbsentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Reason</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
//           <p className="text-sm text-gray-400 mt-2">As per records</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
//           <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
//           <p className="text-gray-500 mt-2">12 Mar 2026</p>
//           <p className="text-green-600 font-medium mt-2">Approved</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
//           <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
//           <p className="text-red-600 font-medium mt-2">Rejected</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function ShiftDetailsPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Shift Name</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">
//             General Shift
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Login Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Logout Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// function OnboardingPage() {
//   const [candidates, setCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//  const fetchData = () => {
//   fetch("http://127.0.0.1:8000/api/app1/list/")
//     .then(res => res.json())
//     .then(data => setCandidates(data.data || data));
// };
//  // 🔥 ADD THIS HERE
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-xl font-bold">Onboarding</h1>

//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Candidate
//           </button>
//         </div>

//         {showModal && (
//           <AddCandidateModal
//             closeModal={() => setShowModal(false)}
//             addCandidate={fetchData}   // ✅ CORRECT

//           />
//         )}

//         <CandidateTable candidates={candidates} />
        
//       </div>
//     </Layout>
//   );
// }
// function LeavePage() {
//   const [activeRole, setActiveRole] = useState("user");

//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       userName: "Geetha",
//       userId: "EMP001",
//       department: "IT",
//       leaveType: "Sick Leave",
//       fromDate: "2026-03-20",
//       toDate: "2026-03-21",
//       reason: "Fever and rest",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       userName: "Anjali",
//       userId: "EMP002",
//       department: "HR",
//       leaveType: "Casual Leave",
//       fromDate: "2026-03-25",
//       toDate: "2026-03-26",
//       reason: "Family function",
//       status: "Approved",
//     },
//   ]);

//   const addRequest = (newRequest) => {
//     setRequests((prev) => [newRequest, ...prev]);
//   };

//   const updateRequestStatus = (id, status) => {
//     setRequests((prev) =>
//       prev.map((request) =>
//         request.id === id ? { ...request, status } : request
//       )
//     );
//   };

//   return (
//     <Layout>
//       <div className="space-y-6">
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
//           <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>
//           <p className="text-gray-500 mt-2">
//             user can apply for leave and HR can approve or reject leave requests.
//           </p>
//         </div>

//         <RoleCards activeRole={activeRole} setActiveRole={setActiveRole} />

//         {activeRole === "user" && (
//           <>
//             <EmployeeRequestForm onAddRequest={addRequest} />
//             <EmployeeRequestsTable requests={requests} />
//           </>
//         )}

//         {activeRole === "hr" && (
//           <HrApprovalTable
//             requests={requests}
//             onUpdateStatus={updateRequestStatus}
//           />
//         )}
//       </div>
//     </Layout>
//   );
// }

// function AttendancePage() {
//   const navigate = useNavigate();

//   return (
//     <Layout>
//       <div>
//         <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Attendance Dashboard
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage check-in, check-out and attendance tracker
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             onClick={() => navigate("/attendance/check-in")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Login (Check-In)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Start your work day by marking attendance
//             </p>
//             <div className="mt-6 text-green-600 font-semibold">
//               Go to Check-In →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/check-out")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Logout (Check-Out)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               End your work day and submit summary
//             </p>
//             <div className="mt-6 text-red-600 font-semibold">
//               Go to Check-Out →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/tracker")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Attendance Tracker
//             </h2>
//             <p className="text-gray-500 mt-3">
//               View attendance timeline and reports
//             </p>
//             <div className="mt-6 text-blue-600 font-semibold">
//               View Tracker →
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function CheckInPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLastLoginName(name);
//     setSubmitted(true);
//     setName("");
//     setNotes("");
//     setTimeout(() => setSubmitted(false), 2500);
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-green-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Login (Check-In)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Notes</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work plan..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-green-600 text-xl font-semibold mb-2">
//                 Check-In Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function CheckOutPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLastLoginName(name);
//     setSubmitted(true);
//     setName("");
//     setSummary("");
//     setTimeout(() => setSubmitted(false), 2500);
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-red-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Logout (Check-Out)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 Work Summary
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work summary..."
//                 value={summary}
//                 onChange={(e) => setSummary(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-red-600 text-xl font-semibold mb-2">
//                 Check-Out Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
//                 <span className="text-red-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function TrackerPage() {
//   const SHIFT_START = 9;
//   const SHIFT_END = 20;

//   const [data] = useState([
//     {
//       date: "2026-03-16",
//       day: "Mon",
//       checkIn: "09:15",
//       checkOut: "18:45",
//       status: "Present",
//     },
//     {
//       date: "2026-03-17",
//       day: "Tue",
//       checkIn: null,
//       checkOut: null,
//       status: "Absent",
//     },
//     {
//       date: "2026-03-18",
//       day: "Wed",
//       checkIn: null,
//       checkOut: null,
//       status: "Absent",
//     },
//     {
//       date: "2026-03-19",
//       day: "Thu",
//       checkIn: "09:45",
//       checkOut: "20:00",
//       status: "Present",
//     },
//     {
//       date: "2026-03-20",
//       day: "Fri",
//       checkIn: "09:45",
//       checkOut: "17:30",
//       status: "Holiday",
//     },
//     {
//       date: "2026-03-21",
//       day: "Sat",
//       checkIn: "10:15",
//       checkOut: "14:00",
//       status: "Present",
//     },
//     {
//       date: "2026-03-22",
//       day: "Sun",
//       checkIn: null,
//       checkOut: null,
//       status: "Holiday",
//     },
//   ]);

//   const getPosition = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     const total = h * 60 + m - SHIFT_START * 60;
//     const range = (SHIFT_END - SHIFT_START) * 60;
//     return (total / range) * 100;
//   };

//   const getHours = (inTime, outTime) => {
//     if (!inTime || !outTime) return 0;
//     const [h1, m1] = inTime.split(":").map(Number);
//     const [h2, m2] = outTime.split(":").map(Number);
//     return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
//   };

//   return (
//     <Layout>
//       <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Attendance Tracker
//         </h2>

//         <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
//           <span>9 AM</span>
//           <span>11 AM</span>
//           <span>1 PM</span>
//           <span>3 PM</span>
//           <span>5 PM</span>
//           <span>7 PM</span>
//           <span>8 PM</span>
//         </div>

//         {data.map((item, i) => {
//           const start = getPosition(item.checkIn);
//           const end = getPosition(item.checkOut);
//           const hours = getHours(item.checkIn, item.checkOut);

//           return (
//             <div key={i} className="flex items-center mb-5 min-w-[700px]">
//               <div className="w-24">
//                 <p className="text-sm font-medium text-gray-700">{item.day}</p>
//                 <p className="text-xs text-gray-400">{item.date}</p>
//               </div>

//               <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
//                 <div className="absolute inset-0 flex justify-between">
//                   {Array.from({ length: 7 }).map((_, idx) => (
//                     <div key={idx} className="w-px bg-gray-200"></div>
//                   ))}
//                 </div>

//                 {item.status === "Present" && (
//                   <div
//                     className="absolute h-3 bg-green-500 rounded"
//                     style={{
//                       left: `${start}%`,
//                       width: `${end - start}%`,
//                     }}
//                   ></div>
//                 )}

//                 {item.status === "Absent" && (
//                   <div className="absolute inset-0 bg-red-100 flex items-center justify-center text-[10px] text-red-500 rounded">
//                     Absent
//                   </div>
//                 )}

//                 {item.status === "Holiday" && (
//                   <div className="absolute inset-0 bg-yellow-100 flex items-center justify-center text-[10px] text-yellow-600 rounded">
//                     Holiday
//                   </div>
//                 )}
//               </div>

//               <div className="w-36 text-right">
//                 <p
//                   className={`text-sm font-medium ${
//                     item.status === "Present"
//                       ? "text-green-600"
//                       : item.status === "Absent"
//                       ? "text-red-500"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {item.status}
//                 </p>

//                 {item.checkIn && item.checkOut && (
//                   <>
//                     <p className="text-xs text-gray-400">
//                       {item.checkIn} - {item.checkOut}
//                     </p>
//                     <p className="text-xs text-gray-600 font-medium">
//                       {hours} hrs
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// export default function Home() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/leave-balance" element={<LeaveBalancePage />} />
//         <Route path="/pending-requests" element={<PendingRequestsPage />} />
//         <Route path="/present-days" element={<PresentDaysPage />} />
//         <Route path="/absent-days" element={<AbsentDaysPage />} />
//         <Route path="/leave-requests" element={<LeaveRequestsPage />} />
//         <Route path="/shift-details" element={<ShiftDetailsPage />} />
//         <Route path="/onboarding" element={<OnboardingPage />} />
//         <Route path="/leave" element={<LeavePage />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/attendance/check-in" element={<CheckInPage />} />
//         <Route path="/attendance/check-out" element={<CheckOutPage />} />
//         <Route path="/attendance/tracker" element={<TrackerPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }




// import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import RoleCards from "./RoleCards";
// import EmployeeRequestForm from "./EmployeeRequestForm";
// import EmployeeRequestsTable from "./EmployeeRequestsTable";
// import HrApprovalTable from "./HrApprovalTable";
// import AddCandidateModal from "./AddCandidateModal";
// import CandidateTable from "./CandidateTable";

// function Layout({ title, children }) {
//   return (
//     <div className="flex min-h-screen bg-[#f4f7fb]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <div className="p-4 md:p-6">
//           <Navbar />
//           <main className="mt-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();

//   const user = {
//     name: "Geetha",
//     role: "HR Executive",
//     department: "Human Resources",
//     userId: "EMP001",
//   };

//   const hour = new Date().getHours();
//   let greeting = "Hello";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 18) greeting = "Good Afternoon";
//   else greeting = "Good Evening";

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   const companySchedule = [
//     {
//       day: "Monday",
//       short: "Mon",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Tuesday",
//       short: "Tue",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Wednesday",
//       short: "Wed",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Thursday",
//       short: "Thu",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Friday",
//       short: "Fri",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Saturday",
//       short: "Sat",
//       time: "09:00 AM - 01:00 PM",
//       status: "Half Day",
//       badge: "bg-yellow-100 text-yellow-700",
//       card: "bg-yellow-50 border-yellow-200",
//     },
//     {
//       day: "Sunday",
//       short: "Sun",
//       time: "Week Off",
//       status: "Holiday",
//       badge: "bg-red-100 text-red-700",
//       card: "bg-red-50 border-red-200",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {greeting}, {user.name}
//             </h1>
//             <p className="text-gray-500 mt-2 text-lg">
//               {user.role} • {user.department}
//             </p>
//             <p className="text-gray-400 mt-2">{today}</p>
//           </div>

//           <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
//             <p className="text-sm text-blue-600 font-medium">user ID</p>
//             <h2 className="text-2xl font-bold text-blue-800 mt-1">
//               {user.userId}
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Company Work Schedule
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Standard weekly shift timing for users
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <div className="bg-blue-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-blue-600 font-medium">Shift</p>
//               <p className="text-sm font-semibold text-blue-800">
//                 General Shift
//               </p>
//             </div>
//             <div className="bg-purple-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-purple-600 font-medium">Hours</p>
//               <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Working Days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Half Day</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Weekly Off</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
//           {companySchedule.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border p-4 ${item.card}`}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-gray-700">
//                   {item.short}
//                 </p>
//                 <span
//                   className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">{item.day}</p>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-800 leading-5">
//                   {item.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//         <div
//           onClick={() => navigate("/leave-balance")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Leave Balance</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Available this year</p>
//         </div>

//         <div
//           onClick={() => navigate("/pending-requests")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Pending Requests</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2>
//           <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
//         </div>

//         <div
//           onClick={() => navigate("/present-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Present Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>

//         <div
//           onClick={() => navigate("/absent-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Absent Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
//         <p className="text-gray-500 mt-1">
//           Access your frequently used HR actions quickly.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//           <div
//             onClick={() => navigate("/leave")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Submit a leave request quickly
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/attendance")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               View Attendance
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Check daily and monthly attendance
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/leave-requests")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Leave Requests
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               View applied leave requests status
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/shift-details")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Shift Details
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               See your work shift and timings
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveBalancePage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Casual Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Sick Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Earned Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PendingRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Casual Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Sick Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Permission Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PresentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Present</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Attendance Percentage</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
//           <p className="text-sm text-gray-400 mt-2">Current month</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function AbsentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Reason</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
//           <p className="text-sm text-gray-400 mt-2">As per records</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
//           <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
//           <p className="text-gray-500 mt-2">12 Mar 2026</p>
//           <p className="text-green-600 font-medium mt-2">Approved</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
//           <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
//           <p className="text-red-600 font-medium mt-2">Rejected</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function ShiftDetailsPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Shift Name</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">
//             General Shift
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Login Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Logout Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// function OnboardingPage() {
//   const [candidates, setCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//  const fetchData = () => {
//   fetch("http://127.0.0.1:8000/api/app1/list/")
//     .then(res => res.json())
//     .then(data => setCandidates(data.data || data));
// };
//  // 🔥 ADD THIS HERE
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-xl font-bold">Onboarding</h1>

//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Candidate
//           </button>
//         </div>

//         {showModal && (
//           <AddCandidateModal
//             closeModal={() => setShowModal(false)}
//             addCandidate={fetchData}   // ✅ CORRECT

//           />
//         )}

//         <CandidateTable candidates={candidates} />
        
//       </div>
//     </Layout>
//   );
// }
// function LeavePage() {
//   const [requests, setRequests] = useState([]);

// const addRequest = (newRequest) => {
//   setRequests((prev) => [newRequest, ...prev]);
// };
// return (
//   <Layout>
//     <div className="space-y-6">

//       <div className="bg-white rounded-2xl shadow-sm p-6 border">
//         <h1 className="text-2xl font-bold">Leave Management</h1>
//       </div>

//       <EmployeeRequestForm onAddRequest={addRequest} />
//       <EmployeeRequestsTable requests={requests} />

//     </div>
//   </Layout>
// );
// }


// function AttendancePage() {
//   const navigate = useNavigate();

//   return (
//     <Layout>
//       <div>
//         <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Attendance Dashboard
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage check-in, check-out and attendance tracker
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             onClick={() => navigate("/attendance/check-in")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Login (Check-In)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Start your work day by marking attendance
//             </p>
//             <div className="mt-6 text-green-600 font-semibold">
//               Go to Check-In →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/check-out")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Logout (Check-Out)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               End your work day and submit summary
//             </p>
//             <div className="mt-6 text-red-600 font-semibold">
//               Go to Check-Out →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/tracker")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Attendance Tracker
//             </h2>
//             <p className="text-gray-500 mt-3">
//               View attendance timeline and reports
//             </p>
//             <div className="mt-6 text-blue-600 font-semibold">
//               View Tracker →
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function CheckInPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLastLoginName(name);
//     setSubmitted(true);
//     setName("");
//     setNotes("");
//     setTimeout(() => setSubmitted(false), 2500);
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-green-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Login (Check-In)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Notes</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work plan..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-green-600 text-xl font-semibold mb-2">
//                 Check-In Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function CheckOutPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLastLoginName(name);
//     setSubmitted(true);
//     setName("");
//     setSummary("");
//     setTimeout(() => setSubmitted(false), 2500);
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-red-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Logout (Check-Out)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 Work Summary
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work summary..."
//                 value={summary}
//                 onChange={(e) => setSummary(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-red-600 text-xl font-semibold mb-2">
//                 Check-Out Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
//                 <span className="text-red-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function TrackerPage() {
//   const SHIFT_START = 9;
//   const SHIFT_END = 20;

//   const [data] = useState([
//     {
//       date: "2026-03-16",
//       day: "Mon",
//       checkIn: "09:15",
//       checkOut: "18:45",
//       status: "Present",
//     },
//     {
//       date: "2026-03-17",
//       day: "Tue",
//       checkIn: null,
//       checkOut: null,
//       status: "Absent",
//     },
//     {
//       date: "2026-03-18",
//       day: "Wed",
//       checkIn: null,
//       checkOut: null,
//       status: "Absent",
//     },
//     {
//       date: "2026-03-19",
//       day: "Thu",
//       checkIn: "09:45",
//       checkOut: "20:00",
//       status: "Present",
//     },
//     {
//       date: "2026-03-20",
//       day: "Fri",
//       checkIn: "09:45",
//       checkOut: "17:30",
//       status: "Holiday",
//     },
//     {
//       date: "2026-03-21",
//       day: "Sat",
//       checkIn: "10:15",
//       checkOut: "14:00",
//       status: "Present",
//     },
//     {
//       date: "2026-03-22",
//       day: "Sun",
//       checkIn: null,
//       checkOut: null,
//       status: "Holiday",
//     },
//   ]);

//   const getPosition = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     const total = h * 60 + m - SHIFT_START * 60;
//     const range = (SHIFT_END - SHIFT_START) * 60;
//     return (total / range) * 100;
//   };

//   const getHours = (inTime, outTime) => {
//     if (!inTime || !outTime) return 0;
//     const [h1, m1] = inTime.split(":").map(Number);
//     const [h2, m2] = outTime.split(":").map(Number);
//     return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
//   };

//   return (
//     <Layout>
//       <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Attendance Tracker
//         </h2>

//         <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
//           <span>9 AM</span>
//           <span>11 AM</span>
//           <span>1 PM</span>
//           <span>3 PM</span>
//           <span>5 PM</span>
//           <span>7 PM</span>
//           <span>8 PM</span>
//         </div>

//         {data.map((item, i) => {
//           const start = getPosition(item.checkIn);
//           const end = getPosition(item.checkOut);
//           const hours = getHours(item.checkIn, item.checkOut);

//           return (
//             <div key={i} className="flex items-center mb-5 min-w-[700px]">
//               <div className="w-24">
//                 <p className="text-sm font-medium text-gray-700">{item.day}</p>
//                 <p className="text-xs text-gray-400">{item.date}</p>
//               </div>

//               <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
//                 <div className="absolute inset-0 flex justify-between">
//                   {Array.from({ length: 7 }).map((_, idx) => (
//                     <div key={idx} className="w-px bg-gray-200"></div>
//                   ))}
//                 </div>

//                 {item.status === "Present" && (
//                   <div
//                     className="absolute h-3 bg-green-500 rounded"
//                     style={{
//                       left: `${start}%`,
//                       width: `${end - start}%`,
//                     }}
//                   ></div>
//                 )}

//                 {item.status === "Absent" && (
//                   <div className="absolute inset-0 bg-red-100 flex items-center justify-center text-[10px] text-red-500 rounded">
//                     Absent
//                   </div>
//                 )}

//                 {item.status === "Holiday" && (
//                   <div className="absolute inset-0 bg-yellow-100 flex items-center justify-center text-[10px] text-yellow-600 rounded">
//                     Holiday
//                   </div>
//                 )}
//               </div>

//               <div className="w-36 text-right">
//                 <p
//                   className={`text-sm font-medium ${
//                     item.status === "Present"
//                       ? "text-green-600"
//                       : item.status === "Absent"
//                       ? "text-red-500"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {item.status}
//                 </p>

//                 {item.checkIn && item.checkOut && (
//                   <>
//                     <p className="text-xs text-gray-400">
//                       {item.checkIn} - {item.checkOut}
//                     </p>
//                     <p className="text-xs text-gray-600 font-medium">
//                       {hours} hrs
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// export default function Home() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/leave-balance" element={<LeaveBalancePage />} />
//         <Route path="/pending-requests" element={<PendingRequestsPage />} />
//         <Route path="/present-days" element={<PresentDaysPage />} />
//         <Route path="/absent-days" element={<AbsentDaysPage />} />
//         <Route path="/leave-requests" element={<LeaveRequestsPage />} />
//         <Route path="/shift-details" element={<ShiftDetailsPage />} />
//         <Route path="/onboarding" element={<OnboardingPage />} />
//         <Route path="/leave" element={<LeavePage />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/attendance/check-in" element={<CheckInPage />} />
//         <Route path="/attendance/check-out" element={<CheckOutPage />} />
//         <Route path="/attendance/tracker" element={<TrackerPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }






// import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import RoleCards from "./RoleCards";
// import EmployeeRequestForm from "./EmployeeRequestForm";
// import EmployeeRequestsTable from "./EmployeeRequestsTable";
// import HrApprovalTable from "./HrApprovalTable";
// import AddCandidateModal from "./AddCandidateModal";
// import CandidateTable from "./CandidateTable";

// function Layout({ title, children }) {
//   return (
//     <div className="flex min-h-screen bg-[#f4f7fb]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <div className="p-4 md:p-6">
//           <Navbar />
//           <main className="mt-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();

//   const user = {
//     name: "Geetha",
//     role: "HR Executive",
//     department: "Human Resources",
//     userId: "EMP001",
//   };

//   const hour = new Date().getHours();
//   let greeting = "Hello";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 18) greeting = "Good Afternoon";
//   else greeting = "Good Evening";

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   const companySchedule = [
//     {
//       day: "Monday",
//       short: "Mon",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Tuesday",
//       short: "Tue",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Wednesday",
//       short: "Wed",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Thursday",
//       short: "Thu",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Friday",
//       short: "Fri",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Saturday",
//       short: "Sat",
//       time: "09:00 AM - 01:00 PM",
//       status: "Half Day",
//       badge: "bg-yellow-100 text-yellow-700",
//       card: "bg-yellow-50 border-yellow-200",
//     },
//     {
//       day: "Sunday",
//       short: "Sun",
//       time: "Week Off",
//       status: "Holiday",
//       badge: "bg-red-100 text-red-700",
//       card: "bg-red-50 border-red-200",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {greeting}, {user.name}
//             </h1>
//             <p className="text-gray-500 mt-2 text-lg">
//               {user.role} • {user.department}
//             </p>
//             <p className="text-gray-400 mt-2">{today}</p>
//           </div>

//           <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
//             <p className="text-sm text-blue-600 font-medium">user ID</p>
//             <h2 className="text-2xl font-bold text-blue-800 mt-1">
//               {user.userId}
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Company Work Schedule
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Standard weekly shift timing for users
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <div className="bg-blue-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-blue-600 font-medium">Shift</p>
//               <p className="text-sm font-semibold text-blue-800">
//                 General Shift
//               </p>
//             </div>
//             <div className="bg-purple-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-purple-600 font-medium">Hours</p>
//               <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Working Days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Half Day</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Weekly Off</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
//           {companySchedule.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border p-4 ${item.card}`}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-gray-700">
//                   {item.short}
//                 </p>
//                 <span
//                   className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">{item.day}</p>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-800 leading-5">
//                   {item.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//         <div
//           onClick={() => navigate("/leave-balance")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Leave Balance</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Available this year</p>
//         </div>

//         <div
//           onClick={() => navigate("/pending-requests")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Pending Requests</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2>
//           <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
//         </div>

//         <div
//           onClick={() => navigate("/present-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Present Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>

//         <div
//           onClick={() => navigate("/absent-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Absent Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
//         <p className="text-gray-500 mt-1">
//           Access your frequently used HR actions quickly.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//           <div
//             onClick={() => navigate("/leave")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Submit a leave request quickly
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/attendance")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               View Attendance
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Check daily and monthly attendance
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/leave-requests")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Leave Requests
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               View applied leave requests status
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/shift-details")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Shift Details
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               See your work shift and timings
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveBalancePage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Casual Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Sick Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Earned Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PendingRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Casual Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Sick Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Permission Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PresentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Present</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Attendance Percentage</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
//           <p className="text-sm text-gray-400 mt-2">Current month</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function AbsentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Reason</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
//           <p className="text-sm text-gray-400 mt-2">As per records</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
//           <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
//           <p className="text-gray-500 mt-2">12 Mar 2026</p>
//           <p className="text-green-600 font-medium mt-2">Approved</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
//           <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
//           <p className="text-red-600 font-medium mt-2">Rejected</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function ShiftDetailsPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Shift Name</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">
//             General Shift
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Login Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Logout Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// function OnboardingPage() {
//   const [candidates, setCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//  const fetchData = () => {
//   fetch("http://127.0.0.1:8000/api/app1/list/")
//     .then(res => res.json())
//     .then(data => setCandidates(data.data || data));
// };
//  // 🔥 ADD THIS HERE
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-xl font-bold">Onboarding</h1>

//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Candidate
//           </button>
//         </div>

//         {showModal && (
//           <AddCandidateModal
//             closeModal={() => setShowModal(false)}
//             addCandidate={fetchData}   // ✅ CORRECT

//           />
//         )}

//         <CandidateTable candidates={candidates} />
        
//       </div>
//     </Layout>
//   );
// }
// function LeavePage() {
//   const [requests, setRequests] = useState([]);

// const addRequest = (newRequest) => {
//   setRequests((prev) => [newRequest, ...prev]);
// };
// return (
//   <Layout>
//     <div className="space-y-6">

//       <div className="bg-white rounded-2xl shadow-sm p-6 border">
//         <h1 className="text-2xl font-bold">Leave Management</h1>
//       </div>

//       <EmployeeRequestForm onAddRequest={addRequest} />
//       <EmployeeRequestsTable requests={requests} />

//     </div>
//   </Layout>
// );
// }


// function AttendancePage() {
//   const navigate = useNavigate();

//   return (
//     <Layout>
//       <div>
//         <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Attendance Dashboard
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage check-in, check-out and attendance tracker
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             onClick={() => navigate("/attendance/check-in")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Login (Check-In)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Start your work day by marking attendance
//             </p>
//             <div className="mt-6 text-green-600 font-semibold">
//               Go to Check-In →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/check-out")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Logout (Check-Out)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               End your work day and submit summary
//             </p>
//             <div className="mt-6 text-red-600 font-semibold">
//               Go to Check-Out →
//             </div>
//           </div>

//           <div
//             onClick={() => navigate("/attendance/tracker")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Attendance Tracker
//             </h2>
//             <p className="text-gray-500 mt-3">
//               View attendance timeline and reports
//             </p>
//             <div className="mt-6 text-blue-600 font-semibold">
//               View Tracker →
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function CheckInPage() {
//   const [now, setNow] = useState(new Date());
//   useEffect(() => {
//   const timer = setInterval(() => {
//     setNow(new Date());
//   }, 1000);

//   return () => clearInterval(timer);
// }, []);
  
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkin/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       notes: notes,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setNotes("");

//   setTimeout(() => setSubmitted(false), 2500);
// };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-green-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Login (Check-In)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Notes</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work plan..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-green-600 text-xl font-semibold mb-2">
//                 Check-In Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function CheckOutPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkout/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       summary: summary,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setSummary("");

//   setTimeout(() => setSubmitted(false), 2500);
// };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-red-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Logout (Check-Out)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 Work Summary
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work summary..."
//                 value={summary}
//                 onChange={(e) => setSummary(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-red-600 text-xl font-semibold mb-2">
//                 Check-Out Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
//                 <span className="text-red-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function TrackerPage() {
//   const SHIFT_START = 9;
//   const SHIFT_END = 20;
//     const [data, setData] = useState([]);
//   const [now, setNow] = useState(new Date()); 
  
//   // ✅ STEP 2 ADD HERE
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setNow(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);
//    // 🔥 STEP 1 ADD HERE (API FETCH)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/attendance/attendance/")
//       .then(res => res.json())
//       .then(resData => setData(resData));
//   }, []);

 
  

//   const getPosition = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     const total = h * 60 + m - SHIFT_START * 60;
//     const range = (SHIFT_END - SHIFT_START) * 60;
//     return (total / range) * 100;
//   };

//   const getHours = (inTime, outTime) => {
//     if (!inTime || !outTime) return 0;
//     const [h1, m1] = inTime.split(":").map(Number);
//     const [h2, m2] = outTime.split(":").map(Number);
//     return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
//   };

//   return (
//     <Layout>
//       <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Attendance Tracker
//         </h2>

//         <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
//           <span>9 AM</span>
//           <span>11 AM</span>
//           <span>1 PM</span>
//           <span>3 PM</span>
//           <span>5 PM</span>
//           <span>7 PM</span>
//           <span>8 PM</span>
//         </div>

//         {data.map((item, i) => {
//  const currentTime = now.toTimeString().slice(0, 5);

// const checkIn = item.check_in ? item.check_in.slice(0, 5) : null;
// const checkOut = item.check_out ? item.check_out.slice(0, 5) : null;

// const start = getPosition(checkIn);
// const end = getPosition(checkOut || currentTime);
// const hours = getHours(checkIn, checkOut || currentTime);

// let status = "Absent";
// if (checkIn && !checkOut) status = "Working";
// if (checkIn && checkOut) status = "Completed";


//           return (
//             <div key={i} className="flex items-center mb-5 min-w-[700px]">
//               <div className="w-24">
//                 <p className="text-sm font-medium text-gray-700">{item.day}</p>
//                 <p className="text-xs text-gray-400">{item.date}</p>
//               </div>

//               <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
//  {status === "Working" && (
//   <div
//     className="absolute h-3 bg-blue-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Completed" && (
//   <div
//     className="absolute h-3 bg-green-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Absent" && (
//   <div
//     className="absolute h-3 bg-red-500 rounded"
//     style={{
//       left: "0%",
//       width: "100%",
//     }}
//   ></div>
// )}
//                 <div className="absolute inset-0 flex justify-between">
//                   {Array.from({ length: 7 }).map((_, idx) => (
//                     <div key={idx} className="w-px bg-gray-200"></div>
//                   ))}
//                 </div>

                

               
//               </div>

//               <div className="w-36 text-right">
//                 <p
//                   className={`text-sm font-medium ${
//                     status === "Working"
//                       ? "text-green-600"
//                       : item.status === "Absent"
//                       ? "text-red-500"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {status}
//                 </p>

//                 {checkIn && checkOut && (
//                   <>
//                     <p className="text-xs text-gray-400">
//                       {checkIn} - {checkOut}
//                     </p>
//                     <p className="text-xs text-gray-600 font-medium">
//                       {hours} hrs
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// export default function Home() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/leave-balance" element={<LeaveBalancePage />} />
//         <Route path="/pending-requests" element={<PendingRequestsPage />} />
//         <Route path="/present-days" element={<PresentDaysPage />} />
//         <Route path="/absent-days" element={<AbsentDaysPage />} />
//         <Route path="/leave-requests" element={<LeaveRequestsPage />} />
//         <Route path="/shift-details" element={<ShiftDetailsPage />} />
//         <Route path="/onboarding" element={<OnboardingPage />} />
//         <Route path="/leave" element={<LeavePage />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/attendance/check-in" element={<CheckInPage />} />
//         <Route path="/attendance/check-out" element={<CheckOutPage />} />
//         <Route path="/attendance/tracker" element={<TrackerPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }



// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import RoleCards from "./RoleCards";
// import EmployeeRequestForm from "./EmployeeRequestForm";
// import EmployeeRequestsTable from "./EmployeeRequestsTable";
// import HrApprovalTable from "./HrApprovalTable";
// import AddCandidateModal from "./AddCandidateModal";
// import CandidateTable from "./CandidateTable";

// function Layout({ title, children }) {
//   return (
//     <div className="flex min-h-screen bg-[#f4f7fb]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <div className="p-4 md:p-6">
//           <Navbar />
//           <main className="mt-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();

//   const user = {
//   name: localStorage.getItem("userName") || "User",
//   role: "HR Executive",
//   department: "Human Resources",
//   userId: "EMP001",
// };

//   const hour = new Date().getHours();
//   let greeting = "Hello";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 18) greeting = "Good Afternoon";
//   else greeting = "Good Evening";

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   const companySchedule = [
//     {
//       day: "Monday",
//       short: "Mon",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Tuesday",
//       short: "Tue",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Wednesday",
//       short: "Wed",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Thursday",
//       short: "Thu",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Friday",
//       short: "Fri",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Saturday",
//       short: "Sat",
//       time: "09:00 AM - 01:00 PM",
//       status: "Half Day",
//       badge: "bg-yellow-100 text-yellow-700",
//       card: "bg-yellow-50 border-yellow-200",
//     },
//     {
//       day: "Sunday",
//       short: "Sun",
//       time: "Week Off",
//       status: "Holiday",
//       badge: "bg-red-100 text-red-700",
//       card: "bg-red-50 border-red-200",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {greeting}, {user.name}
//             </h1>
//             <p className="text-gray-500 mt-2 text-lg">
//               {user.role} • {user.department}
//             </p>
//             <p className="text-gray-400 mt-2">{today}</p>
//           </div>

//           <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
//             <p className="text-sm text-blue-600 font-medium">user ID</p>
//             <h2 className="text-2xl font-bold text-blue-800 mt-1">
//               {user.userId}
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Company Work Schedule
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Standard weekly shift timing for users
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <div className="bg-blue-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-blue-600 font-medium">Shift</p>
//               <p className="text-sm font-semibold text-blue-800">
//                 General Shift
//               </p>
//             </div>
//             <div className="bg-purple-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-purple-600 font-medium">Hours</p>
//               <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Working Days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Half Day</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Weekly Off</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
//           {companySchedule.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border p-4 ${item.card}`}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-gray-700">
//                   {item.short}
//                 </p>
//                 <span
//                   className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">{item.day}</p>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-800 leading-5">
//                   {item.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//         <div
//           onClick={() => navigate("/home/leave-balance")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Leave Balance</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Available this year</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/pending-requests")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Pending Requests</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2>
//           <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/present-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Present Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/absent-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Absent Days</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
//         <p className="text-gray-500 mt-1">
//           Access your frequently used HR actions quickly.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//           <div
//             onClick={() => navigate("/home/leave")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Submit a leave request quickly
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/attendance")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               View Attendance
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Check daily and monthly attendance
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/leave-requests")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Leave Requests
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               View applied leave requests status
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/shift-details")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Shift Details
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               See your work shift and timings
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveBalancePage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Casual Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Sick Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Earned Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PendingRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Casual Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Sick Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Permission Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PresentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Present</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Attendance Percentage</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
//           <p className="text-sm text-gray-400 mt-2">Current month</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function AbsentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Reason</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
//           <p className="text-sm text-gray-400 mt-2">As per records</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
//           <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
//           <p className="text-gray-500 mt-2">12 Mar 2026</p>
//           <p className="text-green-600 font-medium mt-2">Approved</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
//           <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
//           <p className="text-red-600 font-medium mt-2">Rejected</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function ShiftDetailsPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Shift Name</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">
//             General Shift
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Login Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Logout Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// function OnboardingPage() {
//   const [candidates, setCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//  const fetchData = () => {
//   fetch("http://127.0.0.1:8000/api/app1/list/")
//     .then(res => res.json())
//     .then(data => setCandidates(data.data || data));
// };
//  // 🔥 ADD THIS HERE
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-xl font-bold">Onboarding</h1>

//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Candidate
//           </button>
//         </div>

//         {showModal && (
//           <AddCandidateModal
//             closeModal={() => setShowModal(false)}
//             addCandidate={fetchData}   // ✅ CORRECT

//           />
//         )}

//         <CandidateTable candidates={candidates} />
        
//       </div>
//     </Layout>
//   );
// }
// function LeavePage() {
//   const [requests, setRequests] = useState([]);

// const addRequest = (newRequest) => {
//   setRequests((prev) => [newRequest, ...prev]);
// };
// return (
//   <Layout>
//     <div className="space-y-6">

//       <div className="bg-white rounded-2xl shadow-sm p-6 border">
//         <h1 className="text-2xl font-bold">Leave Management</h1>
//       </div>

//       <EmployeeRequestForm onAddRequest={addRequest} />
//       <EmployeeRequestsTable requests={requests} />

//     </div>
//   </Layout>
// );
// }


// function AttendancePage() {
//   const navigate = useNavigate();

//   return (
//     <Layout>
//       <div>
//         <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Attendance Dashboard
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage check-in, check-out and attendance tracker
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             // onClick={() => navigate("/attendance/check-in")}
//             onClick={() => navigate("/home/attendance/check-in")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Login (Check-In)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Start your work day by marking attendance
//             </p>
//             <div className="mt-6 text-green-600 font-semibold">
//               Go to Check-In →
//             </div>
//           </div>

//           <div
//             // onClick={() => navigate("/attendance/check-out")}
//             onClick={() => navigate("/home/attendance/check-out")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Logout (Check-Out)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               End your work day and submit summary
//             </p>
//             <div className="mt-6 text-red-600 font-semibold">
//               Go to Check-Out →
//             </div>
//           </div>

//           <div
//             // onClick={() => navigate("/attendance/tracker")}
//             onClick={() => navigate("/home/attendance/tracker")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Attendance Tracker
//             </h2>
//             <p className="text-gray-500 mt-3">
//               View attendance timeline and reports
//             </p>
//             <div className="mt-6 text-blue-600 font-semibold">
//               View Tracker →
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function CheckInPage() {
//   const [now, setNow] = useState(new Date());
//   useEffect(() => {
//   const timer = setInterval(() => {
//     setNow(new Date());
//   }, 1000);

//   return () => clearInterval(timer);
// }, []);
  
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkin/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       notes: notes,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setNotes("");

//   setTimeout(() => setSubmitted(false), 2500);
// };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-green-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Login (Check-In)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Notes</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work plan..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-green-600 text-xl font-semibold mb-2">
//                 Check-In Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function CheckOutPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkout/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       summary: summary,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setSummary("");

//   setTimeout(() => setSubmitted(false), 2500);
// };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-red-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Logout (Check-Out)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 Work Summary
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work summary..."
//                 value={summary}
//                 onChange={(e) => setSummary(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-red-600 text-xl font-semibold mb-2">
//                 Check-Out Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
//                 <span className="text-red-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function TrackerPage() {
//   const SHIFT_START = 9;
//   const SHIFT_END = 20;
//     const [data, setData] = useState([]);
//   const [now, setNow] = useState(new Date()); 
  
//   // ✅ STEP 2 ADD HERE
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setNow(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);
//    // 🔥 STEP 1 ADD HERE (API FETCH)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/attendance/attendance/")
//       .then(res => res.json())
//       .then(resData => setData(resData));
//   }, []);

 
  

//   const getPosition = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     const total = h * 60 + m - SHIFT_START * 60;
//     const range = (SHIFT_END - SHIFT_START) * 60;
//     return (total / range) * 100;
//   };

//   const getHours = (inTime, outTime) => {
//     if (!inTime || !outTime) return 0;
//     const [h1, m1] = inTime.split(":").map(Number);
//     const [h2, m2] = outTime.split(":").map(Number);
//     return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
//   };

//   return (
//     <Layout>
//       <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Attendance Tracker
//         </h2>

//         <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
//           <span>9 AM</span>
//           <span>11 AM</span>
//           <span>1 PM</span>
//           <span>3 PM</span>
//           <span>5 PM</span>
//           <span>7 PM</span>
//           <span>8 PM</span>
//         </div>

//         {data.map((item, i) => {
//  const currentTime = now.toTimeString().slice(0, 5);

// const checkIn = item.check_in ? item.check_in.slice(0, 5) : null;
// const checkOut = item.check_out ? item.check_out.slice(0, 5) : null;

// const start = getPosition(checkIn);
// const end = getPosition(checkOut || currentTime);
// const hours = getHours(checkIn, checkOut || currentTime);

// let status = "Absent";
// if (checkIn && !checkOut) status = "Working";
// if (checkIn && checkOut) status = "Completed";


//           return (
//             <div key={i} className="flex items-center mb-5 min-w-[700px]">
//               <div className="w-24">
//                 <p className="text-sm font-medium text-gray-700">{item.day}</p>
//                 <p className="text-xs text-gray-400">{item.date}</p>
//               </div>

//               <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
//  {status === "Working" && (
//   <div
//     className="absolute h-3 bg-blue-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Completed" && (
//   <div
//     className="absolute h-3 bg-green-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Absent" && (
//   <div
//     className="absolute h-3 bg-red-500 rounded"
//     style={{
//       left: "0%",
//       width: "100%",
//     }}
//   ></div>
// )}
//                 <div className="absolute inset-0 flex justify-between">
//                   {Array.from({ length: 7 }).map((_, idx) => (
//                     <div key={idx} className="w-px bg-gray-200"></div>
//                   ))}
//                 </div>

                

               
//               </div>

//               <div className="w-36 text-right">
//                 <p
//                   className={`text-sm font-medium ${
//                     status === "Working"
//                       ? "text-green-600"
//                       : item.status === "Absent"
//                       ? "text-red-500"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {status}
//                 </p>

//                 {checkIn && checkOut && (
//                   <>
//                     <p className="text-xs text-gray-400">
//                       {checkIn} - {checkOut}
//                     </p>
//                     <p className="text-xs text-gray-600 font-medium">
//                       {hours} hrs
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// export default function Home() {
//   return (
    
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/leave-balance" element={<LeaveBalancePage />} />
//         <Route path="/pending-requests" element={<PendingRequestsPage />} />
//         <Route path="/present-days" element={<PresentDaysPage />} />
//         <Route path="/absent-days" element={<AbsentDaysPage />} />
//         <Route path="/leave-requests" element={<LeaveRequestsPage />} />
//         <Route path="/shift-details" element={<ShiftDetailsPage />} />
//         <Route path="/onboarding" element={<OnboardingPage />} />
//         <Route path="/leave" element={<LeavePage />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/attendance/check-in" element={<CheckInPage />} />
//         <Route path="/attendance/check-out" element={<CheckOutPage />} />
//         <Route path="/attendance/tracker" element={<TrackerPage />} />
//       </Routes>
    
//   );
// }




// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import RoleCards from "./RoleCards";
// import EmployeeRequestForm from "./EmployeeRequestForm";
// import EmployeeRequestsTable from "./EmployeeRequestsTable";
// import HrApprovalTable from "./HrApprovalTable";
// import AddCandidateModal from "./AddCandidateModal";
// import CandidateTable from "./CandidateTable";
// import ApproveLeave from "./ApproveLeave";

// function Layout({ title, children }) {
//   return (
//     <div className="flex min-h-screen bg-[#f4f7fb]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <div className="p-4 md:p-6">
//           <Navbar />
//           <main className="mt-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();

//   const user = {
//   name: localStorage.getItem("userName") || "User",
//   role: "HR Executive",
//   department: "Human Resources",
//   userId: "EMP001",
// };
// // ✅ STEP 1
//   const [dashboard, setDashboard] = useState({});

//   // ✅ STEP 1 (API CALL)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/app1/dashboard/")
//       .then(res => res.json())
//       .then(data => setDashboard(data));
//   }, []);

//   const hour = new Date().getHours();
//   let greeting = "Hello";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 18) greeting = "Good Afternoon";
//   else greeting = "Good Evening";

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   const companySchedule = [
//     {
//       day: "Monday",
//       short: "Mon",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Tuesday",
//       short: "Tue",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Wednesday",
//       short: "Wed",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Thursday",
//       short: "Thu",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Friday",
//       short: "Fri",
//       time: "09:00 AM - 06:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Saturday",
//       short: "Sat",
//       time: "09:00 AM - 01:00 PM",
//       status: "working day",
//        badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Sunday",
//       short: "Sun",
//       time: "Week Off",
//       status: "Holiday",
//       badge: "bg-red-100 text-red-700",
//       card: "bg-red-50 border-red-200",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {greeting}, {user.name}
//             </h1>
//             <p className="text-gray-500 mt-2 text-lg">
//               {user.role} • {user.department}
//             </p>
//             <p className="text-gray-400 mt-2">{today}</p>
//           </div>

//           <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
//             <p className="text-sm text-blue-600 font-medium">user ID</p>
//             <h2 className="text-2xl font-bold text-blue-800 mt-1">
//               {user.userId}
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Company Work Schedule
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Standard weekly shift timing for users
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <div className="bg-blue-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-blue-600 font-medium">Shift</p>
//               <p className="text-sm font-semibold text-blue-800">
//                 General Shift
//               </p>
//             </div>
//             <div className="bg-purple-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-purple-600 font-medium">Hours</p>
//               <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Working Days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">working days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Weekly Off</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
//           {companySchedule.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border p-4 ${item.card}`}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-gray-700">
//                   {item.short}
//                 </p>
//                 <span
//                   className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">{item.day}</p>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-800 leading-5">
//                   {item.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//         <div
//           onClick={() => navigate("/home/leave-balance")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Leave Balance</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.leave_balance || 20}
// </h2>

//           <p className="text-sm text-gray-400 mt-2">Available this year</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/pending-requests")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Pending Requests</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.pending_requests || 0}
// </h2>
//           <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/present-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Present Days</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.present_days || 0}
// </h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/absent-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Absent Days</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.absent_days || 0}
// </h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
//         <p className="text-gray-500 mt-1">
//           Access your frequently used HR actions quickly.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//           <div
//             onClick={() => navigate("/home/leave")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Submit a leave request quickly
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/attendance")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               View Attendance
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Check daily and monthly attendance
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/leave-requests")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Leave Requests
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               View applied leave requests status
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/shift-details")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Shift Details
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               See your work shift and timings
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveBalancePage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Casual Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Sick Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Earned Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PendingRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Casual Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Sick Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Permission Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PresentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Present</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Attendance Percentage</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
//           <p className="text-sm text-gray-400 mt-2">Current month</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function AbsentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Reason</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
//           <p className="text-sm text-gray-400 mt-2">As per records</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
//           <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
//           <p className="text-gray-500 mt-2">12 Mar 2026</p>
//           <p className="text-green-600 font-medium mt-2">Approved</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
//           <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
//           <p className="text-red-600 font-medium mt-2">Rejected</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function ShiftDetailsPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Shift Name</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">
//             General Shift
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Login Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Logout Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// function OnboardingPage() {
//   const [candidates, setCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//  const fetchData = () => {
//   fetch("http://127.0.0.1:8000/api/app1/list/")
//     .then(res => res.json())
//     .then(data => setCandidates(data.data || data));
// };
//  // 🔥 ADD THIS HERE
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-xl font-bold">Onboarding</h1>

//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Candidate
//           </button>
//         </div>

//         {showModal && (
//           <AddCandidateModal
//             closeModal={() => setShowModal(false)}
//             addCandidate={fetchData}   // ✅ CORRECT

//           />
//         )}

//         <CandidateTable candidates={candidates} />
        
//       </div>
//     </Layout>
//   );
// }
// function LeavePage() {
//   const [requests, setRequests] = useState([]);

// const addRequest = (newRequest) => {
//   setRequests((prev) => [newRequest, ...prev]);
// };
// return (
//   <Layout>
//     <div className="space-y-6">

//       <div className="bg-white rounded-2xl shadow-sm p-6 border">
//         <h1 className="text-2xl font-bold">Leave Management</h1>
//       </div>

//       <EmployeeRequestForm onAddRequest={addRequest} />
//       <EmployeeRequestsTable requests={requests} />

//     </div>
//   </Layout>
// );
// }


// function AttendancePage() {
//   const navigate = useNavigate();

//   return (
//     <Layout>
//       <div>
//         <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Attendance Dashboard
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage check-in, check-out and attendance tracker
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             // onClick={() => navigate("/attendance/check-in")}
//             onClick={() => navigate("/home/attendance/check-in")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Login (Check-In)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Start your work day by marking attendance
//             </p>
//             <div className="mt-6 text-green-600 font-semibold">
//               Go to Check-In →
//             </div>
//           </div>

//           <div
//             // onClick={() => navigate("/attendance/check-out")}
//             onClick={() => navigate("/home/attendance/check-out")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Logout (Check-Out)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               End your work day and submit summary
//             </p>
//             <div className="mt-6 text-red-600 font-semibold">
//               Go to Check-Out →
//             </div>
//           </div>

//           <div
//             // onClick={() => navigate("/attendance/tracker")}
//             onClick={() => navigate("/home/attendance/tracker")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Attendance Tracker
//             </h2>
//             <p className="text-gray-500 mt-3">
//               View attendance timeline and reports
//             </p>
//             <div className="mt-6 text-blue-600 font-semibold">
//               View Tracker →
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function CheckInPage() {
//   const [now, setNow] = useState(new Date());
//   useEffect(() => {
//   const timer = setInterval(() => {
//     setNow(new Date());
//   }, 1000);

//   return () => clearInterval(timer);
// }, []);
  
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const navigate = useNavigate();
 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkin/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       notes: notes,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setNotes("");

//   // setTimeout(() => setSubmitted(false), 2500);
//    setTimeout(() => {
//     navigate("/home");   // ✅ redirect after check-in
//   }, 1000);
// };


//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-green-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Login (Check-In)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Notes</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work plan..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-green-600 text-xl font-semibold mb-2">
//                 Check-In Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function CheckOutPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkout/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       summary: summary,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setSummary("");

//   setTimeout(() => setSubmitted(false), 2500);
// };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-red-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Logout (Check-Out)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 Work Summary
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work summary..."
//                 value={summary}
//                 onChange={(e) => setSummary(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-red-600 text-xl font-semibold mb-2">
//                 Check-Out Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
//                 <span className="text-red-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function TrackerPage() {
//   const SHIFT_START = 9;
//   const SHIFT_END = 20;
//     const [data, setData] = useState([]);
//   const [now, setNow] = useState(new Date()); 
  
//   // ✅ STEP 2 ADD HERE
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setNow(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);
//    // 🔥 STEP 1 ADD HERE (API FETCH)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/attendance/attendance/")
//       .then(res => res.json())
//       .then(resData => setData(resData));
//   }, []);

 
  

//   const getPosition = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     const total = h * 60 + m - SHIFT_START * 60;
//     const range = (SHIFT_END - SHIFT_START) * 60;
//     return (total / range) * 100;
//   };

//   const getHours = (inTime, outTime) => {
//     if (!inTime || !outTime) return 0;
//     const [h1, m1] = inTime.split(":").map(Number);
//     const [h2, m2] = outTime.split(":").map(Number);
//     return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
//   };

//   return (
//     <Layout>
//       <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Attendance Tracker
//         </h2>

//         <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
//           <span>9 AM</span>
//           <span>11 AM</span>
//           <span>1 PM</span>
//           <span>3 PM</span>
//           <span>5 PM</span>
//           <span>7 PM</span>
//           <span>8 PM</span>
//         </div>

//         {data.map((item, i) => {
//  const currentTime = now.toTimeString().slice(0, 5);

// const checkIn = item.check_in ? item.check_in.slice(0, 5) : null;
// const checkOut = item.check_out ? item.check_out.slice(0, 5) : null;

// const start = getPosition(checkIn);
// const end = getPosition(checkOut || currentTime);
// const hours = getHours(checkIn, checkOut || currentTime);

// let status = "Absent";
// if (checkIn && !checkOut) status = "Working";
// if (checkIn && checkOut) status = "Completed";


//           return (
//             <div key={i} className="flex items-center mb-5 min-w-[700px]">
//               <div className="w-24">
//                 <p className="text-sm font-medium text-gray-700">{item.day}</p>
//                 <p className="text-xs text-gray-400">{item.date}</p>
//               </div>

//               <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
//  {status === "Working" && (
//   <div
//     className="absolute h-3 bg-blue-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Completed" && (
//   <div
//     className="absolute h-3 bg-green-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Absent" && (
//   <div
//     className="absolute h-3 bg-red-500 rounded"
//     style={{
//       left: "0%",
//       width: "100%",
//     }}
//   ></div>
// )}
//                 <div className="absolute inset-0 flex justify-between">
//                   {Array.from({ length: 7 }).map((_, idx) => (
//                     <div key={idx} className="w-px bg-gray-200"></div>
//                   ))}
//                 </div>

                

               
//               </div>

//               <div className="w-36 text-right">
//                 <p
//                   className={`text-sm font-medium ${
//                     status === "Working"
//                       ? "text-green-600"
//                       : item.status === "Absent"
//                       ? "text-red-500"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {status}
//                 </p>

//                 {checkIn && checkOut && (
//                   <>
//                     <p className="text-xs text-gray-400">
//                       {checkIn} - {checkOut}
//                     </p>
//                     <p className="text-xs text-gray-600 font-medium">
//                       {hours} hrs
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// export default function Home() {
//   return (
    
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/leave-balance" element={<LeaveBalancePage />} />
//         <Route path="/pending-requests" element={<PendingRequestsPage />} />
//         <Route path="/present-days" element={<PresentDaysPage />} />
//         <Route path="/absent-days" element={<AbsentDaysPage />} />
//         <Route path="/leave-requests" element={<LeaveRequestsPage />} />
//         <Route path="/shift-details" element={<ShiftDetailsPage />} />
//         <Route path="/onboarding" element={<OnboardingPage />} />
//         <Route path="/leave" element={<LeavePage />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/attendance/check-in" element={<CheckInPage />} />
//         <Route path="/attendance/check-out" element={<CheckOutPage />} />
//         <Route path="/attendance/tracker" element={<TrackerPage />} />
//         <Route path="/leaveapprove" element={< ApproveLeave />} />        
//       </Routes>
    
//   );
// }






// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import RoleCards from "./RoleCards";
// import EmployeeRequestForm from "./EmployeeRequestForm";
// import EmployeeRequestsTable from "./EmployeeRequestsTable";
// import HrApprovalTable from "./HrApprovalTable";
// import AddCandidateModal from "./AddCandidateModal";
// import CandidateTable from "./CandidateTable";
// import ApproveLeave from "./ApproveLeave";

// function Layout({ title, children }) {
//   return (
//     <div className="flex min-h-screen bg-[#f4f7fb]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <div className="p-4 md:p-6">
//           <Navbar />
//           <main className="mt-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();

//   const user = {
//   name: localStorage.getItem("userName") || "User",
//   role: "HR Executive",
//   department: "Human Resources",
//   userId: "EMP001",
// };
// // ✅ STEP 1
//   const [dashboard, setDashboard] = useState({});

//   // ✅ STEP 1 (API CALL)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/app1/dashboard/")
//       .then(res => res.json())
//       .then(data => setDashboard(data));
//   }, []);

//   const hour = new Date().getHours();
//   let greeting = "Hello";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 18) greeting = "Good Afternoon";
//   else greeting = "Good Evening";

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   const companySchedule = [
//     {
//       day: "Monday",
//       short: "Mon",
//       time: "10:00 AM - 07:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Tuesday",
//       short: "Tue",
//       time: "10:00 AM - 07:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Wednesday",
//       short: "Wed",
//       time: "10:00 AM - 07:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Thursday",
//       short: "Thu",
//       time: "10:00 AM - 07:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Friday",
//       short: "Fri",
//       time: "10:00 AM - 07:00 PM",
//       status: "Working Day",
//       badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Saturday",
//       short: "Sat",
//       time: "10:00 AM - 07:00 PM",
//       status: "working day",
//        badge: "bg-green-100 text-green-700",
//       card: "bg-green-50 border-green-200",
//     },
//     {
//       day: "Sunday",
//       short: "Sun",
//       time: "Week Off",
//       status: "Holiday",
//       badge: "bg-red-100 text-red-700",
//       card: "bg-red-50 border-red-200",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {greeting}, {user.name}
//             </h1>
//             <p className="text-gray-500 mt-2 text-lg">
//               {user.role} • {user.department}
//             </p>
//             <p className="text-gray-400 mt-2">{today}</p>
//           </div>

//           <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
//             <p className="text-sm text-blue-600 font-medium">user ID</p>
//             <h2 className="text-2xl font-bold text-blue-800 mt-1">
//               {user.userId}
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Company Work Schedule
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Standard weekly shift timing for users
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <div className="bg-blue-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-blue-600 font-medium">Shift</p>
//               <p className="text-sm font-semibold text-blue-800">
//                 General Shift
//               </p>
//             </div>
//             <div className="bg-purple-50 px-4 py-2 rounded-xl">
//               <p className="text-xs text-purple-600 font-medium">Hours</p>
//               <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Working Days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">working days</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
//           </div>

//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
//             <p className="text-sm text-gray-500">Weekly Off</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
//           {companySchedule.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl border p-4 ${item.card}`}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-gray-700">
//                   {item.short}
//                 </p>
//                 <span
//                   className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
//                 >
//                   {item.status}
//                 </span>
//               </div>

//               <p className="text-xs text-gray-500 mt-2">{item.day}</p>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-800 leading-5">
//                   {item.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//         <div
//           onClick={() => navigate("/home/leave-balance")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Leave Balance</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.leave_balance || 20}
// </h2>

//           <p className="text-sm text-gray-400 mt-2">Available this year</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/pending-requests")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Pending Requests</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.pending_requests || 0}
// </h2>
//           <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/present-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Present Days</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.present_days || 0}
// </h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>

//         <div
//           onClick={() => navigate("/home/absent-days")}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
//         >
//           <p className="text-sm text-gray-500">Absent Days</p>
//           {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2> */}
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//   {dashboard.absent_days || 0}
// </h2>
//           <p className="text-sm text-gray-400 mt-2">This month</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
//         <p className="text-gray-500 mt-1">
//           Access your frequently used HR actions quickly.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
//           <div
//             onClick={() => navigate("/home/leave")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Submit a leave request quickly
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/attendance")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               View Attendance
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Check daily and monthly attendance
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/leave-requests")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Leave Requests
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               View applied leave requests status
//             </p>
//           </div>

//           <div
//             onClick={() => navigate("/home/shift-details")}
//             className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               Shift Details
//             </h3>
//             <p className="text-sm text-gray-500 mt-2">
//               See your work shift and timings
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveBalancePage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Casual Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Sick Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Earned Leave</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Remaining</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PendingRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Casual Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Sick Leave Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Permission Request
//           </h2>
//           <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function PresentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Present</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Attendance Percentage</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
//           <p className="text-sm text-gray-400 mt-2">Current month</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function AbsentDaysPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">This Month</p>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
//           <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Reason</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
//           <p className="text-sm text-gray-400 mt-2">As per records</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function LeaveRequestsPage() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
//           <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
//           <p className="text-yellow-600 font-medium mt-2">Pending</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
//           <p className="text-gray-500 mt-2">12 Mar 2026</p>
//           <p className="text-green-600 font-medium mt-2">Approved</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
//           <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
//           <p className="text-red-600 font-medium mt-2">Rejected</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function ShiftDetailsPage() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Shift Name</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">
//             General Shift
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Login Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
//           <p className="text-sm text-gray-500">Logout Time</p>
//           <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// function OnboardingPage() {
//   const [candidates, setCandidates] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//  const fetchData = () => {
//   fetch("http://127.0.0.1:8000/api/app1/list/")
//     .then(res => res.json())
//     .then(data => setCandidates(data.data || data));
// };
//  // 🔥 ADD THIS HERE
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="bg-white rounded-2xl shadow-sm p-6">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-xl font-bold">Onboarding</h1>

//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Candidate
//           </button>
//         </div>

//         {showModal && (
//           <AddCandidateModal
//             closeModal={() => setShowModal(false)}
//             addCandidate={fetchData}   // ✅ CORRECT

//           />
//         )}

//         <CandidateTable candidates={candidates} />
        
//       </div>
//     </Layout>
//   );
// }
// function LeavePage() {
//   const [requests, setRequests] = useState([]);

// const addRequest = (newRequest) => {
//   setRequests((prev) => [newRequest, ...prev]);
// };
// return (
//   <Layout>
//     <div className="space-y-6">

//       <div className="bg-white rounded-2xl shadow-sm p-6 border">
//         <h1 className="text-2xl font-bold">Leave Management</h1>
//       </div>

//       <EmployeeRequestForm onAddRequest={addRequest} />
//       <EmployeeRequestsTable requests={requests} />

//     </div>
//   </Layout>
// );
// }


// function AttendancePage() {
//   const navigate = useNavigate();

//   return (
//     <Layout>
//       <div>
//         <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Attendance Dashboard
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage check-in, check-out and attendance tracker
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             // onClick={() => navigate("/attendance/check-in")}
//             onClick={() => navigate("/home/attendance/check-in")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Login (Check-In)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Start your work day by marking attendance
//             </p>
//             <div className="mt-6 text-green-600 font-semibold">
//               Go to Check-In →
//             </div>
//           </div>

//           <div
//             // onClick={() => navigate("/attendance/check-out")}
//             onClick={() => navigate("/home/attendance/check-out")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Logout (Check-Out)
//             </h2>
//             <p className="text-gray-500 mt-3">
//               End your work day and submit summary
//             </p>
//             <div className="mt-6 text-red-600 font-semibold">
//               Go to Check-Out →
//             </div>
//           </div>

//           <div
//             // onClick={() => navigate("/attendance/tracker")}
//             onClick={() => navigate("/home/attendance/tracker")}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Attendance Tracker
//             </h2>
//             <p className="text-gray-500 mt-3">
//               View attendance timeline and reports
//             </p>
//             <div className="mt-6 text-blue-600 font-semibold">
//               View Tracker →
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// function CheckInPage() {
//   const [now, setNow] = useState(new Date());
//   useEffect(() => {
//   const timer = setInterval(() => {
//     setNow(new Date());
//   }, 1000);

//   return () => clearInterval(timer);
// }, []);
  
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const navigate = useNavigate();
 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkin/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       notes: notes,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setNotes("");

//   // setTimeout(() => setSubmitted(false), 2500);
//    setTimeout(() => {
//     navigate("/home");   // ✅ redirect after check-in
//   }, 1000);
// };


//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-green-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Login (Check-In)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Notes</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work plan..."
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-green-600 text-xl font-semibold mb-2">
//                 Check-In Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function CheckOutPage() {
//   const [now, setNow] = useState(new Date());
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [lastLoginName, setLastLoginName] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await fetch("http://127.0.0.1:8000/api/attendance/checkout/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       summary: summary,
//     }),
//   });

//   setLastLoginName(name);
//   setSubmitted(true);
//   setName("");
//   setSummary("");

//   setTimeout(() => setSubmitted(false), 2500);
// };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[70vh] relative">
//         <div
//           className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
//             submitted ? "blur-sm" : ""
//           }`}
//         >
//           <div className="bg-red-50 border-b border-gray-200 py-3">
//             <h2 className="text-center text-gray-700 text-md font-semibold">
//               Logout (Check-Out)
//             </h2>
//           </div>

//           <form className="p-6 space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 user Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Date</label>
//               <input
//                 value={now.toLocaleDateString()}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">Time</label>
//               <input
//                 value={now.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   second: "2-digit",
//                 })}
//                 readOnly
//                 className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
//               />
//             </div>

//             <div>
//               <label className="block text-xs text-gray-500 mb-1">
//                 Work Summary
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your work summary..."
//                 value={summary}
//                 onChange={(e) => setSummary(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {submitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

//             <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
//               <div className="text-red-600 text-xl font-semibold mb-2">
//                 Check-Out Successful
//               </div>

//               <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

//               <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
//                 <span className="text-red-600 text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes fade {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fade 0.3s ease;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// function TrackerPage() {
//   const SHIFT_START = 9;
//   const SHIFT_END = 20;
//     const [data, setData] = useState([]);
//   const [now, setNow] = useState(new Date()); 
  
//   // ✅ STEP 2 ADD HERE
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setNow(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);
//    // 🔥 STEP 1 ADD HERE (API FETCH)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/attendance/attendance/")
//       .then(res => res.json())
//       .then(resData => setData(resData));
//   }, []);

 
  

//   const getPosition = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     const total = h * 60 + m - SHIFT_START * 60;
//     const range = (SHIFT_END - SHIFT_START) * 60;
//     return (total / range) * 100;
//   };

//   const getHours = (inTime, outTime) => {
//     if (!inTime || !outTime) return 0;
//     const [h1, m1] = inTime.split(":").map(Number);
//     const [h2, m2] = outTime.split(":").map(Number);
//     return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
//   };

//   return (
//     <Layout>
//       <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">
//           Attendance Tracker
//         </h2>

//         <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
//           <span>9 AM</span>
//           <span>11 AM</span>
//           <span>1 PM</span>
//           <span>3 PM</span>
//           <span>5 PM</span>
//           <span>7 PM</span>
//           <span>8 PM</span>
//         </div>

//         {data.map((item, i) => {
//  const currentTime = now.toTimeString().slice(0, 5);

// const checkIn = item.check_in ? item.check_in.slice(0, 5) : null;
// const checkOut = item.check_out ? item.check_out.slice(0, 5) : null;

// const start = getPosition(checkIn);
// const end = getPosition(checkOut || currentTime);
// const hours = getHours(checkIn, checkOut || currentTime);

// let status = "Absent";
// if (checkIn && !checkOut) status = "Working";
// if (checkIn && checkOut) status = "Completed";


//           return (
//             <div key={i} className="flex items-center mb-5 min-w-[700px]">
//               <div className="w-24">
//                 <p className="text-sm font-medium text-gray-700">{item.day}</p>
//                 <p className="text-xs text-gray-400">{item.date}</p>
//               </div>

//               <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
//  {status === "Working" && (
//   <div
//     className="absolute h-3 bg-blue-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Completed" && (
//   <div
//     className="absolute h-3 bg-green-500 rounded"
//     style={{
//       left: `${start}%`,
//       width: `${end - start}%`,
//     }}
//   ></div>
// )}

// {status === "Absent" && (
//   <div
//     className="absolute h-3 bg-red-500 rounded"
//     style={{
//       left: "0%",
//       width: "100%",
//     }}
//   ></div>
// )}
//                 <div className="absolute inset-0 flex justify-between">
//                   {Array.from({ length: 7 }).map((_, idx) => (
//                     <div key={idx} className="w-px bg-gray-200"></div>
//                   ))}
//                 </div>

                

               
//               </div>

//               <div className="w-36 text-right">
//                 <p
//                   className={`text-sm font-medium ${
//                     status === "Working"
//                       ? "text-green-600"
//                       : item.status === "Absent"
//                       ? "text-red-500"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {status}
//                 </p>

//                 {checkIn && checkOut && (
//                   <>
//                     <p className="text-xs text-gray-400">
//                       {checkIn} - {checkOut}
//                     </p>
//                     <p className="text-xs text-gray-600 font-medium">
//                       {hours} hrs
//                     </p>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// export default function Home() {
//   return (
    
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/leave-balance" element={<LeaveBalancePage />} />
//         <Route path="/pending-requests" element={<PendingRequestsPage />} />
//         <Route path="/present-days" element={<PresentDaysPage />} />
//         <Route path="/absent-days" element={<AbsentDaysPage />} />
//         <Route path="/leave-requests" element={<LeaveRequestsPage />} />
//         <Route path="/shift-details" element={<ShiftDetailsPage />} />
//         <Route path="/onboarding" element={<OnboardingPage />} />
//         <Route path="/leave" element={<LeavePage />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/attendance/check-in" element={<CheckInPage />} />
//         <Route path="/attendance/check-out" element={<CheckOutPage />} />
//         <Route path="/attendance/tracker" element={<TrackerPage />} />
//         <Route path="/leaveapprove" element={< ApproveLeave />} />        
//       </Routes>
    
//   );
// }





import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RoleCards from "./RoleCards";
import EmployeeRequestForm from "./EmployeeRequestForm";
import EmployeeRequestsTable from "./EmployeeRequestsTable";
import HrApprovalTable from "./HrApprovalTable";
import AddCandidateModal from "./AddCandidateModal";
import CandidateTable from "./CandidateTable";
import ApproveLeave from "./ApproveLeave";

// 🔥 ADD THIS HERE
const user = {
  name: localStorage.getItem("userName") || "User",
  userId: localStorage.getItem("empId") || "",
  role: "HR Executive",
  department: "Human Resources"
};

function Layout({ title, children }) {
  return (
    <div className="flex min-h-screen bg-[#f4f7fb]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="p-4 md:p-6">
          <Navbar />
          <main className="mt-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

const user = {
  name: localStorage.getItem("userName") || "User",
  role: "HR Executive",
  department: "Human Resources",
  userId: localStorage.getItem("empId") || "",
};
// ✅ STEP 1
  const [dashboard, setDashboard] = useState({});

  // ✅ STEP 1 (API CALL)
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/app1/dashboard/")
      .then(res => res.json())
      .then(data => setDashboard(data));
  }, []);

  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const companySchedule = [
    {
      day: "Monday",
      short: "Mon",
      time: "10:00 AM - 07:00 PM",
      status: "Working Day",
      badge: "bg-green-100 text-green-700",
      card: "bg-green-50 border-green-200",
    },
    {
      day: "Tuesday",
      short: "Tue",
      time: "10:00 AM - 07:00 PM",
      status: "Working Day",
      badge: "bg-green-100 text-green-700",
      card: "bg-green-50 border-green-200",
    },
    {
      day: "Wednesday",
      short: "Wed",
      time: "10:00 AM - 07:00 PM",
      status: "Working Day",
      badge: "bg-green-100 text-green-700",
      card: "bg-green-50 border-green-200",
    },
    {
      day: "Thursday",
      short: "Thu",
      time: "10:00 AM - 07:00 PM",
      status: "Working Day",
      badge: "bg-green-100 text-green-700",
      card: "bg-green-50 border-green-200",
    },
    {
      day: "Friday",
      short: "Fri",
      time: "10:00 AM - 07:00 PM",
      status: "Working Day",
      badge: "bg-green-100 text-green-700",
      card: "bg-green-50 border-green-200",
    },
    {
      day: "Saturday",
      short: "Sat",
      time: "10:00 AM - 07:00 PM",
      status: "working day",
       badge: "bg-green-100 text-green-700",
      card: "bg-green-50 border-green-200",
    },
    {
      day: "Sunday",
      short: "Sun",
      time: "Week Off",
      status: "Holiday",
      badge: "bg-red-100 text-red-700",
      card: "bg-red-50 border-red-200",
    },
  ];

  return (
    <Layout>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {greeting}, {user.name}
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              {user.role} • {user.department}
            </p>
            <p className="text-gray-400 mt-2">{today}</p>
          </div>

          <div className="bg-blue-50 rounded-2xl px-5 py-4 min-w-[220px]">
            <p className="text-sm text-blue-600 font-medium">user ID</p>
            <h2 className="text-2xl font-bold text-blue-800 mt-1">
              {user.userId}
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Company Work Schedule
            </h2>
            <p className="text-gray-500 mt-1">
              Standard weekly shift timing for users
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="bg-blue-50 px-4 py-2 rounded-xl">
              <p className="text-xs text-blue-600 font-medium">Shift</p>
              <p className="text-sm font-semibold text-blue-800">
                General Shift
              </p>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-xl">
              <p className="text-xs text-purple-600 font-medium">Hours</p>
              <p className="text-sm font-semibold text-purple-800">9 hrs/day</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
            <p className="text-sm text-gray-500">Working Days</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">Mon - Fri</h3>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
            <p className="text-sm text-gray-500">working days</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">Saturday</h3>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
            <p className="text-sm text-gray-500">Weekly Off</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">Sunday</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
          {companySchedule.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-4 ${item.card}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700">
                  {item.short}
                </p>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.badge}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-2">{item.day}</p>

              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-800 leading-5">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        <div
          onClick={() => navigate("/home/leave-balance")}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
        >
          <p className="text-sm text-gray-500">Leave Balance</p>
          {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">12 Days</h2> */}
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
  {dashboard.leave_balance || 20}
</h2>

          <p className="text-sm text-gray-400 mt-2">Available this year</p>
        </div>

        <div
          onClick={() => navigate("/home/pending-requests")}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
        >
          <p className="text-sm text-gray-500">Pending Requests</p>
          {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">03</h2> */}
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
  {dashboard.pending_requests || 0}
</h2>
          <p className="text-sm text-gray-400 mt-2">Awaiting approval</p>
        </div>

        <div
          onClick={() => navigate("/home/present-days")}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
        >
          <p className="text-sm text-gray-500">Present Days</p>
          {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">21</h2> */}
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
  {dashboard.present_days || 0}
</h2>
          <p className="text-sm text-gray-400 mt-2">This month</p>
        </div>

        <div
          onClick={() => navigate("/home/absent-days")}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:-translate-y-1 transition"
        >
          <p className="text-sm text-gray-500">Absent Days</p>
          {/* <h2 className="text-3xl font-bold text-gray-800 mt-2">02</h2> */}
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
  {dashboard.absent_days || 0}
</h2>
          <p className="text-sm text-gray-400 mt-2">This month</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
        <p className="text-gray-500 mt-1">
          Access your frequently used HR actions quickly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
          <div
            onClick={() => navigate("/home/leave")}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">Apply Leave</h3>
            <p className="text-sm text-gray-500 mt-2">
              Submit a leave request quickly
            </p>
          </div>

          <div
            onClick={() => navigate("/home/attendance")}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              View Attendance
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Check daily and monthly attendance
            </p>
          </div>

          <div
            onClick={() => navigate("/home/leave-requests")}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Leave Requests
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              View applied leave requests status
            </p>
          </div>

          <div
            onClick={() => navigate("/home/shift-details")}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-5 cursor-pointer hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Shift Details
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              See your work shift and timings
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function LeaveBalancePage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Casual Leave</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">5 Days</h2>
          <p className="text-sm text-gray-400 mt-2">Remaining</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Sick Leave</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">4 Days</h2>
          <p className="text-sm text-gray-400 mt-2">Remaining</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Earned Leave</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">3 Days</h2>
          <p className="text-sm text-gray-400 mt-2">Remaining</p>
        </div>
      </div>
    </Layout>
  );
}

function PendingRequestsPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Casual Leave Request
          </h2>
          <p className="text-gray-500 mt-2">Date: 20 Mar 2026 - 21 Mar 2026</p>
          <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Sick Leave Request
          </h2>
          <p className="text-gray-500 mt-2">Date: 25 Mar 2026</p>
          <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Permission Request
          </h2>
          <p className="text-gray-500 mt-2">Date: 28 Mar 2026</p>
          <p className="text-yellow-600 font-medium mt-2">Pending Approval</p>
        </div>
      </div>
    </Layout>
  );
}

function PresentDaysPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">This Month</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">21 Days</h2>
          <p className="text-sm text-gray-400 mt-2">Marked Present</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Attendance Percentage</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">91%</h2>
          <p className="text-sm text-gray-400 mt-2">Current month</p>
        </div>
      </div>
    </Layout>
  );
}

function AbsentDaysPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">This Month</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">02 Days</h2>
          <p className="text-sm text-gray-400 mt-2">Marked Absent</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Reason</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Personal</h2>
          <p className="text-sm text-gray-400 mt-2">As per records</p>
        </div>
      </div>
    </Layout>
  );
}

function LeaveRequestsPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800">Casual Leave</h2>
          <p className="text-gray-500 mt-2">20 Mar 2026 - 21 Mar 2026</p>
          <p className="text-yellow-600 font-medium mt-2">Pending</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800">Sick Leave</h2>
          <p className="text-gray-500 mt-2">12 Mar 2026</p>
          <p className="text-green-600 font-medium mt-2">Approved</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800">Earned Leave</h2>
          <p className="text-gray-500 mt-2">03 Mar 2026 - 04 Mar 2026</p>
          <p className="text-red-600 font-medium mt-2">Rejected</p>
        </div>
      </div>
    </Layout>
  );
}

function ShiftDetailsPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Shift Name</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            General Shift
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Login Time</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">09:00 AM</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Logout Time</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">06:00 PM</h2>
        </div>
      </div>
    </Layout>
  );
}



function OnboardingPage() {
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);

 const fetchData = () => {
  fetch("http://127.0.0.1:8000/api/app1/list/")
    .then(res => res.json())
    .then(data => setCandidates(data.data || data));
};
 // 🔥 ADD THIS HERE
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Onboarding</h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add Candidate
          </button>
        </div>

        {showModal && (
          <AddCandidateModal
            closeModal={() => setShowModal(false)}
            addCandidate={fetchData}   // ✅ CORRECT

          />
        )}

        <CandidateTable candidates={candidates} />
        
      </div>
    </Layout>
  );
}
function LeavePage() {
  const [requests, setRequests] = useState([]);

const addRequest = (newRequest) => {
  setRequests((prev) => [newRequest, ...prev]);
};
return (
  <Layout>
    <div className="space-y-6">

      <div className="bg-white rounded-2xl shadow-sm p-6 border">
        <h1 className="text-2xl font-bold">Leave Management</h1>
      </div>

      <EmployeeRequestForm onAddRequest={addRequest} />
      <EmployeeRequestsTable requests={requests} />

    </div>
  </Layout>
);
}


function AttendancePage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Attendance Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Manage check-in, check-out and attendance tracker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            // onClick={() => navigate("/attendance/check-in")}
            onClick={() => navigate("/home/attendance/check-in")}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Login (Check-In)
            </h2>
            <p className="text-gray-500 mt-3">
              Start your work day by marking attendance
            </p>
            <div className="mt-6 text-green-600 font-semibold">
              Go to Check-In →
            </div>
          </div>

          <div
            // onClick={() => navigate("/attendance/check-out")}
            onClick={() => navigate("/home/attendance/check-out")}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Logout (Check-Out)
            </h2>
            <p className="text-gray-500 mt-3">
              End your work day and submit summary
            </p>
            <div className="mt-6 text-red-600 font-semibold">
              Go to Check-Out →
            </div>
          </div>

          <div
            // onClick={() => navigate("/attendance/tracker")}
            onClick={() => navigate("/home/attendance/tracker")}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Attendance Tracker
            </h2>
            <p className="text-gray-500 mt-3">
              View attendance timeline and reports
            </p>
            <div className="mt-6 text-blue-600 font-semibold">
              View Tracker →
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function CheckInPage() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
  const timer = setInterval(() => {
    setNow(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);
  
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lastLoginName, setLastLoginName] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch("http://127.0.0.1:8000/api/attendance/checkin/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      notes: notes,
    }),
  });

  setLastLoginName(name);
  setSubmitted(true);
  setName("");
  setNotes("");

  // setTimeout(() => setSubmitted(false), 2500);
   setTimeout(() => {
    navigate("/home");   // ✅ redirect after check-in
  }, 1000);
};


  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[70vh] relative">
        <div
          className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
            submitted ? "blur-sm" : ""
          }`}
        >
          <div className="bg-green-50 border-b border-gray-200 py-3">
            <h2 className="text-center text-gray-700 text-md font-semibold">
              Login (Check-In)
            </h2>
          </div>

          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                user Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Date</label>
              <input
                value={now.toLocaleDateString()}
                readOnly
                className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Time</label>
              <input
                value={now.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
                readOnly
                className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Notes</label>
              <textarea
                rows="4"
                placeholder="Enter your work plan..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
              <div className="text-green-600 text-xl font-semibold mb-2">
                Check-In Successful
              </div>

              <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xl">✓</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade 0.3s ease;
        }
      `}</style>
    </Layout>
  );
}

function CheckOutPage() {
  const [now, setNow] = useState(new Date());
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lastLoginName, setLastLoginName] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

 
  const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch("http://127.0.0.1:8000/api/attendance/checkout/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      summary: summary,
    }),
  });

  setLastLoginName(name);
  setSubmitted(true);
  setName("");
  setSummary("");

  setTimeout(() => setSubmitted(false), 2500);
};

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[70vh] relative">
        <div
          className={`w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 transition ${
            submitted ? "blur-sm" : ""
          }`}
        >
          <div className="bg-red-50 border-b border-gray-200 py-3">
            <h2 className="text-center text-gray-700 text-md font-semibold">
              Logout (Check-Out)
            </h2>
          </div>

          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                user Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Date</label>
              <input
                value={now.toLocaleDateString()}
                readOnly
                className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Time</label>
              <input
                value={now.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
                readOnly
                className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Work Summary
              </label>
              <textarea
                rows="4"
                placeholder="Enter your work summary..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-8 py-6 text-center z-10 animate-fade">
              <div className="text-red-600 text-xl font-semibold mb-2">
                Check-Out Successful
              </div>

              <p className="text-gray-600 text-sm mb-4">{lastLoginName}</p>

              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-xl">✓</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade 0.3s ease;
        }
      `}</style>
    </Layout>
  );
}

function TrackerPage() {
  const SHIFT_START = 9;
  const SHIFT_END = 20;
    const [data, setData] = useState([]);
  const [now, setNow] = useState(new Date()); 
  
  // ✅ STEP 2 ADD HERE
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
   // 🔥 STEP 1 ADD HERE (API FETCH)
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/attendance/attendance/")
      .then(res => res.json())
      .then(resData => setData(resData));
  }, []);

 
  

  const getPosition = (time) => {
    if (!time) return 0;
    const [h, m] = time.split(":").map(Number);
    const total = h * 60 + m - SHIFT_START * 60;
    const range = (SHIFT_END - SHIFT_START) * 60;
    return (total / range) * 100;
  };

  const getHours = (inTime, outTime) => {
    if (!inTime || !outTime) return 0;
    const [h1, m1] = inTime.split(":").map(Number);
    const [h2, m2] = outTime.split(":").map(Number);
    return ((h2 * 60 + m2 - (h1 * 60 + m1)) / 60).toFixed(1);
  };

  return (
    <Layout>
      <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Attendance Tracker
        </h2>

        <div className="flex justify-between text-xs text-gray-400 mb-4 min-w-[700px] px-28">
          <span>9 AM</span>
          <span>11 AM</span>
          <span>1 PM</span>
          <span>3 PM</span>
          <span>5 PM</span>
          <span>7 PM</span>
          <span>8 PM</span>
        </div>

        {data.map((item, i) => {
 const currentTime = now.toTimeString().slice(0, 5);

const checkIn = item.check_in ? item.check_in.slice(0, 5) : null;
const checkOut = item.check_out ? item.check_out.slice(0, 5) : null;

const start = getPosition(checkIn);
const end = getPosition(checkOut || currentTime);
const hours = getHours(checkIn, checkOut || currentTime);

let status = "Absent";
if (checkIn && !checkOut) status = "Working";
if (checkIn && checkOut) status = "Completed";


          return (
            <div key={i} className="flex items-center mb-5 min-w-[700px]">
              <div className="w-24">
                <p className="text-sm font-medium text-gray-700">{item.day}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>

              <div className="flex-1 h-3 bg-gray-100 relative mx-4 rounded">
 {status === "Working" && (
  <div
    className="absolute h-3 bg-blue-500 rounded"
    style={{
      left: `${start}%`,
      width: `${end - start}%`,
    }}
  ></div>
)}

{status === "Completed" && (
  <div
    className="absolute h-3 bg-green-500 rounded"
    style={{
      left: `${start}%`,
      width: `${end - start}%`,
    }}
  ></div>
)}

{status === "Absent" && (
  <div
    className="absolute h-3 bg-red-500 rounded"
    style={{
      left: "0%",
      width: "100%",
    }}
  ></div>
)}
                <div className="absolute inset-0 flex justify-between">
                  {Array.from({ length: 7 }).map((_, idx) => (
                    <div key={idx} className="w-px bg-gray-200"></div>
                  ))}
                </div>

                

               
              </div>

              <div className="w-36 text-right">
                <p
                  className={`text-sm font-medium ${
                    status === "Working"
                      ? "text-green-600"
                      : item.status === "Absent"
                      ? "text-red-500"
                      : "text-yellow-600"
                  }`}
                >
                  {status}
                </p>

                {checkIn && checkOut && (
                  <>
                    <p className="text-xs text-gray-400">
                      {checkIn} - {checkOut}
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      {hours} hrs
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default function Home() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leave-balance" element={<LeaveBalancePage />} />
        <Route path="/pending-requests" element={<PendingRequestsPage />} />
        <Route path="/present-days" element={<PresentDaysPage />} />
        <Route path="/absent-days" element={<AbsentDaysPage />} />
        <Route path="/leave-requests" element={<LeaveRequestsPage />} />
        <Route path="/shift-details" element={<ShiftDetailsPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/leave" element={<LeavePage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/attendance/check-in" element={<CheckInPage />} />
        <Route path="/attendance/check-out" element={<CheckOutPage />} />
        <Route path="/attendance/tracker" element={<TrackerPage />} />
        <Route path="/leaveapprove" element={< ApproveLeave />} />        
      </Routes>
    
  );
}


