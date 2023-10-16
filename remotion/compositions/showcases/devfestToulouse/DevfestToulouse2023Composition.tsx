import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';

import {DevfestToulouse2023} from './DevfestToulouse2023';
import {DevfestToulouse2023Intro} from './DevfestToulouse2023Intro';
import {DevfestToulouse2023Talk} from './DevfestToulouse2023Talk';

export const DevfestToulouse2023Composition: React.FC = () => {
	return (
		<Folder name="DevfestToulouse-2023">
			<Composition
				id="DevfestToulouse2023"
				component={DevfestToulouse2023}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="DevfestToulouse2023-Intro"
				component={DevfestToulouse2023Intro}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="DevfestToulouse2023-Intro-Talk"
				component={DevfestToulouse2023Talk}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
