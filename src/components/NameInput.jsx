import React from "react";

export default function NameInput(props) {
  const { name, updateName } = props;
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => {
          updateName(e.target.value);
        }}
      />
    </div>
  );
}
