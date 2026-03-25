// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";


// export default function Login() {

//   const navigate = useNavigate();
//  const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!formData.email || !formData.password) {
//     setError("All fields are required ❌");
//     return;
//   }

//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: formData.email,
//         password: formData.password,
//       }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Login Successful ✅");

//       // optional: store login state
//       localStorage.setItem("isLoggedIn", true);
//         localStorage.setItem("userName", data.name); // ✅ ADD THIS

//       navigate("/home");
//     } else {
//       setError(data.error || "Invalid credentials ❌");

//     }

//   } catch (err) {
//     console.error(err);
//     setError("Server error ❌");
//   }
// };

//   return (
//     <div className="min-h-screen bg-[#082a57] flex items-center justify-center">

//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

//         <h2 className="text-2xl font-bold text-center text-[#082a57] mb-6">
//           Employee Login
//         </h2>

//         {/* Error */}
//         {error && (
//           <p className="text-red-500 text-sm mb-4 text-center">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
//           />

//           <button
//             type="submit"
//             className="w-full bg-[#082a57] text-white py-2 rounded-lg hover:opacity-90"
//           >
//             Login
//           </button>

//         </form>

//         {/* Register Link */}
//         <p className="text-center text-sm mt-4">
//           Don't have an account?
//           <Link to="/" className="text-[#082a57] font-semibold ml-1">
//             Register
//           </Link>
//         </p>

//       </div>

//     </div>
//   );
// }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setError("All fields are required ❌");
//       return;
//     }

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Login Successful ✅");

//         // 🔥 STORE USER DATA
//         localStorage.setItem("isLoggedIn", true);
//         localStorage.setItem("userName", data.name);
//         localStorage.setItem("empId", data.employee_id); // 🔥 IMPORTANT

//         navigate("/home");
//       } else {
//         setError(data.error || "Invalid credentials ❌");
//       }

//     } catch (err) {
//       console.error(err);
//       setError("Server error ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#082a57] flex items-center justify-center">

//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

//         <h2 className="text-2xl font-bold text-center text-[#082a57] mb-6">
//           Employee Login
//         </h2>

//         {/* Error */}
//         {error && (
//           <p className="text-red-500 text-sm mb-4 text-center">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
//           />

//           <button
//             type="submit"
//             className="w-full bg-[#082a57] text-white py-2 rounded-lg hover:opacity-90"
//           >
//             Login
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }





import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required ❌");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful ✅");

        // 🔥 STORE USER DATA
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userName", data.name);//this also leve page
        localStorage.setItem("empId", data.employee_id); // 🔥 IMPORTANT//this also leave 
        localStorage.setItem("department", data.department);  // ✅ ADD//this si leave apge

        navigate("/home");
      } else {
        setError(data.error || "Invalid credentials ❌");
      }

    } catch (err) {
      console.error(err);
      setError("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#082a57] flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-[#082a57] mb-6">
          Employee Login
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#082a57]"
          />

          <button
            type="submit"
            className="w-full bg-[#082a57] text-white py-2 rounded-lg hover:opacity-90"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}