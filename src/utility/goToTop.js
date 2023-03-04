import React,{ useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // console.log(isVisible)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {isVisible && (
        <button onClick={goToTop} id="moveUp" title="Go to top">
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
