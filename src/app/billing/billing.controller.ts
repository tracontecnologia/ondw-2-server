import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';

@Controller('api/v1/billings')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get('dashboard')
  @UseGuards(AuthGuard('jwt'))
  dashboard() {
    return this.billingService.dashboard();
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.billingService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createNew(@Body() body: CreateBillingDto) {
    const userId = '91a39aa3-543c-4727-ab96-58559f37a987';
    return this.billingService.createNew(body, userId);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.billingService.findOneById(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateBillingDto,
  ) {
    return this.billingService.updateById(id, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.billingService.deleteById(id);
  }
}
