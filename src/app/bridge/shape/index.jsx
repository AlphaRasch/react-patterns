export const Shape = ({ shape: ShapeComponent, ...props }) => {
  return <div><ShapeComponent {...props} /></div>;
};