export async function upload(files) {
  const uploadPreset = process.env.REACT_APP_CLOUD_UPLOAD_PRESET;
  const url = process.env.REACT_APP_CLOUD_URL;
  const data = new FormData();

  data.append("upload_preset", uploadPreset);

  if (!files) {
    return;
  }

  const uploadPromises = files.map(async (file) => {
    data.append("file", file);
    return fetch(url, { method: "post", body: data })
      .then((res) => res.json())
      .catch((e) => {
        console.log(e);
      });
  });

  return Promise.all(uploadPromises).then((data) => data);
}
