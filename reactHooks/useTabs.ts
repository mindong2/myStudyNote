import "./styles.css";
import React, { useState } from "react";

const content = [
  {
    id: 0,
    tab: "section1",
    content: "section1입니다.",
  },
  {
    id: 1,
    tab: "section2",
    content: "section2입니다.",
  },
];

const useTabs = (initialTab: number, allTabs: Object[]) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIdx],
    setCurrentIdx,
  };
};

// const App = () => {
//   const { currentItem, setCurrentIdx }: any = useTabs(0, content);
//   return (
//     <>
//       {content.map((item, idx) => {
//         return (
//           <button key={item.id} onClick={() => setCurrentIdx(idx)}>
//             {item.tab}
//           </button>
//         );
//       })}
//       {<div>{currentItem.content}</div>}
//     </>
//   );
// };

// export default App;
