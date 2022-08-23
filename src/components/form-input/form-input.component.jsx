import {FormInputLabel,Group,Input} from './form-input.styles'

const FormInput = ({ label, type, onChange, name, value }) => {
  return (
    <Group>
      <Input
        className="form-input"
        type={type}
        required
        onChange={onChange}
        name={name}
        value={value}
      />
      {label && (
        <FormInputLabel
        shrink={value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
