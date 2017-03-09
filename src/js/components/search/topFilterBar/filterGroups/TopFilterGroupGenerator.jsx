/**
 * TopFilterGroupGenerator.jsx
 * Created by Kevin Li 1/24/17
 */

import React from 'react';

import TimePeriodFYFilterGroup from './TimePeriodFYFilterGroup';
import TimePeriodDRFilterGroup from './TimePeriodDRFilterGroup';
import AwardTypeFilterGroup from './AwardTypeFilterGroup';
import LocationFilterGroup from './LocationFilterGroup';
import AgencyFilterGroup from './AgencyFilterGroup';
import RecipientFilterGroup from './RecipientFilterGroup';
import AwardIDFilterGroup from './AwardIDFilterGroup';

export const topFilterGroupGenerator = (config = {
    filter: {
        code: ''
    },
    removeFilter: () => null,
    overwriteFilter: () => null,
    clearFilterGroup: () => null
}) => {
    const groupKey = `top-filter-group-${config.filter.code}`;

    switch (config.filter.code) {
        case 'timePeriodFY':
            return <TimePeriodFYFilterGroup key={groupKey} {...config} />;
        case 'timePeriodDR':
            return <TimePeriodDRFilterGroup key={groupKey} {...config} />;
        case 'awardType':
            return <AwardTypeFilterGroup key={groupKey} {...config} />;
        case 'selectedLocations':
            return (<LocationFilterGroup
                key={groupKey} {...config}
                toggle="locationDomesticForeign" />);
        case 'selectedFundingAgencies':
            return <AgencyFilterGroup key={groupKey} {...config} />;
        case 'selectedAwardingAgencies':
            return <AgencyFilterGroup key={groupKey} {...config} />;
        case 'selectedRecipients':
            return <RecipientFilterGroup key={groupKey} {...config} />;
        case 'selectedRecipientLocations':
            return (<LocationFilterGroup
                key={groupKey} {...config}
                toggle="recipientDomesticForeign" />);
        case 'selectedAwardIDs':
            return (<AwardIDFilterGroup key={groupKey} {...config} />);
        default:
            return null;
    }
};
