export async function upload(files) {
  const uploadPreset = process.env.REACT_APP_CLOUD_UPLOAD_PRESET;
  const url = process.env.REACT_APP_CLOUD_URL;
  const data = new FormData();

  data.append("upload_preset", uploadPreset);
  for (const file of files) {
    data.append("file", file);
  }

  return fetch(url, { method: "post", body: data })
    .then((res) => res.json())
    .then((data) => console.log(data.resources))
    .catch((e) => {
      console.log(e);
    });
}
