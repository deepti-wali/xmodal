// import React, { useState } from "react";
import "./Xmodal.css";

// const XModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpenModal, setIsOpenModal] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     dob: "",
//     phone: "",
//   });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.email.includes("@")) {
//       alert("Invalid email. Please check your email address.");
//     } else if (formData.phone.length !== 10 || isNaN(formData.phone)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//     } else if (new Date(formData.dob) > new Date()) {
//       alert("Invalid date of birth. Please enter a valid date.");
//     } else {
//       // Handle successful form submission here
//       alert("Form submitted successfully:", formData);
//       setIsOpen(false);
//       setFormData({
//         email: "",
//         username: "",
//         dob: "",
//         phone: "",
//       });
//     }
//   };

//   const handleOpenModal = () => {
//     // if (e.target.className === "modal") {
//     setIsOpen(true);
//     setIsOpenModal(true);

//     // }
//   };

//   const handleCloseModal = (e) => {
//     if (e.target.className === "modal") {
//       setIsOpen(false);
//       setIsOpenModal(true);
//     }
//   };

//   return (
//     // <div className="app">
//     //   <button onClick={handleOpenModal} className="submit-button">
//     //     Open Form
//     //   </button>
//     //   <h1>User Details Modal</h1>

//     //   {isOpen && (
//     //     <div className="modal" onClick={handleCloseModal}>
//     //       <div className="modal-content">
//     //         <form onSubmit={handleSubmit}>
//     //           <h2> Fill Details</h2>

//     //           <label htmlFor="username">Username:</label>
//     //           <br />
//     //           <br />
//     //           <input
//     //             type="text"
//     //             id="username"
//     //             value={formData.username}
//     //             onChange={handleInputChange}
//     //             required
//     //           />
//     //           <br />
//     //           <br />

//     //           <label htmlFor="email">Email:</label>
//     //           <br />
//     //           <br />
//     //           <input
//     //             type="email"
//     //             id="email"
//     //             value={formData.email}
//     //             onChange={handleInputChange}
//     //             required
//     //           />
//     //           <br />
//     //           <br />
//     //           <label htmlFor="phone">Phone Number:</label>
//     //           <br />
//     //           <br />

//     //           <input
//     //             type="tel"
//     //             id="phone"
//     //             value={formData.phone}
//     //             onChange={handleInputChange}
//     //             required
//     //           />
//     //           <br />
//     //           <br />

//     //           <label htmlFor="dob">Date of Birth:</label>
//     //           <br />
//     //           <br />
//     //           <input
//     //             type="date"
//     //             id="dob"
//     //             value={formData.dob}
//     //             onChange={handleInputChange}
//     //             required
//     //           />
//     //           <br />
//     //           <br />
//     //           <button type="submit" className="submit-button">
//     //             Submit
//     //           </button>
//     //         </form>
//     //       </div>
//     //     </div>
//     //   )}
//     // </div>
//     <div>
//       {/* {isOpen && ( */}
//       {isOpenModal && (
//         <div className="modal" onClick={handleCloseModal}>
//           <button onClick={handleOpenModal} className="submit-button">
//             Open Form
//           </button>
//           <h1>User Details Modal</h1>
//           {isOpen && (
//             <div className="modal-content" onClick={handleCloseModal}>
//               <form onSubmit={handleSubmit}>
//                 <h2> Fill Details</h2>

//                 <label htmlFor="username">Username:</label>
//                 <br />
//                 <br />
//                 <input
//                   className="text"
//                   type="text"
//                   id="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <br />
//                 <br />

//                 <label htmlFor="email">Email:</label>
//                 <br />
//                 <br />
//                 <input
//                   type="email"
//                   id="email"
//                   className="text"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <br />
//                 <br />
//                 <label htmlFor="phone">Phone Number:</label>
//                 <br />
//                 <br />

//                 <input
//                   type="tel"
//                   id="phone"
//                   className="text"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <br />
//                 <br />

//                 <label htmlFor="dob">Date of Birth:</label>
//                 <br />
//                 <br />
//                 <input
//                   type="date"
//                   id="dob"
//                   className="text"
//                   value={formData.dob}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <br />
//                 <br />
//                 <button type="submit" className="submit-button">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       )}
//       {/* )} */}
//     </div>
//   );
// };

// export default XModal;

import React, { useState } from "react";
import "./App.css";

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    dob: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
    } else if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(formData.dob) > new Date()) {
      alert("Invalid date of birth. Please enter a valid date.");
    } else {
      // Handle successful form submission here
      alert("Form submitted successfully:", formData);
      setIsOpen(false);
      setFormData({
        email: "",
        username: "",
        dob: "",
        phone: "",
      });
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal} className="submit-button">
        Open Form
      </button>

      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2> Fill Details</h2>

              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <br />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
              <br />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
