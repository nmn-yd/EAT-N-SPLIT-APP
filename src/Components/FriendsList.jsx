import { useState } from "react";
import Friend from "./Friend";

function FriendsList({
  onAddFriend,
  friendsList,
  onFriendSelection,
  selectedFriend,
}) {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [name, setName] = useState("");

  function handleNewFriend(e) {
    e.preventDefault();
    if (!name) return;
    const randomId = Math.floor(Math.random() * (100000 - 999999 + 1)) + 999999;
    const newObject = {
      id: randomId,
      name,
      image: `https://i.pravatar.cc/48?u=${randomId}`,
      balance: 0,
    };

    onAddFriend(newObject);
    setShowAddFriend(false);
    setName("");
  }
  return (
    <div className="friends-name">
      {friendsList.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onFriendSelection={onFriendSelection}
        />
      ))}

      {showAddFriend && (
        <form className="addfriendform" onSubmit={handleNewFriend}>
          <label>Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="friendname"
            name="friend-name"
            required
          />
          <button className="button-89" role="button">
            Add to the List
          </button>
        </form>
      )}

      <button
        onClick={() => setShowAddFriend((open) => !open)}
        className="button-89"
        role="button"
      >
        {showAddFriend ? "Close" : "Add More Friends"}
      </button>
    </div>
  );
}

export default FriendsList;
