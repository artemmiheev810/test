import React from "react";
import { Call } from "services/Calls";

import st from "./st.module.scss";
import empty from "static/img/emptyAva.svg";

export const CallCollaborator = ({ data }: { data: Call }) => {
  return (
    <div className={st.wrap}>
      <img
        className={st.img}
        src={data.collaborator || empty}
        alt={`${data.person_id} ${data.person_surname} ${data.person_name}`}
      />
    </div>
  );
};
