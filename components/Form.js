import Inputbox from './Inputbox';
import Select from './Select';
import styles from './Form.module.css';
import { useState } from 'react';

export default function Form() {
  const APIKEY = 'a427e63b73f94ba5be265b63203be445';
  let [ingredientName, setIngredientName] = useState('');
  let [sourceAmount, setSourceAmount] = useState('');
  let [sourceUnit, setSourceUnit] = useState('');
  let [targetUnit, setTargetUnit] = useState('');
  let [result, setResult] = useState('');
  // let [autocompleteOptions, setAutocompleteOptions] = useState([
  //   'egg',
  //   'edamame',
  //   'escargot',
  // ]);

  async function converter(
    ingredientName,
    sourceAmount,
    sourceUnit,
    targetUnit
  ) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/convert?apiKey=${APIKEY}&ingredientName=${ingredientName}&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  }

  async function handleClick() {
    const result = await converter(
      ingredientName,
      sourceAmount,
      sourceUnit,
      targetUnit
    );

    setResult(result.answer);
  }

  // async function autocomplete(event) {
  //   const response = await fetch(
  //     `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIKEY}&query=${event}&number=20`
  //   );
  //   const jsonData = await response.json();
  //   console.log('autocomplete', jsonData);
  // }

  return (
    <>
      <div className={styles.formContainer}>
        <Inputbox
          name='Ingrediens'
          text='Ingredient'
          type='text'
          placeholder='Type your ingredient'
          handleChange={(event) => {
            setIngredientName(event.target.value);
            // autocomplete(event.target.value);
          }}
        />
        {/* <ul className={styles.autoCompleteList}>
          {autocompleteOptions
            ? autocompleteOptions.map((ingridient) => (
                <li>
                  <button
                    className={styles.autoCompleteLi}
                    onClick={(event) =>
                      setIngredientName('event: ', event.target.innerHTML)
                    }
                  >
                    {ingridient}
                  </button>
                </li>
              ))
            : 'hidelist'}
        </ul> */}
        <div className={styles.measurementContainer}>
          <div>
            <Select
              name='From'
              text='From'
              handleChange={(event) => {
                setSourceUnit(event.target.value);
              }}
            />
            <Inputbox
              name='amount'
              text='Amount'
              type='number'
              placeholder='Choose your amount'
              handleChange={(event) => setSourceAmount(event.target.value)}
            />
          </div>

          <div>
            <Select
              name='To'
              text='To'
              handleChange={(event) => setTargetUnit(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.result}>{result}</div>
      <button className={styles.button} onClick={handleClick}>
        CONVERT
      </button>
    </>
  );
}
