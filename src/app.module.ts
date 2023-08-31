import { Module } from '@nestjs/common';
import { WebsocketGateway } from 'src/websocket.gateway';

@Module({
    imports: [],
    controllers: [],
    providers: [WebsocketGateway]
})
export class AppModule {
}
