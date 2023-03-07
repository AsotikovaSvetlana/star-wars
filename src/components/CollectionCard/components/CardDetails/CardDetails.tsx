import { Details } from "@/src/types";
import s from "./CardDetails.module.scss";
import { DetailsText } from "../DetailsText";

interface CardDetailsProps {
  name: string;
  details: Details;
}

export const CardDetails = ({
  name,
  details,
}: CardDetailsProps): JSX.Element => {
  return (
    <div className={s.details}>
      <DetailsText characteristic="Name" value={name} />
      {Object.entries(details).map(([key, value]) => (
        <DetailsText key={key} characteristic={key} value={value} />
      ))}
    </div>
  );
};
