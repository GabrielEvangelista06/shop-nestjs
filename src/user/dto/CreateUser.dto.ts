import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  email: string;

  @MinLength(8, { message: 'A senha precisa ter no minímo 8 carácteres' })
  password: string;
}
