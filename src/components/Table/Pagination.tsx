import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import Button from '../Button/Button';
import { colors } from '@/lib/colors';
import ChevronForwardIcon from '../Icons/ChevronForwardIcon';

type Props = {
  page?: number;
  totalPages?: number;
  onPagination: (page: number) => void;
};

export default function Pagination({ page = 1, totalPages = 1, onPagination }: Props) {
  const [tempPages, setPages] = useState<number[] | undefined>(undefined);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    filteredPages();
  }, [page]);

  const filteredPages = () => {
    const _pages = pages.filter((i) => {
      if (i < page - 2 || i > page + 2) return;
      else return i;
    });
    setPages(_pages);
  };

  const handlePagination = (page: number) => {
    onPagination(page);
  };

  const MoreButtons = () => {
    return <Button className={styles.item} bg={colors.black} color={colors.black} disable name="..." />;
  };

  const Forward = () => {
    return pages[pages?.length - 1] !== page ? (
      <Button bg={colors.black} color={colors.black} icon={<ChevronForwardIcon width={7} />} onClick={() => handlePagination(page + 1)} className={`${styles.item}`} />
    ) : (
      <></>
    );
  };

  const Backward = () => {
    return page !== 1 ? <Button onClick={() => handlePagination(page - 1)} icon={<ChevronForwardIcon width={7} />} className={`${styles.item} ${styles.rotate180}`} /> : <></>;
  };

  const PaginationButtons = () => {
    return (
      <>
        {tempPages
          ?.filter((i) => {
            if (i === 1 || i === pages[pages?.length - 1]) return;
            return i;
          })
          .slice(0, 10)
          .map((i, index) => {
            return <Button onClick={() => handlePagination(i)} key={index} className={`${page === i ? styles.active : ''} ${styles.item}`} name={String(i)} />;
          })}
      </>
    );
  };

  const FirstButton = () => {
    return <Button onClick={() => handlePagination(1)} className={`${page === 1 ? styles.active : ''} ${styles.item}`} name="1" />;
  };

  const LastButton = () => {
    return (
      <Button
        onClick={() => handlePagination(pages[pages?.length - 1])}
        name={String(pages[pages?.length - 1])}
        className={`${page === pages[pages?.length - 1] ? styles.active : ''} ${styles.item}`}
      />
    );
  };

  return totalPages > 1 ? (
    <div className={styles.container}>
      <Backward />
      <FirstButton />
      {page !== 1 && page !== 2 && page !== 3 && <MoreButtons />}
      <PaginationButtons />
      {page !== pages[pages?.length - 2] && page !== pages[pages?.length - 1] && page !== pages[pages?.length - 3] && <MoreButtons />}
      <LastButton />
      <Forward />
    </div>
  ) : (
    <></>
  );
}
