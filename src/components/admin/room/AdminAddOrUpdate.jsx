import React, { useEffect, useState } from "react";
import AdminButton from "../ui/AdminButton";
import { useLocation, useNavigate } from "react-router-dom";
import { upload } from "../../../api/uplode";
import { useRooms } from "../../../hooks/useRooms";

export default function AdminAddOrUpdate() {
  const {
    state: { room: currentRoom },
  } = useLocation();
  const [file, setFile] = useState();
  const [room, setRoom] = useState();
  const { addRoomQuery, updateRoomQuery, removeRoomQuery } = useRooms();
  const navigate = useNavigate();

  useEffect(() => {
    currentRoom && setRoom({ ...currentRoom });
  }, [currentRoom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentRoom) {
      upload(file).then((urls) => {
        addRoomQuery.mutate(
          {
            ...room,
            imgUrl: urls.map((data) => data.url),
          },
          { onSuccess: () => console.log("succcess") }
        );
      });
    } else {
      if (window.confirm("객실을 수정하시겠습니까?")) {
        updateRoomQuery.mutate(
          {
            ...room,
          },
          { onSuccess: () => console.log("succcess") }
        );
      }
    }
    navigate("/admin/rooms");
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && Object.values(files));
      return;
    }
    setRoom((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h3 className="text-2xl mb-3">
        객실 {`${currentRoom ? "수정" : "추가"}`}
      </h3>
      <form
        className="w-full flex flex-col gap-5 border border-theme-color rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="title">
            객실명
          </label>
          <input
            id="title"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="text"
            name="title"
            placeholder="객실명을 입력하세요"
            onChange={handleChange}
            value={room?.title || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="location">
            객실 위치
          </label>
          <input
            id="location"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="text"
            name="location"
            placeholder="객실 위치를 입력하세요"
            onChange={handleChange}
            value={room?.location || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="roomtype">
            룸타입
          </label>
          <input
            id="roomtype"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="text"
            name="roomtype"
            placeholder="룸타입을 입력하세요"
            onChange={handleChange}
            value={room?.roomtype || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="area">
            객실면적
          </label>
          <input
            id="area"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="text"
            name="area"
            placeholder="객실 면적을 입력하세요 ex) 26.7 ㎡ ~ 30.7㎡"
            onChange={handleChange}
            value={room?.area || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="people">
            투숙인원
          </label>
          <input
            id="people"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="number"
            name="people"
            placeholder="투숙가능한 인원의 숫자만 입력하세요"
            onChange={handleChange}
            value={room?.people || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="bedtype">
            침대타입
          </label>
          <input
            id="bedtype"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="text"
            name="bedtype"
            placeholder="침대타입을 입력하세요"
            onChange={handleChange}
            value={room?.bedtype || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="outlook">
            전망
          </label>
          <input
            id="outlook"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="text"
            name="outlook"
            placeholder="전망을 입력하세요"
            onChange={handleChange}
            value={room?.outlook || ""}
            required
          />
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="title">
            객실 설명
          </label>
          <textarea
            id="content"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2 resize-none"
            type="text"
            name="content"
            placeholder="객실 설명을 입력하세요"
            onChange={handleChange}
            rows={10}
            value={room?.content || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="price">
            요금
          </label>
          <input
            id="price"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="number"
            name="price"
            placeholder="1박 요금을 입력하세요"
            onChange={handleChange}
            value={room?.price || ""}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="file">
            룸 이미지
          </label>
          <input
            id="file"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="file"
            name="file"
            onChange={handleChange}
            accept="image/*"
            multiple
          />
        </div>
        {/* {room && room?.imgUrl.map((url) => <img src={url} alt="room-img" />)} */}
        {file &&
          file.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt="" />
          ))}

        <div className="flex gap-5">
          <AdminButton
            type="submit"
            text={`${currentRoom ? "객실 수정" : "객실 추가"}`}
          />
          {currentRoom && (
            <AdminButton
              type="button"
              text="객실 삭제"
              event={() =>
                removeRoomQuery.mutate(currentRoom.id, {
                  onSuccess: () => {
                    console.log("success");
                  },
                })
              }
            />
          )}
        </div>
      </form>
    </>
  );
}
