import { colors } from '@/lib/colors';
import styles from './Table.module.scss';
import DataTable, { ConditionalStyles } from 'react-data-table-component';

type Props = {
  data?: unknown[];
  columns?: any;
  conditionalRowStyles?: ConditionalStyles<unknown>[];
};

const customStyles = {
  rows: {
    style: {
      minHeight: '7.2rem',
      fontSize: '1.4rem',
      backgroundColor: '#fff',
    },
    stripedStyle: {
      backgroundColor: '#F7F7F7',
    },
  },
  headCells: {
    style: {
      minHeight: '7.2rem',
      paddingLeft: '2.4rem',
      paddingRight: '2.4rem',
      fontSize: '1.4rem',
      borderRight: `1px solid ${colors.black}`,
    },
  },
  cells: {
    style: {
      borderRight: `1px solid ${colors.black}`,
      paddingLeft: '2.4rem',
      paddingRight: '2.4rem',
    },
  },
};

export default function Table({ columns, data = [], conditionalRowStyles }: Props) {
  return (
    <div className={styles.container}>
      <DataTable
        columns={columns}
        data={data}
        striped
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
        noDataComponent={<div style={{ padding: 40 }}>Kayıt bulunamadı.</div>}
      />
    </div>
  );
}
