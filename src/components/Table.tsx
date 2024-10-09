import { FC, ReactNode } from "react";

interface ITable {
  headerList: string[];
  children: ReactNode;
}

const Table: FC<ITable> = ({ headerList, children }) => (
  <div className="table-container">
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          {headerList.map((header, i) => (
            <th key={`${header}${i}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default Table;
