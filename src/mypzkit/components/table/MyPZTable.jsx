import React from 'react';

import styles from './MyPZTable.module.scss';

const MyPZTable = (props) => {
  const {
    data,
    headRenders,
    lineRenders,
  } = props;

  const renderHead = () => {
    if (!headRenders) {
      return null;
    }

    return (
      <tr>
        {
          // TODO: use id as a key
          // eslint-disable-next-line react/no-array-index-key
          headRenders.map((headRender, i) => (<th key={i}>{headRender()}</th>))
        }
      </tr>
    );
  };

  const renderCell = (lineRender, lineData) => lineRender(lineData);

  const renderLine = (lineData) => lineRenders.map(
    // TODO: use id as a key
    // eslint-disable-next-line react/no-array-index-key
    (lineRender, i) => (<td key={i}>{renderCell(lineRender, lineData)}</td>),
  );

  const renderBody = () => {
    if (!data || !lineRenders) {
      return null;
    }

    // TODO: use id as a key
    // eslint-disable-next-line react/no-array-index-key
    return data.map((lineData, i) => (<tr key={i}>{renderLine(lineData)}</tr>));
  };

  return (
    <table className={styles['mypz-table']}>
      <thead>{renderHead()}</thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export default MyPZTable;
