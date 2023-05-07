import React from 'react';
import { Resolver, useForm } from 'react-hook-form';

import { AddNewColumnFormButton } from '@/components/Buttons/Buttons.styled';
import { useAppDispatch } from '@/hooks';
import { listAdded } from '@/state/features/todos/tasksSlice';

import {
  AddNewColumnFormContainer,
  AddNewColumnFormInput,
  ButtomContainer,
  CloseButton,
} from './AddNewColumnForm.styled';

type TFormValues = {
  title: string;
};

type TProps = {
  toggleForm: () => void;
};

export const AddNewColumnForm = ({ toggleForm }: TProps) => {
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
      toggleForm();
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
    reset,
    formState: { isDirty, isValid },
  } = useForm<TFormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    dispatch(
      listAdded({
        title: data.title,
      })
    );
    reset();
    toggleForm();
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
        delayChildren: 0.2,
      },
    },
  };

  return (
    <AddNewColumnFormContainer
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={onSubmit}
      ref={wrapperRef}
    >
      <AddNewColumnFormInput
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        variants={item}
        {...register('title')}
        placeholder="Enter list title..."
      />
      <ButtomContainer variants={item}>
        <AddNewColumnFormButton disabled={!isDirty || !isValid} type="submit">
          Create
        </AddNewColumnFormButton>
        <CloseButton onClick={toggleForm} />
      </ButtomContainer>
    </AddNewColumnFormContainer>
  );
};
