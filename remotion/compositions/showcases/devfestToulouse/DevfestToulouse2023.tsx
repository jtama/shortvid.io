import {AbsoluteFill, Sequence} from 'remotion';

import {DefaultProps} from '../../../types/defaultProps.types';

import {Details} from './Details';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import {TalkBackground} from "./TalkBackground";

export const DevfestToulouse2023: React.FC<DefaultProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#1c77e0', overflow: 'hidden'}}>
			<Sequence>
				<TalkBackground />
            </Sequence>
			<Logo />
			<Speakers speakers={speakers} />
			<TalkTitle title={title} />
			<Details date={date} time={time} location={location} />
		</AbsoluteFill>
	);
};
