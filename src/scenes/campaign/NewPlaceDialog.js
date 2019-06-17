import React, { useState } from 'react';
import Dialog from '../../components/Dialog';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';
import ButtonRow from '../../components/ButtonRow';
import Button from '../../components/Button';
import SubmitButton from '../../components/SubmitButton';
import useAutoFocus from '../../hooks/auto-focus';

const NewPlaceDialog = ({
  onCreate,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const autoFocusRef = useAutoFocus();

  const handleSubmit = () => {
    onCreate({
      name,
    });
  };

  return (
    <Dialog title="Create place">
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <TextInput ref={autoFocusRef} id="name" value={name} onChange={setName} />
        </Fieldset>
        <ButtonRow>
          <Button onClick={onCancel}>Cancel</Button>
          <SubmitButton>Create</SubmitButton>
        </ButtonRow>
      </Form>
    </Dialog>
  )
};

export default NewPlaceDialog;
