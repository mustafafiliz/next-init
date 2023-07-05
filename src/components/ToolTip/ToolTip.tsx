import React, { useRef, useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import useOnClickOutside from '@/hooks/useOnClickOutside';

type Props = {
  children: React.ReactNode;
  content?: string | null;
  id: string;
};

export function ToolTip({ children, content, id }: Props) {
  const _id = id?.replaceAll(' ', '_').toLocaleLowerCase();
  return (
    <>
      <a data-tooltip-position-strategy="fixed" data-tooltip-id={_id} data-tooltip-content={content || ''}>
        {children}
      </a>
      {content && <Tooltip float id={_id} content={content} />}
    </>
  );
}
