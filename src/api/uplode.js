export async function upload(file) {
  const uploadPreset = process.env.REACT_APP_CLOUD_UPLOAD_PRESET;
  const url = process.env.REACT_APP_CLOUD_URL;
  const data = new FormData();

  data.append("upload_preset", uploadPreset);
  data.append("file", file);

  return fetch(url, { method: "post", body: data })
    .then((res) => res.json())
    .then((data) => data.url)
    .catch((e) => {
      console.log(e);
    });
}
