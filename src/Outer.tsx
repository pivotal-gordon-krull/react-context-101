import Inner from "./Inner.tsx";

interface Props {
  count: number;
  setCount: (count: number) => void;
}

const Outer = ({ count, setCount}: Props) => {

  return (
    <div className="outer">
      <Inner count={count} setCount={setCount}/>
      <Inner count={count} setCount={setCount}/>
    </div>
  )
}

export default Outer
