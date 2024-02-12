import { Metadata } from "./Metadata.js";
import { Config } from "./Config.js";
import { DatabaseTable } from "../database/@types.js";
import {
  ActionRowBuilder,
  ButtonBuilder,
  Client,
  Collection,
  ColorResolvable,
  Message,
} from "discord.js";
import { I18n } from "@hammerhq/localization";
import { LavalinkDataType, LavalinkUsingDataType } from "./Lavalink.js";
import { Kazagumo } from "../lib/Kazagumo.js";
import { Command } from "../structures/Command.js";
import { PremiumUser } from "./User.js";
import { PlayerButton } from "./Button.js";
import { GlobalMsg } from "../structures/CommandHandler.js";
import { RequestInterface } from "../webserver/RequestInterface.js";
import { KazagumoPlayer } from "../lib/main.js";
import { IconType } from "./Emoji.js";
import { ClusterClient } from "discord-hybrid-sharding";
import WebSocket from "ws";

export interface ByteBlaze extends Client {
  metadata: Metadata;
  config: Config;
  logger: any;
  db: DatabaseTable;
  owner: string;
  color: ColorResolvable;
  i18n: I18n;
  prefix: string;
  isDatabaseConnected: boolean;
  shardStatus: boolean;
  lavalinkList: LavalinkDataType[];
  lavalinkUsing: LavalinkUsingDataType[];
  lavalinkUsed: LavalinkUsingDataType[];
  manager: Kazagumo;
  commands: Collection<string, Command>;
  premiums: Collection<string, PremiumUser>;
  interval: Collection<string, NodeJS.Timer>;
  sentQueue: Collection<string, boolean>;
  nplayingMsg: Collection<string, Message>;
  aliases: Collection<string, string>;
  plButton: Collection<string, PlayerButton>;
  leaveDelay: Collection<string, NodeJS.Timeout>;
  nowPlaying: Collection<string, { interval: NodeJS.Timeout; msg: GlobalMsg }>;
  websocket?: WebSocket;
  wsMessage: Collection<string, RequestInterface>;
  UpdateMusic: (player: KazagumoPlayer) => Promise<void | Message<true>>;
  UpdateQueueMsg: (player: KazagumoPlayer) => Promise<void | Message<true>>;
  enSwitch: ActionRowBuilder<ButtonBuilder>;
  diSwitch: ActionRowBuilder<ButtonBuilder>;
  enSwitchMod: ActionRowBuilder<ButtonBuilder>;
  icons: IconType;
  cluster?: ClusterClient<Client>;
  REGEX: RegExp[];
}
