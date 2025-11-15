import React, { useState } from 'react';
import { useGetProductByIdQuery } from '../features/apiSlice';

const ProductViewer=({ products }) =>{
  const [selectedId, setSelectedId] = useState(null);
  const { data, error, isLoading } = useGetProductByIdQuery(selectedId, {
    skip: !selectedId,
  });

  const handleClick = (p) => {
    setSelectedId(p.id);
  };

  return (
    <div>
      {products.map(p => (
        <img
          key={p.id}
          src={p.imageUrl}
          className="imageProduct"
          onClick={() => handleClick(p)}
        />
      ))}

      {isLoading && <p>טוען מוצר...</p>}
      {error && <p>שגיאה: {error.message}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProductViewer;
