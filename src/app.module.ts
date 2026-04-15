import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ComponentsModule } from './components/components.module';
import { BuildsModule } from './builds/builds.module';
import { User } from './users/entities/user.entity';
import { Component } from './components/entities/component.entity';
import { Build } from './builds/entities/build.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User, Component, Build],
      synchronize: true,
      ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    }),
    AuthModule,
    UsersModule,
    ComponentsModule,
    BuildsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}