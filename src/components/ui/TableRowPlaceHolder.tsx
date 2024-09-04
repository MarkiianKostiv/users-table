import React from "react";

interface TableRowPlaceHolderProps {
  rows?: number;
  columns?: number;
}

export const TableRowPlaceHolder: React.FC<TableRowPlaceHolderProps> = ({
  rows = 1,
  columns = 1,
}) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          className='hover'
          key={rowIndex}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <th key={colIndex}>
              <div className='skeleton h-10 w-full'></div>
            </th>
          ))}
        </tr>
      ))}
    </>
  );
};
