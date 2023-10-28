import { render, screen } from '@testing-library/react';

import App from './App';
import { describe, expect } from 'vitest';
import { it } from 'vitest';

describe('App', () => {
    it('should render component',()=>{
        const component = render (<App />);
        expect(component).toBeDefined();



/*   it('renders headline', () => {
    
    const component =  render(<App />);

   const heading = component.getByRole ('heading', {name:"Hola Mundo!!!"  });

   expect (heading.textContent).toBe("Hola Mundo!!!" ); 
   // se suele usar la exprecion regular mas que el string /hola mundo!!/i lo encontrtaria sin importar las may y min
  
   expect (heading).toBeTruthy() */

    // check if App components renders headline
  });
}); 