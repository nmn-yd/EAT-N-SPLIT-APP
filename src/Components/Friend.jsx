function Friend({ friend, onFriendSelection, selectedFriend }) {
  return (
    <div className="friend-item">
      <img src={friend.image} />
      <div>
        <h2>{friend.name}</h2>
        <p>
          {friend.balance === 0
            ? "Both of you are Even"
            : friend.balance > 0
            ? `Owns you ${friend.balance} bucks`
            : `Own him ${Math.abs(friend.balance)} bucks`}
        </p>
      </div>
      <button
        onClick={() => onFriendSelection(friend)}
        className="button-89"
        role="button"
      >
        {friend.id === selectedFriend?.id ? "Close" : "Select"}
      </button>
    </div>
  );
}

export default Friend;
