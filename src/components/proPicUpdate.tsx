import axios from "axios";
import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFile = e.target.files[0];
      setFile(newFile);

      const newFormData = new FormData();
      newFormData.append("file", newFile);
      newFormData.append("name", "John Doe");
      // Add any additional form data here
      setFormData(newFormData);
    }
  };

  const handleSubmit = async () => {
    try {
      // Create a canvas element to resize the image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Load the image file into the canvas
      const img = new Image();
      img.onload = () => {
        // Resize the image to a specific width and height
        const maxWidth = 600;
        const maxHeight = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Draw the image onto the canvas and convert it to a new Blob
        ctx!.drawImage(img, 0, 0, width, height);
        canvas.toBlob(async (blob) => {
          // Create a new FormData object with the resized image and additional form data
          const newFormData = new FormData();
          newFormData.append("file", blob, "photo.png");
          newFormData.append("name", "John Doe");
          // Add any additional form data here

          // Send the form request to the server
          const response = await axios.post("/upload", newFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(response.data);
        }, "image/png");
      };

      img.src = URL.createObjectURL(file);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-3 my-3">
        <label htmlFor="Bio" className="form-label">
          Profile Picture Update
        </label>
        <input
          type="file"
          className="form-control"
          id="profilepictureupdate"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleFileChange}
        />
        <button
          className="btn btn-outline-light"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
