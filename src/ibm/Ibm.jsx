import React, { useReducer } from 'react';

const initialState = {
  poids: '',
  taille: '',
  bmi: null,
  status: { message: '', color: '' }
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_POIDS':
      return { ...state, poids: action.payload };
    case 'SET_TAILLE':
      return { ...state, taille: action.payload };
    case 'CALCULER_BMI':
      const { poids, taille } = state;
      if (poids && taille) {
        const tailleEnMetres = taille / 100;
        const bmiCalculé = (poids / (tailleEnMetres * tailleEnMetres)).toFixed(2);

        let status = { message: '', color: '' };
        if (bmiCalculé < 19) {
          status = { message: 'Sous-poids', color: 'red' };
        } else if (bmiCalculé > 25) {
          status = { message: 'Surpoids', color: 'orange' };
        } else {
          status = { message: 'Normale', color: 'green' };
        }

        return { ...state, bmi: bmiCalculé, status };
      }
      return state;
    default:
      return state;
  }
}

function Ibm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculerBMI = () => {
    dispatch({ type: 'CALCULER_BMI' });
  };

  return (
    <div>
      <h2>Calculateur de Body Mass Index</h2>
      <div>
        <label>Poids (en kg): </label>
        <input 
          type="number" 
          value={state.poids} 
          onChange={(e) => dispatch({ type: 'SET_POIDS', payload: e.target.value })} 
        />
      </div>
      <div>
        <label>Taille (en cm): </label>
        <input 
          type="number" 
          value={state.taille} 
          onChange={(e) => dispatch({ type: 'SET_TAILLE', payload: e.target.value })} 
        />
      </div>
      <button onClick={calculerBMI}>Calculer</button>
      {state.bmi && (
        <div>
          <p>BMI: {state.bmi}</p>
          <p style={{ color: state.status.color }}>{state.status.message}</p>
        </div>
      )}
    </div>
  );
}

export default Ibm;
