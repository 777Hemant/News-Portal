import React, { useEffect, useState } from 'react';

const FetchData = ({ cat }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true when fetching new data
      const apiUrl = cat
        ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=bb8de48334f7468b89ed1d7d60cb61a1`
        : `https://newsapi.org/v2/top-headlines?country=in&apiKey=bb8de48334f7468b89ed1d7d60cb61a1`;

      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(jsonData.articles);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false even on error
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className='container my-4'>
      <h3>TOP HEADLINES</h3>
      <div className='container my-3 d-flex justify-content-center align-items-center flex-column' style={{ minHeight: '100vh' }}>
        {loading ? (
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : data?.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className='container my-3 p-3'
              style={{ width: '600px', boxShadow: '2px 2px 10px silver', borderRadius: '10px' }}
            >
              <h5 className='my-2'>{item.title}</h5>
              <div className='d-flex justify-content-center align-items-center'>
                <img
                  src={item?.urlToImage || ''}
                  alt={item.title}
                  className='img-fluid'
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </div>
              <p className='my-1'>{item.content}</p>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                View More
              </a>
            </div>
          ))
        ) : (
          'No data available'
        )}
      </div>
    </div>
  );
};

export default FetchData;
