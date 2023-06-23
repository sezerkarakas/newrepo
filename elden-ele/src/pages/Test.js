import React, { useEffect, useState } from "react";
import axios from "axios";

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    axios
      .get("http://localhost:3000/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      axios
        .post("http://localhost:3000/upload", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <h2>Photo Gallery</h2>
      <div>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={`data:image/png;base64, ${photo.data}`}
            alt="Photo"
            style={{ width: "200px", height: "auto", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoUpload;
