import DeleteFriend from "@/components/common/DeleteFriend";

const FriendItem = ({ key, imageUrl, name, status, handleDeleteFriend }) => {
  return (
    <div
      className="flex items-center space-x-4 p-2 border border-gray-200 rounded-md"
      key={key}
    >
      <img
        className="w-[60px] h-[60px] rounded-full"
        alt="Group"
        src={imageUrl}
      />
      <div className="flex-grow">
        <div className="font-medium text-black text-lg">{name}</div>
        <div className="text-gray-600 text-sm">{status}</div>
      </div>
      <DeleteFriend
        friendName={name}
        onDelete={() => handleDeleteFriend(name)}
      />
    </div>
  );
};

export default FriendItem;
