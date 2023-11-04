import React, { useState } from 'react';
import './ReqQuote.css'; // Import the CSS file

const ReqQuote = () => {
  const [formData, setFormData] = useState({
    title: '',
    productSelection: '',
    quantity: '',
    size: '',
    noOfPly: '',
    paperType: '',
    colorPrinting: '',
    logo: null,
    colorForPly: '',
    

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      logo: file,
    });
  };

  const handlePlyColorChange = (e) => {
    const selectedColor = e.target.value;
    setFormData({
      ...formData,
      colorForPly: selectedColor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="quote-box">
      <h1 className="quote-header" style={{ color: 'white' }}>
        Request a Quote
      </h1>
      <form className="quote-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="productSelection">Product Selection:</label>
        <select
          id="productSelection"
          name="productSelection"
          value={formData.productSelection}
          onChange={handleChange}
        >
          <option value="">Select a product</option>
          <option value="Delivery Receipt">Delivery Receipt</option>
          <option value="Official Receipt">Official Receipt</option>
          <option value="Collection Receipt">Collection Receipt</option>
          <option value="Billing Invoice">Billing Invoice</option>
          <option value="Sales Invoice">Sales Invoice</option>
          
        </select>
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="size">Size</label>
        <input
          type="number"
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="noOfPly">No. Of Ply</label>
        <input
          type="number"
          id="noOfPly"
          name="noOfPly"
          value={formData.noOfPly}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="paperType">Paper Type</label>
        <input
          type="text"
          id="paperType"
          name="paperType"
          value={formData.paperType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="colorPrinting">Color Printing</label>
        <input
          type="text"
          id="colorPrinting"
          name="colorPrinting"
          value={formData.colorPrinting}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="plyColor">Color for Ply</label>
        <div>
          <label>
            <input
              type="radio"
              
              name="plyColor"
              value="White"
              checked={formData.colorForPly === 'White'}
              onChange={handlePlyColorChange}
            />
            White
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="colorForPly"
              value="Pink"
              checked={formData.colorForPly === 'Pink'}
              onChange={handlePlyColorChange}
            />
            Pink
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="colorForPly"
              value="Blue"
              checked={formData.colorForPly === 'Blue'}
              onChange={handlePlyColorChange}
            />
            Blue
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="colorForPly"
              value="Green"
              checked={formData.colorForPly === 'Green'}
              onChange={handlePlyColorChange}
            />
            Green
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              
              name="colorForPly"
              value="Yellow"
              checked={formData.colorForPly === 'Yellow'}
              onChange={handlePlyColorChange}
            />
            Yellow
          </label>
        </div>
        <label htmlFor="logo">Upload Logo:</label>
        <input
          type="file"
          id="logo"
          name="logo"
          onChange={handleLogoUpload}
        />
      </div>
      <button type="submit">Submit</button>

      </form>
      <div className="product-details" style={{ color: '#C52D2A' }}>
        <h2>Product Details</h2>
      </div>
    </div>
  );
};

export default ReqQuote;