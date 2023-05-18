// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'RABBITMQ_CLIENT',
//         transport: Transport.RMQ,
//         options: {
//           urls: [process.env.RABBITMQ_URI],
//           queue: 'my_queue',
//           queueOptions: {
//             durable: false,
//           },
//         },
//       },
//     ]),
//   ],
// })
// export class RabbitMQModule {}