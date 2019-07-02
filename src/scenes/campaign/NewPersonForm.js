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
import useAutoFocus from '../../hooks/auto-focus';
import useValidation from '../../hooks/validation';

const formConfig = onCreate => ({
  fields: {
    name: {
      isRequired: { message: 'Please give your person a name' },
    },
    type: {
      isRequired: { message: 'Select a type of person' },
    },
  },
  onSubmit: ({ values }) => {
    onCreate(values);
  },
});

const NewPersonForm = ({
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
          <Option value="pc">PC</Option>
          <Option value="npc">NPC</Option>
          <Option value="monster">Monster</Option>
        </Select>
        {errors.type && <div className="error">{errors.type}</div>}
      </Fieldset>
      <ButtonRow>
        <Button onClick={onCancel}>Cancel</Button>
        <SubmitButton>Create</SubmitButton>
      </ButtonRow>
    </Form>
  );
};

export default NewPersonForm;
