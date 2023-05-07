import * as React from 'react';

import { Card } from '@/components/Card';
import { TTask } from 'types';

type Props = {
  placeholder: React.ReactNode;
  tasks: TTask[];
  columnId: string;
};

// eslint-disable-next-line react/display-name
export const CardList = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '1px' }} ref={ref}>
      {props.tasks.map((task, index) => (
        <Card columnId={props.columnId} key={task.id} task={task} index={index} />
      ))}
      {props.placeholder}
    </div>
  );
});
