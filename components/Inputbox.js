import styles from './Inputbox.module.css';

export default function Inputbox({
  name,
  text,
  type,
  handleChange,
  placeholder,
}) {
  return (
    <div className={styles.container}>
      <label for={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        step='0.01'
        placeholder={placeholder}
        required
      />
    </div>
  );
}

// <label for="name">Enter your name: </label>
// <input type="text" name="name" id="name" required>
