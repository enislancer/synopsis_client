import * as React from 'react';

import { Wrapper } from '@components';

import './index.scss';

export const NotFound = (): React.ReactElement<any> => (
		<div className="c-not-found">
			404 <br />
			Page not found
		</div>
);

export default NotFound;
