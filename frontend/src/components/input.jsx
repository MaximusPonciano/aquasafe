function Input({ label, type, value, onChange, placeholder, showToggle, onToggle, }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />

      {showToggle && (
        <button type="button" onClick={onToggle}>
          {type === "password" ? "Mostrar" : "Esconder"}
        </button>
      )}
    </div>
  );
}

export default Input;
