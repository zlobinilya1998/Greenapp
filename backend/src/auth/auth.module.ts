import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.JWT_KEY || 'Default',
      signOptions: {
        expiresIn: '36h',
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
