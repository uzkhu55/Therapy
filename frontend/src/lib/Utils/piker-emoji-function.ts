export const handleClickEmoji = (
  showPicker: boolean,
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowPicker(!showPicker);
};

export const handleEmojiSelect = (
  value: { native: string },
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setInput((prev) => prev + value.native);
  setShowPicker(false);
};

export const handleClear = (
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setImage: React.Dispatch<React.SetStateAction<any>>,
  setImagePreview: React.Dispatch<React.SetStateAction<string>>
) => {
  setInput("");
  setImage(undefined);
  setImagePreview("");
};
