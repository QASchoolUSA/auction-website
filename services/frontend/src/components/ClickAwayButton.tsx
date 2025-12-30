interface IProps {
  onClickAway(): void;
}

const ClickAwayButton = ({ onClickAway }: IProps) => {
  return (
    <button
      onClick={onClickAway}
      tabIndex={-1}
      className="fixed inset-0 h-full w-full cursor-default outline-none"
    ></button>
  );
};

export default ClickAwayButton;
