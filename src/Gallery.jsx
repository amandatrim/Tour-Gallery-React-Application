import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data from API
  useEffect(() => {
    const fetchTours = async () => {
      console.log("Starting fetch...");
      setLoading(true);
      try {
        const response = await fetch('/api/react-tours-project');
        console.log("Fetch Response: ", response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data: ", data);

        // Add showMore property
        setTours(
          data.map((tour) => ({
            ...tour,
            showMore: false,
          }))
        );
      } catch (err) {
        console.error("Fetch Error: ", err);
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Remove a tour
  const handleRemoveTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Toggle read more/less
  const toggleReadMore = (id) => {
    setTours(
      tours.map((tour) =>
        tour.id === id
          ? { ...tour, showMore: !tour.showMore }
          : tour
      )
    );
  };

  // Loading and error states
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  // Main render
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card">
          <img src={tour.image} alt={tour.name} className="tour-image" />
          <div className="tour-info">
            <h2>{tour.name}</h2>
            <h4>${tour.price}</h4>
            <p>
              {tour.showMore ? tour.info : `${tour.info.substring(0, 100)}...`}
              <button
                className="toggle-btn"
                onClick={() => toggleReadMore(tour.id)}
              >
                {tour.showMore ? 'Show Less' : 'Read More'}
              </button>
            </p>
            <button
              className="remove-btn"
              onClick={() => handleRemoveTour(tour.id)}
            >
              Not Interested
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
