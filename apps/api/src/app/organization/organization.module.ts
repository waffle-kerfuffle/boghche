import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/services/user.service';
import { UserModule } from '../user/user.module';
import { OrganizationController } from './controllers/organization.controller';
import { Organization } from './model/organization.entity';
import { OrganizationService } from './services/organization.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization]),
    UserModule
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService],
  exports: [OrganizationService],
})
export class OrganizationModule { }
