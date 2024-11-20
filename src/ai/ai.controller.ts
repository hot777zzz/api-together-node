import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { Public } from 'src/public/public.decorator';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Public()
  @Post('generate')
  async generateMessage(@Body() body) {
    // 如果请求体中没有 content 字段，返回 400 错误
    if (!body.content) {
      return {
        code: 400,
        message: '请求体中缺少 content 字段',
      };
    }
    const { content } = body;

    // 获取流对象（假设 aiService.getMes 返回的是一个 AsyncGenerator）
    const response = this.aiService.getMes(content);
    console.log(await response);

    return await response;
  }
}
