import { UseFilters } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { WebsocketExceptionFilter } from 'src/websocket-exception.filter';

@WebSocketGateway(3001)
@UseFilters(new WebsocketExceptionFilter())
export class WebsocketGateway {
    @SubscribeMessage('foo')
    foo() {
        throw 'test';
    }
}