interface Props {
  children: JSX.Element[];
  reverse: boolean;
}
function Card({ children, reverse }: Props) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}
export default Card;
