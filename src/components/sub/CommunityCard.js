import React from "react";

const CommunityCard = ({
  item,
  inputEdit,
  textareaEdit,
  disableUpdate,
  updatePost,
  enableUpdate,
  deletePost,
  index,
}) => {
  return (
    <>
      <article>
        {item.enableUpdate ? (
          /* 업데이트일때 보여줄 JSX */
          <>
            <div className="txt">
              <input
                type="text"
                defaultValue={item.title}
                placeholder="제목을 입력하세용"
                ref={inputEdit}
              />
              <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                defaultValue={item.content}
                placeholder="내용을 입력해주세용."
                ref={textareaEdit}
              ></textarea>
            </div>
            <div className="btnSet">
              {/* 업데이트 취소 */}
              <button onClick={() => disableUpdate(index)}>CANCEL</button>
              {/* 내용 업데이트 저장 */}
              <button onClick={() => updatePost(index)}>SAVE</button>
            </div>
          </>
        ) : (
          /* 목록일때 보여줄 JSX */
          <>
            <div className="txt">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
            <div className="btnSet">
              {/* 업데이트기능 */}
              <button onClick={() => enableUpdate(index)}>EDIT</button>
              {/* 삭제기능 */}
              <button onClick={() => deletePost(index)}>DELETE</button>
            </div>
          </>
        )}
      </article>
    </>
  );
};

export default CommunityCard;
