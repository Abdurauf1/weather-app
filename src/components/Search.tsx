import { InputType } from "../types";

const Search = ({ value, onChange }: InputType) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

export default Search;
