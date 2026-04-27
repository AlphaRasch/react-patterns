import { type JSX } from "react";

type ShapeComponent = (() => JSX.Element)

export const Shape = ({ shape: ShapeComponent, ...props }: { shape: ShapeComponent }) => {
  return <div><ShapeComponent {...props} /></div>;
};