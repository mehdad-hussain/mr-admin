import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setDropDownIsOpen(!dropDownIsOpen);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    // if (dropDownIsOpen) {
    //   window.addEventListener("click", onClick);
    // }

    // return () => {
    //   window.removeEventListener("click", onClick);
    // };
  }, [dropDownIsOpen, el]);

  return [dropDownIsOpen, setDropDownIsOpen];
};

// const dropdownRef = useRef(null);
// const [dropDownIsOpen, setDropDownIsOpen] = useDetectOutsideClick(
//   dropdownRef,
//   false
// );
