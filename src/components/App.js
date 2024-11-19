import React, { useState, useEffect } from "react";

function App() {
  // State for storing the image URL and loading status
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image when the component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        // Update the state with the dog image URL
        setDogImage(data.message);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false); // Handle the error and stop loading
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading text if data is still being fetched
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image once loaded
      )}
    </div>
  );
}

export default App;
