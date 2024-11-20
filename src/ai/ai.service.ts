import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // 从环境变量中读取API密钥
      baseURL: 'https://api.aihao123.cn/luomacode-api/open-api/v1',
    });
  }

  // 获取流数据
  async getMes(content: string) {
    const completionStream = (await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: content }],
      // stream: true,
    })) as any;

    // console.log(completionStream);
    // 处理流数据
    return completionStream;
  }
}
