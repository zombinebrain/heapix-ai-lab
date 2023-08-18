const AvatarWithName = () => {
  return (
    <div className="flex items-center">
      <img
        src="/images/max-avatar.jpg"
        alt="Max CEO avatar"
        className="w-15 h-15 tablet:h-12.5 tablet:w-12.5 sm:h-11 sm:w-11 mr-5 tablet:mr-2.5 rounded-full"
      />
      <div>
        <div className="whitespace-nowrap">Max Gergalov</div>
        <div className="text-grey-400">CEO</div>
      </div>
    </div>
  );
};

export default AvatarWithName;
