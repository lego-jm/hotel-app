import React, { useEffect, useState } from "react";
import AdminButton from "../ui/AdminButton";
import { useLocation, useNavigate } from "react-router-dom";
import { upload } from "../../../api/uplode";
import { useAttraction } from "../../../hooks/useAttraction";

export default function AdminAttractionAddOrUpdate() {
  const {
    state: { attraction: currentAttraction },
  } = useLocation();
  const [file, setFile] = useState();
  const [attraction, setAttraction] = useState();
  const [category, setCategory] = useState();
  const { addAttractionQuery, updateAttractionQuery, removeAttractionQuery } =
    useAttraction();
  const navigate = useNavigate();
  useEffect(() => {
    currentAttraction && setAttraction({ ...currentAttraction });
    currentAttraction &&
      setCategory({
        category1: currentAttraction.category1,
        category2: currentAttraction.category2,
      });
  }, [currentAttraction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentAttraction) {
      upload(file).then((urls) => {
        addAttractionQuery.mutate(
          {
            ...attraction,
            ...category,
            imgUrl: urls.map((data) => data.url),
          },
          {
            onSuccess: () => navigate("/admin/attraction"),
          }
        );
      });
    } else {
      if (window.confirm("명소를 수정하시겠습니까?")) {
        updateAttractionQuery.mutate(
          {
            ...attraction,
            ...category,
          },
          { onSuccess: () => navigate("/admin/attraction") }
        );
      }
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && Object.values(files));
      return;
    }
    setAttraction((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h3 className="text-2xl mb-3">
        명소 {`${currentAttraction ? "수정" : "추가"}`}
      </h3>
      <form
        className="w-full flex flex-col gap-5 border border-theme-color rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="category1">
            카테고리
          </label>
          <select
            className="w-1/6 border border-gray-500 p-2 outline-none"
            name="category1"
            id="category1"
            value={category?.category1 || ""}
            onChange={(e) =>
              setCategory((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          >
            <option value="">대카테고리</option>
            <option value="history">역사</option>
            <option value="culture">문화</option>
          </select>

          {category?.category1 && (
            <select
              className="w-1/6 border border-gray-500 p-2 outline-none"
              name="category2"
              id="category2"
              value={category?.category2 || ""}
              onChange={(e) =>
                setCategory((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            >
              {category?.category1 === "history" ? (
                <>
                  <option value="">중카테고리</option>
                  <option value="palace">고궁</option>
                  <option value="hanok">한옥마을</option>
                  <option value="museum">박물관</option>
                </>
              ) : (
                <>
                  <option value="">중카테고리</option>
                  <option value="experience">체험</option>
                  <option value="shopping">쇼핑</option>
                  <option value="show">공연</option>
                </>
              )}
            </select>
          )}
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="title">
            명소 이름
          </label>
          <input
            id="title"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2 resize-none"
            type="text"
            name="title"
            placeholder="명소 이름을 입력하세요"
            onChange={handleChange}
            value={attraction?.title || ""}
            required
          />
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="content">
            명소 설명
          </label>
          <textarea
            id="content"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2 resize-none"
            type="text"
            name="content"
            placeholder="명소 설명을 입력하세요"
            onChange={handleChange}
            rows={10}
            value={attraction?.content || ""}
            required
          />
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="movetime">
            이동 시간
          </label>
          <input
            id="movetime"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2 resize-none"
            type="text"
            name="movetime"
            placeholder="이동 시간을 입력하세요"
            onChange={handleChange}
            rows={10}
            value={attraction?.movetime || ""}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="w-1/12" htmlFor="file">
            명소 썸네일
          </label>
          <input
            id="file"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2"
            type="file"
            name="file"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        {file &&
          file.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt="" />
          ))}
        <div className="flex gap-5">
          <AdminButton
            type="submit"
            text={`${currentAttraction ? "명소 수정" : "명소 추가"}`}
          />
          {currentAttraction && (
            <AdminButton
              type="button"
              text="명소 삭제"
              event={() =>
                removeAttractionQuery.mutate(currentAttraction.id, {
                  onSuccess: () => {
                    navigate("/admin/attraction");
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
