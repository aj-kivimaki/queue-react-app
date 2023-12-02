function Input({ handleInput, handleRemove, handleClear, inputRef }) {
  return (
    <>
      <h2>FIFO (First In First Out)</h2>
      <div className="input">
        <input type="text" placeholder="item" ref={inputRef} />
        <button onClick={handleInput}>ADD</button>
        <button onClick={handleRemove}>REMOVE</button>
        <button onClick={handleClear}>CLEAR</button>
      </div>
    </>
  );
}

export default Input;
