import { Logger } from "@nestjs/common";
import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Server, Socket } from "socket.io"

@WebSocketGateway(81, { cors: true })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    Logger.log('[ws-init]', server);
  }

  handleConnection(client: Socket, ...args: any[]) {
    Logger.log('[ws-connect] ' + client.id);
  }

  handleDisconnect(client: Socket) {
    Logger.log('[ws-disconnect] ' + client.id);
  }

  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: any): string {
    return "Hello world!";
  }
}
