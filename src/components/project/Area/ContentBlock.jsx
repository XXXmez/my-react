import React from "react";

import s from "./Area.module.scss";

const ContentBlock = ({
  id,
  name,
  ind,
  x,
  y,
  saveX,
  saveY,
  del,
  color = "",
}) => {
  return (
    <div className={s.content} style={{ background: color }}>
      <h3 className={s.content_title}>
        {name} {ind + 1}
      </h3>
      <div className={s.content_info}>
        <div className={s.content_input}>
          <span>Length</span>
          <input value={x} onChange={(e) => saveX(e, id, name)} />
        </div>
        <div className={s.content_input}>
          <span>Width</span>
          <input value={y} onChange={(e) => saveY(e, id, name)} />
        </div>
      </div>
      <button onClick={() => del(id, name)} className={s.content_del}>
        Х
      </button>
    </div>
  );
};

export default ContentBlock;
