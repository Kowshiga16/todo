function Items(props) {
  const { activityarr, setactivity, items, index } = props;

  function Handledelete(delid) {
    const temparr = activityarr.filter(item => item.id !== delid);
    setactivity(temparr);
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <p>{index + 1}. {items.activity}</p>
      </div>
      <button
        onClick={() => Handledelete(items.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
}

export default Items;
