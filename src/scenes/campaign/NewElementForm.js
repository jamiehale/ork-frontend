import React from 'react';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';
import ButtonRow from '../../components/ButtonRow';
import Button from '../../components/Button';
import SubmitButton from '../../components/SubmitButton';
import Select from '../../components/Select';
import Option from '../../components/Option';
import TextArea from '../../components/TextArea';
import useAutoFocus from '../../hooks/auto-focus';
import useValidation from '../../hooks/validation';

const formConfig = onCreate => ({
  fields: {
    name: {
      isRequired: { message: 'Please give your campaign element a name' },
    },
    type: {
      isRequired: { message: 'Please select an element type' },
    },
  },
  onSubmit: ({ values }) => {
    onCreate(values);
  },
});

const NewElementForm = ({
  onCreate,
  onCancel,
}) => {
  const autoFocusRef = useAutoFocus();
  const { getFieldProps, getFormProps, errors } = useValidation(formConfig(onCreate));

  return (
    <Form {...getFormProps()}>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <TextInput ref={autoFocusRef} id="name" {...getFieldProps('name')} />
        {errors.name && <div className="error">{errors.name}</div>}
        <Label htmlFor="type">Type</Label>
        <Select id="type" {...getFieldProps('type')}>
          <Option>-- Select --</Option>
          <Option value="story">Story</Option>
          <Option value="adventure">Adventure</Option>
          <Option value="chapter">Chapter</Option>
          <Option value="encounter">Encounter</Option>
          <Option value="event">Event</Option>
        </Select>
        <Label htmlFor="description">Description</Label>
        <TextArea id="description" {...getFieldProps('description')} />
      </Fieldset>
      <ButtonRow>
        <Button onClick={onCancel}>Cancel</Button>
        <SubmitButton>Create</SubmitButton>
      </ButtonRow>
    </Form>
  );
};

export default NewElementForm;
