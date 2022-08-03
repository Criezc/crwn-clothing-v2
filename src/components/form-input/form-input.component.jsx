import "./form-input.styles.scss";

const FormInput = ({ label, type, onChange, name, value }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        required
        onChange={onChange}
        name={name}
        value={value}
      />
      {label && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
