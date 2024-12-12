interface Props {
  count: number;
  setCount: (count: number) => void;
}
const Inner = ({ count, setCount} : Props) => {
  return (
    <div className="inner">
      {count}
      <button onClick={() => { setCount(count+1)}}>+</button>
      <button onClick={() => { setCount(count-1)}}>-</button>
    </div>
  )
}

export default Inner
