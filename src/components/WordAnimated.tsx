import { useState, type ReactNode } from "react";

type WordAnimatedProps = { children: string; bold: boolean; size: string };
export const WordAnimated = ({ children, bold, size }: WordAnimatedProps) => {
  const [currentChildren, setCurrentChildren] = useState<string>(children);
  const length = children.length;
  console.log({ length });
  console.log(children.length);
  const onHover = () => {
    setCurrentChildren(() => {
      const figures = Math.pow(10, length);
      console.log({ figures });
      const random = Math.floor(Math.random() * figures);
      console.log({ random });
      console.log(random.toString());
      return random.toString();
    });
    // setCurrentChildren(children);
  };
  return (
    <div
      onMouseMove={onHover}
      onMouseLeave={() => setCurrentChildren(children)}
    >
      {currentChildren}
    </div>
  );
};
