import { Jogo } from './Jogo';

export class Torneio {
  id: number;
  nome: string;
  jogo: Jogo = new Jogo();
}