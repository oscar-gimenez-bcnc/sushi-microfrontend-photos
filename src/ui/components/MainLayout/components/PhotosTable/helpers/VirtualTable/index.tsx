import React, { useRef, useState, useContext } from 'react';
import { type FixedSizeListProps, FixedSizeList } from 'react-window';

const VirtualTableContext = React.createContext<{
  top: number;
  setTop: (top: number) => void;
  header: React.ReactNode;
  footer: React.ReactNode;
}>({
  top: 0,
  setTop: (value: number) => {},
  header: <></>,
  footer: <></>
});

const Inner = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function Inner(
  { children, ...rest },
  ref
) {
  const { header, footer, top } = useContext(VirtualTableContext);
  return (
    <div {...rest} ref={ref}>
      <table style={{ top, position: 'absolute', width: '100%' }}>
        {header}
        <tbody>{children}</tbody>
        {footer}
      </table>
    </div>
  );
});

const VirtualTable = ({
  row,
  header,
  footer,
  ...rest
}: {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  row: FixedSizeListProps['children'];
} & Omit<FixedSizeListProps, 'children' | 'innerElementType'>): JSX.Element => {
  const listRef = useRef<FixedSizeList | null>();
  const [top, setTop] = useState(0);

  return (
    <VirtualTableContext.Provider value={{ top, setTop, header, footer }}>
      <FixedSizeList
        {...rest}
        innerElementType={Inner}
        onItemsRendered={(props) => {
          // @ts-expect-error private method access
          const style = listRef.current?._getItemStyle(props.overscanStartIndex);
          const topValue: number = style?.top ?? 0;
          setTop(topValue);
          rest.onItemsRendered?.(props);
        }}
        ref={(el) => (listRef.current = el)}
      >
        {row}
      </FixedSizeList>
    </VirtualTableContext.Provider>
  );
};

export default VirtualTable;
