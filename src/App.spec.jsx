import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect } from 'vitest';
import { it } from 'vitest';

describe('App', () => {
    it('should render component',()=>{
        const component = render (<App />);
        expect(component).toBeDefined();
  });
}); 