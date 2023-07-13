import {Lottie} from '@remotion/lottie';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../design/atoms/Title';
import {useLottie} from '../../../hooks/useLottie';

export const SponsorMap: React.FC<{
	localisation?: string;
}> = ({localisation = 'Lyon'}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const illustration = useLottie('lf20_svy4ivvy');

	const scaleUpLogo = spring({
		frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});

	const opacityUp = spring({frame, from: 0, to: 1, fps, durationInFrames: 50});

	if (!illustration) {
		return null;
	}

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<Lottie
				style={{
					position: 'absolute',
					top: '0',
					height: '500px',
					filter: 'drop-shadow(0px 0px 2px #000000)',
					color: 'white',
					fill: 'white',
					opacity: opacityUp,
					transform: `scale(${Math.abs(scaleUpLogo)})`,
				}}
				animationData={illustration}
			/>
			<Title
				style={{
					position: 'absolute',
					bottom: 300,
					left: 0,
					fontSize: '3rem',
					opacity: opacityUp,
				}}
			>
				{localisation}
			</Title>
		</AbsoluteFill>
	);
};
