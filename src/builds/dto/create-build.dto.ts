import { IsArray, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateBuildDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsArray()
  @IsUUID('4', { each: true })
  componentIds: string[];
}
