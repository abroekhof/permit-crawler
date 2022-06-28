import config from '../../config';
import { forestNameIdMap } from '../constants';

const { tripDetails } = config;
const { permitType, date } = tripDetails;

const generatePageUrl = (): string => {
	const permitId: string = forestNameIdMap['hgk'];

	const pageUrl: string = `https://www.recreation.gov/permits/${permitId}/registration/detailed-availability?permitT${permitType}&date=${date}`;

	return pageUrl;
};

export default generatePageUrl;
