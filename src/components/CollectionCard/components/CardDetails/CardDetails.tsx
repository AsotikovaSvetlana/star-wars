import s from "./CardDetails.module.scss";

export const CardDetails = () => {
  return (
    <div className={s.details}>
      <p>
        <span>Name:</span> {"Darth Waider"}
      </p>
      <p>
        <span>Birth year:</span> {"1992"}
      </p>
    </div>
  );
};
