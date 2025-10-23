import Items from "./Items";
import { useState } from "react";

function ToDo({ activityarr, setactivity }) {
  const [newActivity, setNewActivity] = useState("");

  // Add new activity
  const handleAdd = () => {
    if (newActivity.trim() === "") return;

    const newItem = {
      id: activityarr.length > 0 ? activityarr[activityarr.length - 1].id + 1 : 1,
      activity: newActivity,
    };

    setactivity([...activityarr, newItem]);
    setNewActivity("");
  };

  return (
    <div className="flex gap-5 flex-wrap">
      <section className="flex flex-col">
        <h2 className="text-2xl font-medium mt-5">Manage Activities</h2>
        <div>
          <input
            type="text"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            className="border border-black bg-transparent p-1 mt-2"
            placeholder="next activity?"
          />
          <button
            className="bg-black text-white p-1 border border-black ml-2"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </section>

      <section className="bg-[#BDB4EA] border rounded-md mt-5 flex-grow p-3">
        <h1 className="text-2xl font-medium mb-2">Today's Activities</h1>

        {activityarr.length === 0 && <p>You haven't added anything yet</p>}

        {activityarr.map((item, index) => (
          <Items
            key={item.id}
            items={item}
            index={index}
            activityarr={activityarr}
            setactivity={setactivity}
          />
        ))}
      </section>
    </div>
  );
}

export default ToDo;
