import styles from './Select.module.css';

//add Value as a parameter in the function use map to display all options

export default function Select({ name, text, handleChange }) {
  return (
    <div className={styles.container}>
      <label for={name}>{text}</label>
      <select id={name} onChange={handleChange}>
        <option value=''>--Choose unit--</option>
        <option value='cups'>cps (cups)</option>
        <option value='deceliters'>dl (deciliters)</option>
        <option value='grams'>g (grams)</option>
        <option value='kilograms'>kg (kilograms)</option>
        <option value='liters'>l (liters)</option>
        <option value='pounds'>lb (pounds)</option>
        <option value='milliliters'>ml (milliliters)</option>
        <option value='milligrams'>ml (milliliters)</option>
        <option value='oz'>oz (ounce)</option>
        <option value='piece'>piece</option>
        <option value='pints'>pt (pint)</option>
        <option value='teaspoons'>tsp (teaspoons)</option>
        <option value='tablespoons'>tbps (tablespoons)</option>
      </select>
    </div>
  );
}
