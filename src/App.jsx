import BillForm from "./Components/BillForm";
import Header from "./Components/Header";
import FriendsList from "./Components/FriendsList";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(obj) {
    setFriendsList((curr) => [...curr, obj]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
  }

  function handleBillPayment(val) {
    setFriendsList((currList) =>
      currList.map((friend) =>
        selectedFriend.id === friend.id
          ? { ...friend, balance: friend.balance + val }
          : friend
      )
    );
  }
  console.log(friendsList);

  return (
    <>
      <Header />
      <section className="App">
        <FriendsList
          onAddFriend={handleAddFriend}
          onFriendSelection={handleSelectedFriend}
          friendsList={friendsList}
          selectedFriend={selectedFriend}
        />
        {selectedFriend && (
          <BillForm
            selectedFriend={selectedFriend}
            key={selectedFriend?.id}
            onBillPayment={handleBillPayment}
          />
        )}
      </section>
    </>
  );
}

export default App;
