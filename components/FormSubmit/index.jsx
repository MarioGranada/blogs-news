'use client';
import { useFormStatus } from 'react-dom';

const FormSubmit = () => {
  const { pending } = useFormStatus();

  if (pending) {
    return <span>Submitting...</span>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
};

export default FormSubmit;
