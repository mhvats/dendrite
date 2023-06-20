import * as React from "react";
import "./SidebarComps.css";
interface Props {
  title: string;
  Icon?: React.ElementType;
  onClick: () => void;
}

export const SidebarComps: React.FunctionComponent<Props> = ({
  title,
  onClick,
  Icon,
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      <div className="d-flex align-items-center my-2 menu-container">
        <div className=" px-5" style={{ cursor: "pointer" }}>
          {Icon && <Icon />}
        </div>
        <div>
          <h2
            className=""
            id="menu-title menu-title2"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};
