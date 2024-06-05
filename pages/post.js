"use client";
import { useEffect, useState, React } from 'react';

const Post = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/product/${props.id}/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  };

  <div>
  return (
   {data.map((r) => {
    return( 
      <div key = {r.id}>
      <p> {r.title} </p>
      <p> {r.content}</p>
      </div>
      
    )
   })}
  );
  </div>
}
export default Post;