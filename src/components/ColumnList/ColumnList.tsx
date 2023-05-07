/* eslint-disable react/display-name */
import { DroppableStateSnapshot } from '@hello-pangea/dnd';
import * as React from 'react';

import { useAppSelector } from '@/hooks';
import { TColumn, TTask } from 'types';

import { Column } from '../Column';

type InnerListProps = {
  column: TColumn;
  taskMap: Record<string, TTask>;
  index: number;
  snapshot: DroppableStateSnapshot;
};

// eslint-disable-next-line react/display-name
const InnerList = React.memo((props: InnerListProps) => {
  const { column, taskMap, index } = props;
  const tasks = column.taskIds.map((taskId: string) => taskMap[taskId]);
  return (
    <Column key={column.id} column={column} snapshot={props.snapshot} tasks={tasks} index={index} />
  );
});

type Props = {
  placeholder: React.ReactNode;
  children?: React.ReactNode;
  snapshot: DroppableStateSnapshot;
};

export const ColumnsList = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const todos = useAppSelector((state) => state.todos);

  const renderedLists = todos.columnOrder.map((columnId: string, index: number) => {
    const column: TColumn = todos.columns[columnId];
    return (
      <InnerList
        snapshot={props.snapshot}
        key={column.id}
        column={column}
        taskMap={todos.tasks}
        index={index}
      />
    );
  });
  return (
    <div
      style={{
        display: 'flex',
      }}
      ref={ref}
    >
      {renderedLists}
      {props.placeholder}
    </div>
  );
});
