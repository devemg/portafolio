import "./IconComponent.scss";

export const IconComponent = ({ name, width, height, classNames }: any) => (
  <div
    className={[...classNames, "icon", name].join(" ")}
    style={{
      width,
      height,
    }}
  ></div>
);
