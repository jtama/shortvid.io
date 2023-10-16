import {AbsoluteFill} from 'remotion';

import {DefaultProps} from '../../../types/defaultProps.types';

import {DevfestToulouse2023} from './DevfestToulouse2023';
import {DevfestToulouse2023Intro} from './DevfestToulouse2023Intro';

export const DevfestToulouse2023Talk: React.FC<DefaultProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill>
			<DevfestToulouse2023Intro />
			<DevfestToulouse2023
				title={title}
				speakers={speakers}
				date={date}
				time={time}
				location={location}
			/>
		</AbsoluteFill>
	);
};
