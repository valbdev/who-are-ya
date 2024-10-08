import { Player } from "./player";

export interface DialogData {
  title: string;
  content: string;
  player: Player;
  win: boolean;
}

export interface RulesDialogData {
  title: string,
  content_1: string,
  content_2: string,
  content_3: string,
  content_4: string,
  player: Player
}
