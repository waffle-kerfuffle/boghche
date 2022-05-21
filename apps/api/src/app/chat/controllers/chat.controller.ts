import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('chat')
@Controller("chat")
export class ChatController {

  @Get('getUserGroups')
  async getUserGroups() {

  }

  @Post('findGroup')
  async findGroup() {

  }

  @Post('searchGroups')
  async searchGroups() {

  }

  @Post('findMessage')
  async searchMessage() {

  }

  @Post('searchMessages')
  async searchMessages() {

  }

}
