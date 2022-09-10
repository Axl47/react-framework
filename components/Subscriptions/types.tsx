import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface SubscriptionsProps {
	id: number;
	title: string;
	subtitle: string;
	amount: string;
	date: string;
	art: {
		icon: string;
		background: string;
	}
}

export interface SubscriptionsSectionProps {
	data: SubscriptionsProps[];
}

export interface SubscriptionsAviProps {
	icon: any;
	background: string;
}