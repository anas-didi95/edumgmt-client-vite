import { FC, ReactNode } from "react";

interface ITable {
  headerList: string[];
  rowCount: number;
  children: ReactNode;
}

const Table: FC<ITable> = ({ headerList, rowCount, children }) => (
  <div className="table-container">
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          {headerList.map((header, i) => (
            <th key={`${header}${i}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowCount > 0 ? (
          children
        ) : (
          <tr>
            <td colSpan={headerList.length} className="has-text-centered">
              No record found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
