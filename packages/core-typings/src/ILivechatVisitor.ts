import type { IRocketChatRecord } from './IRocketChatRecord';

export interface IVisitorPhone {
	phoneNumber: string;
}

export interface IVisitorLastChat {
	_id: string;
	ts: string;
}

export interface ILivechatVisitorConnectionData {
	httpHeaders: {
		[k: string]: string;
	};
	clientAddress: string;
}

export enum VerificationStatusEnum {
	InProgress = 'InProgress',
	Off = 'Off',
	UnVerified = 'UnVerified',
	Verified = 'Verified',
}
export interface IVisitorEmail {
	address: string;
	verified?: VerificationStatusEnum;
}

interface ILivechatData {
	[k: string]: unknown;
}

export interface IVisitorEmailCode {
	code: string;
	expire: Date;
}
export interface IVisitorServices {
	emailCode: IVisitorEmailCode[];
}

export interface ILivechatVisitor extends IRocketChatRecord {
	username: string;
	ts: Date;
	token: string;
	department?: string;
	services?: IVisitorServices;
	name?: string;
	phone?: IVisitorPhone[] | null;
	lastChat?: IVisitorLastChat;
	userAgent?: string;
	ip?: string;
	host?: string;
	visitorEmails?: IVisitorEmail[];
	status?: 'loading' | 'online' | 'busy' | 'away' | 'offline';
	lastAgent?: {
		username: string;
		agentId: string;
		ts: Date;
	};
	livechatData?: ILivechatData;
	contactManager?: {
		username: string;
	};
	wrongMessageCount?: number;
}

export interface ILivechatVisitorDTO {
	id?: string;
	token: string;
	name?: string;
	email?: string;
	department?: string;
	phone?: string;
	username?: string;
	customFields?: {
		key: string;
		value: string;
		overwrite: boolean;
	}[];
	connectionData?: {
		httpHeaders: Record<string, string | string[] | undefined>;
	};
}

export const isILivechatVisitor = (a: any): a is ILivechatVisitor => typeof a?.token === 'string';
