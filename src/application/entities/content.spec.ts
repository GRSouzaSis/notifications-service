/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notification content', ()=> {
  it('should be able to create a Notification content', () => {
    const content = new Content('Notification nova');
  
    expect(content).toBeTruthy();
  });
  
  it('should not be able to create a Notification content with less than 4 characters', () => {
    expect(()=> new Content('Eu')).toThrow();
  });
  
  it('should not be able to create a Notification content with more than 240 characters', () => {
    expect(()=> new Content('E'.repeat(241))).toThrow();
  });

})

