import React, { FunctionComponent } from 'react';
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons"

import { SubscriptionsSectionProps } from './types';
import SubscriptionItem from './SubscriptionItem';

import { colors } from '../../components/colors';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';

const SubscriptionsSectionBackground = styled.View`
	width: 100%;
	padding-horizontal: 25px;
	padding-top: 5px;
	flex: 2;
`;

const SubscriptionRow = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const SubscriptionList = styled.FlatList`
	width: 100%;
`;

const SubscriptionsSection: FunctionComponent<SubscriptionsSectionProps> = (props) => {
	return (
		<SubscriptionsSectionBackground>
			<SubscriptionRow style={{ marginBottom: 25 }}>
				<RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
					Subscriptions
				</RegularText>
				<SmallText textStyles={{ color: colors.secondary }}>
					Recent
					<Ionicons name="caret-down" size={13} color={colors.graydark}></Ionicons>
				</SmallText>
			</SubscriptionRow>
			<SubscriptionList
				data={props.data}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: 25,
				}}
				keyExtractor={({ id }: any) => id.toString()}
				renderItem={({ item }: any) => <SubscriptionItem {...item} />}
			/>

		</SubscriptionsSectionBackground>
	);
};

export default SubscriptionsSection;