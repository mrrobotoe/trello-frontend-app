import React from 'react';
import { Resolver, useForm } from 'react-hook-form';

import { AddNewCardFormButton } from '@/components/Buttons/Buttons.styled';
import { useAppDispatch } from '@/hooks';
import { taskAdded } from '@/state/features/todos/tasksSlice';

import {
  AddNewCardContainer,
  AddNewCardFormInput,
  ButtomContainer,
  CloseButton,
  TextAreaContainer,
} from './AddNewCardForm.styled';

type TFormValues = {
  title: string;
};

type TProps = {
  columnId: string;
  showForm: () => void;
};

export const AddNewCardForm = ({ columnId, showForm }: TProps) => {
  const inputElement = React.useRef<HTMLTextAreaElement>(null);
  const wrapperRef = React.useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  });

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
      showForm();
    }
  };

  const resolver: Resolver<TFormValues> = async (values) => {
    return {
      values: values.title ? values : {},
      errors: !values.title
        ? {
            title: {
              type: 'required',
              message: 'This is required.',
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
    reset,
  } = useForm<TFormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    dispatch(
      taskAdded({
        columnId: columnId,
        content: data.title,
      })
    );
    reset();
    showForm();
  });

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const container = {
    hidden: { height: '0%', opacity: 0 },
    show: {
      opacity: 1,
      height: 'max-content',
      transition: {
        ease: 'linear',
        duration: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <AddNewCardContainer
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={onSubmit}
      ref={wrapperRef}
    >
      <TextAreaContainer variants={item}>
        <AddNewCardFormInput
          minRows={3}
          spellCheck={false}
          max-length={512}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          {...register('title')}
          placeholder="Enter task details..."
        />
      </TextAreaContainer>
      <ButtomContainer variants={item}>
        <AddNewCardFormButton disabled={!isDirty || !isValid} type="submit">
          Create
        </AddNewCardFormButton>
        <CloseButton onClick={showForm} />
      </ButtomContainer>
    </AddNewCardContainer>
  );
};
