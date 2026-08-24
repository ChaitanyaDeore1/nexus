import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles, AppRole } from './roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

export function Auth(...roles: AppRole[]) {
  return applyDecorators(
    UseGuards(AuthGuard('jwt'), RolesGuard),
    Roles(...roles),
  );
}