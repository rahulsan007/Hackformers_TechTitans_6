import React from 'react';

class ImageUploadButton extends React.Component {
  handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target.result;
      // do something with the image url, such as displaying it in an <img> tag
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div>
        <label htmlFor="image-upload">
          <button>Upload Image</button>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={this.handleImageUpload}
        />
      </div>
    );
  }
}

export default ImageUploadButton;