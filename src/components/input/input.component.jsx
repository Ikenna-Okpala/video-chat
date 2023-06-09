import { LinkInput, LinkInputContainer, LinkLabel } from "./input.style";

const LabelledInput = ({ value, onChange, label, onKeyDown }) => {
  return (
    <LinkInputContainer>
      <LinkInput
        type="text"
        required
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {value.length == 0 && (
        <LinkLabel shrink={value.length}>{label}</LinkLabel>
      )}
    </LinkInputContainer>
  );
};

export default LabelledInput;
