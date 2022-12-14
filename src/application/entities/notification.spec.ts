/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', ()=> {
  it('should be able to create a Notification', () => {
    const notification = new Notification({
      content: new Content('Nova notification'),
      category: 'nova',
      recipientId: 'id1',  
    });
  
    expect(notification).toBeTruthy();
  });
})
