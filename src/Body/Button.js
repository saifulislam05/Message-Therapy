import React from 'react'

function Button({title}) {
  return (
    <button className="px-4 py-2 font-medium uppercase duration-200 border-2 border-white bg-none hover:bg-white hover:text-black">
      {title}
    </button>
  );
}

export default Button