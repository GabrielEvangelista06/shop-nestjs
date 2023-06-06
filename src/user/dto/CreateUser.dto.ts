import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validator/email-is-unique.validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @EmailIsUnique({ message: 'Já existe um usuário cadastrado com este email' })
  email: string;

  @MinLength(8, { message: 'A senha precisa ter no minímo 8 carácteres' })
  password: string;
}
