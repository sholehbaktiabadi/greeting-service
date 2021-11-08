import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MessagerService {
  async sent(fullname: string): Promise<boolean> {
    const data = { fullname: `Hey, ${fullname} it’s your birthday` };
    try {
      await axios.post('https://hookb.in/PxYWDlYy1XTpKPrrKX6j', data);
      console.log({ message: 'notification sent' });
      return true;
    } catch (err) {
      console.log({ success: 'notification failed to sent' });
      return false;
    }
  }
}
