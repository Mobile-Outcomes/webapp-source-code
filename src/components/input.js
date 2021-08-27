import { useState, useEffect } from "react";

export default function Inputs() {
  const [data, setData] = useState(" ");

  return(
  <input
    type='text'
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder='Enter text...'
    required
  />};
}
