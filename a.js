import React, { useState } from 'react';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Sunucuya dosyayı yükleme isteği gönderin (örneğin, axios kullanarak)
    axios.post('/upload', formData)
      .then(response => {
        console.log('Dosya başarıyla yüklendi.');
      })
      .catch(error => {
        console.error('Dosya yükleme hatası:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Yükle</button>
    </div>
  );
}

export default FileUploader;
