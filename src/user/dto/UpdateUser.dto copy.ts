import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailIsUnique } from '../validator/email-is-unique.validator';

export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @EmailIsUnique({ message: 'Já existe um usuário cadastrado com este email' })
  @IsOptional()
  email: string;

  @MinLength(8, { message: 'A senha precisa ter no minímo 8 carácteres' })
  @IsOptional()
  password: string;
}
