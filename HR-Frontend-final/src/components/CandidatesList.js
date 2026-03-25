// import { useEffect, useState } from "react";

// export default function CandidatesList() {

//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/app1/list/")
//       .then(res => res.json())
//       .then(data => setCandidates(data.data || data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="bg-white p-4 rounded shadow">

//       <h2 className="text-lg font-bold mb-2">Onboarding Candidates</h2>

//       {candidates.length === 0 ? (
//         <p>No Candidates</p>
//       ) : (
//         candidates.map(c => (
//           <p key={c.id}>
//             {c.first_name} {c.last_name} - {c.email}
//           </p>
//         ))
//       )}

//     </div>
//   );
// }




// import { useEffect, useState } from "react";

// export default function CandidatesList() {

//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/app1/list/")
//       .then(res => res.json())
//       .then(data => setCandidates(data.data || data))
//       .catch(err => console.log(err));
//   }, []);

//   // ✅ Approve
//   const approveCandidate = async (id) => {
//     alert("Approved ID: " + id);
//   };

//   // ✅ Reject
//   const rejectCandidate = async (id) => {
//     alert("Rejected ID: " + id);
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow p-4">

//       <h2 className="text-lg font-bold mb-4">
//         Onboarding Candidates
//       </h2>

//       <div className="overflow-x-auto">

//         <table className="w-full text-sm">

//           {/* HEADER */}
//           <thead>
//             <tr className="grid grid-cols-7 font-semibold text-sm border-b pb-2">
//               <div>Name</div>
//               <div>Email</div>
//               <div>Phone</div>
//               <div>Department</div>
//               <div>Role</div>
//               <div>Date of Joining</div>
//               <div>Action</div> {/* ✅ Added */}
//             </tr>
//           </thead>

//           {/* BODY */}
//           <tbody>

//             {candidates.length === 0 ? (
//               <tr>
//                 <td className="text-center py-4 text-gray-400">
//                   No Candidates
//                 </td>
//               </tr>
//             ) : (

//               candidates.map((item) => (

//                 <tr key={item.id} className="grid grid-cols-7 py-2 border-b">

//                   <div>
//                     {item.first_name} {item.last_name}
//                   </div>

//                   <div>{item.email || "-"}</div>

//                   <div>{item.phone || "-"}</div>

//                   <div>{item.department || "-"}</div>

//                   <div>{item.role || "-"}</div>

//                   <div>
//                     {item.date_of_joining || "Not Assigned"}
//                   </div>

//                   {/* ✅ Buttons */}
//                   <div className="flex gap-2">

//                     <button
//                       onClick={() => approveCandidate(item.id)}
//                       className="bg-green-600 text-white px-2 py-1 rounded text-xs"
//                     >
//                       Approve
//                     </button>

//                     <button
//                       onClick={() => rejectCandidate(item.id)}
//                       className="bg-red-600 text-white px-2 py-1 rounded text-xs"
//                     >
//                       Reject
//                     </button>

//                   </div>

//                 </tr>

//               ))

//             )}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// }





// import { useEffect, useState } from "react";

// export default function CandidatesList() {

//   const [candidates, setCandidates] = useState([]);

//   // ✅ FETCH DATA (SAFE)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/app1/list/")
//       .then(res => res.json())
//       .then(data => {
//         console.log("API DATA:", data);

//         if (Array.isArray(data)) {
//           setCandidates(data);
//         } else if (Array.isArray(data.data)) {
//           setCandidates(data.data);
//         } else if (Array.isArray(data.results)) {
//           setCandidates(data.results);
//         } else {
//           setCandidates([]);
//         }
//       })
//       .catch(err => console.log("Error:", err));
//   }, []);

//   // ✅ APPROVE

// const approveCandidate = async (id) => {

//   await fetch(`http://127.0.0.1:8000/api/app1/approve-candidate/${id}/`, {
//     method: "POST",
//   });

//   alert("Candidate Approved ✅");

//   // refresh data
//   window.location.reload();
// };




//   return (
//     <div className="bg-white rounded-2xl shadow p-4">

//       <h2 className="text-lg font-bold mb-4">
//         Onboarding Candidates
//       </h2>

//       <div className="overflow-x-auto">

//         <table className="w-full text-sm">

//           {/* HEADER */}
//           <thead>
//             <tr className="grid grid-cols-7 font-semibold text-sm border-b pb-2">
//               <div>Name</div>
//               <div>Email</div>
//               <div>Phone</div>
//               <div>Department</div>
//               <div>Role</div>
//               <div>Date of Joining</div>
//               <div>Action</div>
//             </tr>
//           </thead>

//           {/* BODY */}
//           <tbody>

//             {!Array.isArray(candidates) || candidates.length === 0 ? (
//               <tr>
//                 <td className="text-center py-4 text-gray-400">
//                   No Candidates
//                 </td>
//               </tr>
//             ) : (

//               candidates.map((item) => (

//                 <tr key={item.id} className="grid grid-cols-7 py-2 border-b">

//                   <div>
//                     {item.first_name} {item.last_name}
//                   </div>

//                   <div>{item.email || "-"}</div>

//                   <div>{item.phone || "-"}</div>

//                   <div>{item.department || "-"}</div>

//                   <div>{item.role || "-"}</div>

//                   <div>
//                     {item.date_of_joining || "Not Assigned"}
//                   </div>

//                   {/* ACTION BUTTONS */}
//                   <div>

//                     <button
//                       onClick={() => approveCandidate(item.id)}
//                       className="bg-green-600 text-white px-2 py-1 rounded text-xs"
//                     >
//                       Approve
//                     </button>

                    

//                   </div>

//                 </tr>

//               ))

//             )}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// }




import { useEffect, useState } from "react";

export default function CandidatesList() {

  const [candidates, setCandidates] = useState([]);

  // ✅ FETCH DATA
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/app1/list/")
      .then(res => res.json())
      .then(data => {
        console.log("API DATA:", data);

        if (Array.isArray(data)) {
          setCandidates(data);
        } else if (Array.isArray(data.data)) {
          setCandidates(data.data);
        } else if (Array.isArray(data.results)) {
          setCandidates(data.results);
        } else {
          setCandidates([]);
        }
      })
      .catch(err => console.log("Error:", err));
  }, []);

  // ✅ APPROVE FUNCTION
  const approveCandidate = async (id) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/app1/approve-candidate/${id}/`,
        { method: "POST" }
      );

      const data = await res.json();

      // 🔥 SHOW EMP ID
      alert("Approved ✅\nEMP ID: " + data.employee_id);

      // 🔥 REMOVE ROW WITHOUT RELOAD
      setCandidates(prev => prev.filter(item => item.id !== id));

    } catch (err) {
      console.log("Error:", err);
      alert("Error approving candidate ❌");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4">

      <h2 className="text-lg font-bold mb-4">
        Onboarding Candidates
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          {/* HEADER */}
          <thead>
            <tr className="grid grid-cols-7 font-semibold text-sm border-b pb-2">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Role</th>
              <th>Date of Joining</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>

            {!Array.isArray(candidates) || candidates.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-400">
                  No Candidates
                </td>
              </tr>
            ) : (

              candidates.map((item) => (

                <tr key={item.id} className="grid grid-cols-7 py-2 border-b">

                  <td>
                    {item.first_name} {item.last_name}
                  </td>

                  <td>{item.email || "-"}</td>

                  <td>{item.phone || "-"}</td>

                  <td>{item.department || "-"}</td>

                  <td>{item.role || "-"}</td>

                  <td>
                    {item.date_of_joining || "Not Assigned"}
                  </td>

                  {/* ACTION */}
                  <td>
                    <button
                      onClick={() => approveCandidate(item.id)}
                      className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700"
                    >
                      Approve
                    </button>
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}