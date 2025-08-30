import { useState } from "react";
import star from "../assets/images/icon-star.svg";
import thankYou from "../assets/images/illustration-thank-you.svg";
function RatingComponent() {
  const rating = [1, 2, 3, 4, 5];
  const [background, setBackground] = useState(null);
  const [submit, setSubmit] = useState(false);
  const submitHandler = () => {
    setSubmit(true);
  };

  return (
    <>
      {!submit ? (
        <div className="w-80 p-5 ml-auto mr-auto  bg-gradient-to-t from-gray-900 to-gray-800 rounded-2xl font-sans">
          <div className="p-3  mb-5  w-10 h-10 rounded-full shadow-md shadow-gray-900 bg-gray-800">
            <img src={star} alt="star icon" />
          </div>
          <h3 className="font-semibold text-left">How did we do?</h3>
          <div className="w-70">
            <p className="text-left mb-3 mt-3 text-gray-400 text-sm">
              Please let us know hwo we did with your support request. All
              feedback is apprciated to help us improve our offering!
            </p>
            <div className="flex w-70 justify-between text-gray-400 text-center ml-auto mr-auto mb-4">
              {rating.map((number) => (
                <div
                  onClick={() => {
                    setBackground(number);
                  }}
                  className={`flex m-2 w-10 h-10 justify-center items-center rounded-full shadow-md shadow-gray-900 bg-gray-800  cursor-pointer  font-semibold hover:text-black ${
                    background === number
                      ? "bg-orange-500 text-white hover:bg-orange-500 "
                      : "bg-gray-800 hover:bg-white"
                  }`}
                >
                  {number}
                </div>
              ))}
            </div>

            <button
              onClick={submitHandler}
              className="hover:!bg-white cursor-pointer !w-70 !h-10 m-auto !rounded-2xl !bg-orange-500 uppercase text-black font-semibold "
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="w-80 pt-10 pb-10 pl-5 pr-5  ml-auto mr-auto  bg-gradient-to-t from-gray-900 to-gray-800 rounded-2xl font-sans">
          <div className="flex justify-center">
            <img className="w-30" src={thankYou} alt="star icon" />
          </div>
          <div className="flex w-45 pt-2 pb-2 pl-4 pr-4 h-8 ml-auto mb-10 mt-5 mr-auto justify-center items-center  text-orange-400 text-sm bg-gray-800 shadow-md shadow-gray-900 rounded-2xl">
            You selected {background} out of 5
          </div>
          <h3 className="font-semibold text-center">Thank you!</h3>
          <p className="text-sm text-gray-400 mt-2">
            We appreciate you taking the time to five a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}

      {/* ***************The new card *********************/}
    </>
  );
}
export default RatingComponent;

// ********************************************************************
// export default function RatingComponent() {
//   const [selected, setSelected] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     if (selected !== null) {
//       setSubmitted(true);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       {/* Rating numbers */}
//       <div className="flex gap-2">
//         {[1, 2, 3, 4, 5].map((num) => (
//           <div
//             key={num}
//             onClick={() => {
//               setSelected(num);
//               setSubmitted(false); // reset message if user changes selection
//             }}
//             className={`w-10 h-10 flex items-center justify-center
//               rounded-lg text-white font-bold cursor-pointer
// ${selected === num ? "bg-orange-500" : "bg-gray-400"}`}
//           >
//             {num}
//           </div>
//         ))}
//       </div>

//       {/* Submit button */}
//       <button
//         onClick={handleSubmit}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium"
//       >
//         Submit
//       </button>

//       {/* Message after submit */}
// {submitted && (
//   <p className="text-lg font-semibold">
//     You chose {selected} out of 5 ⭐
//   </p>
// )}
//     </div>
//   );
// }
