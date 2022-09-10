import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from "styled-components/native";

import { colors } from '../components/colors';
import { Container } from '../components/shared';
import SubscriptionsSection from '../components/Subscriptions/SubscriptionsSection';

const HomeContainer = styled(Container)`
	background-color: ${colors.graylight};
	width: 100%;
	flex: 1;
`;

const subscritionData = [
	{
		id: 1,
		amount: "$9.99",
		date: "1 Sep 2022",
		title: "Spotify",
		subtitle: 'Monthly',
		art: {
			background: colors.gray,
			icon: "spotify",
		}
	},
	{
		id: 2,
		amount: "$14.99",
		date: "3 Sep 2022",
		title: "Netflix",
		subtitle: 'Monthly',
		art: {
			background: colors.gray,
			icon: "netflix",
		}
	},
	{
		id: 3,
		amount: "$7.99",
		date: "6 Sep 2022",
		title: "Disney+",
		subtitle: 'Monthly',
		art: {
			background: colors.gray,
			icon: "disneyplus",
		}
	},
	{
		id: 4,
		amount: "$99.99",
		date: "10 Oct 2022",
		title: "Apple Music",
		subtitle: 'Annual',
		art: {
			background: colors.gray,
			icon: "applemusic",
		}
	},
];

const Home: FunctionComponent = () => {
	return (
		<HomeContainer>
			<StatusBar style="dark" />
			<SubscriptionsSection data={subscritionData} />
		</HomeContainer>
	);
};

export default Home;